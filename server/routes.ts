import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize MailerSend
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_TOKEN || "",
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, company, service, budget, message } = req.body;

      // Validate required fields
      if (!name || !email || !phone || !service || !budget || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "Todos los campos requeridos deben estar completos" 
        });
      }

      // Create email content
      const emailContent = `
        <h2>Nuevo mensaje de contacto</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
          <h3>Información del cliente:</h3>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
          <p><strong>Servicio de interés:</strong> ${service}</p>
          <p><strong>Presupuesto estimado:</strong> ${budget}</p>
          
          <h3>Mensaje:</h3>
          <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Este correo fue enviado desde el formulario de contacto del sitio web.
          </p>
        </div>
      `;

      // Configure email parameters  
      const sentFrom = new Sender("MS_VCjXJj@trial-pxkjn41ryo84z781.mlsender.net", "Formulario de Contacto");
      const recipients = [new Recipient("albaabel46@gmail.com", "Tech Solutions")];

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(new Sender(email, name))
        .setSubject(`Nuevo mensaje de contacto - ${service}`)
        .setHtml(emailContent)
        .setText(`
          Nuevo mensaje de contacto
          
          Nombre: ${name}
          Email: ${email}
          Teléfono: ${phone}
          ${company ? `Empresa: ${company}` : ''}
          Servicio: ${service}
          Presupuesto: ${budget}
          
          Mensaje: ${message}
        `);

      // Send email
      await mailerSend.email.send(emailParams);

      res.json({ 
        success: true, 
        message: "Mensaje enviado correctamente" 
      });

    } catch (error: any) {
      console.error("Error sending email:", error);
      
      let errorMessage = "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
      
      if (error?.body?.message?.includes("Trial accounts can only send emails")) {
        errorMessage = "El correo no se pudo enviar porque la cuenta de MailerSend está en modo de prueba. Por favor, configura tu dominio verificado o contacta al administrador.";
      } else if (error?.body?.message?.includes("domain must be verified")) {
        errorMessage = "El dominio del correo debe estar verificado en MailerSend. Por favor, verifica tu dominio en la configuración de MailerSend.";
      }
      
      res.status(500).json({ 
        success: false, 
        message: errorMessage
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
