import { useState } from 'react';
import ContactForm from '../ContactForm';
import { Button } from '@/components/ui/button';

export default function ContactFormExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>
        Abrir Formulario de Contacto
      </Button>
      <ContactForm 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </div>
  );
}