import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  company: z.string().optional(),
  service: z.string().min(1, "Selecciona un servicio"),
  budget: z.string().min(1, "Selecciona un presupuesto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Chatbot Inteligente",
  "Desarrollo Web",
  "E-commerce",
  "Sistema de Gestión",
  "App Móvil",
  "Consultoría Digital",
  "Otro"
];

const budgets = [
  "Menos de $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000 - $50,000",
  "Más de $50,000",
  "A definir"
];

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos dentro de las próximas 24 horas.",
      });

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        form.reset();
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="contact-modal-overlay"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-testid="contact-modal"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Contact Info */}
          <div className="bg-primary text-primary-foreground p-8 lg:p-12 rounded-l-2xl">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4" data-testid="contact-info-title">
                  Hablemos de tu proyecto
                </h3>
                <p className="mb-8 opacity-90" data-testid="contact-info-subtitle">
                  Estamos listos para convertir tu idea en una solución digital extraordinaria. 
                  Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4" data-testid="contact-info-email">
                    <div className="p-3 bg-primary-foreground/20 rounded-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="opacity-90">hola@techsolutions.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                    <div className="p-3 bg-primary-foreground/20 rounded-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Teléfono</div>
                      <div className="opacity-90">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-info-location">
                    <div className="p-3 bg-primary-foreground/20 rounded-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Ubicación</div>
                      <div className="opacity-90">Ciudad de México, México</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
                <div className="text-sm opacity-90">
                  <strong>Tiempo de respuesta promedio:</strong> 2-4 horas
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold" data-testid="contact-form-title">
                Iniciar Proyecto
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                data-testid="contact-form-close"
              >
                ×
              </Button>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
                data-testid="contact-form-success"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h4>
                <p className="text-muted-foreground">
                  Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu nombre" 
                              {...field} 
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="tu@email.com" 
                              type="email" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+52 555 123 4567" 
                              {...field} 
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa (opcional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nombre de tu empresa" 
                              {...field} 
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Servicio de interés *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Selecciona un servicio" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Presupuesto estimado *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-budget">
                                <SelectValue placeholder="Selecciona un rango" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgets.map((budget) => (
                                <SelectItem key={budget} value={budget}>
                                  {budget}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cuéntanos sobre tu proyecto *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe tu proyecto, objetivos y cualquier detalle importante que nos ayude a entender mejor tus necesidades..."
                            className="min-h-[120px]"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full hover-elevate"
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}