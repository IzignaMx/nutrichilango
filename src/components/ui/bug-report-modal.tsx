import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface BugReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BugReportModal: React.FC<BugReportModalProps> = ({ isOpen, onClose }) => {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description.trim()) {
      toast({
        title: "Error",
        description: "Por favor describe el problema encontrado.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, create mailto link as fallback
      const subject = encodeURIComponent('Reporte de Bug - NutriChilango');
      const body = encodeURIComponent(
        `Descripción del problema:\n${description}\n\n` +
        `Email de contacto: ${email || 'No proporcionado'}\n\n` +
        `Fecha: ${new Date().toLocaleString('es-MX')}\n` +
        `URL: ${window.location.href}`
      );
      
      window.open(`mailto:soporte@nutrichilango.com?subject=${subject}&body=${body}`);
      
      toast({
        title: "Reporte enviado",
        description: "Gracias por tu reporte. Te contactaremos pronto.",
      });
      
      // Reset form
      setDescription('');
      setEmail('');
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el reporte. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reportar un problema</DialogTitle>
          <DialogDescription>
            Ayúdanos a mejorar reportando cualquier problema que encuentres.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bug-description">
              Descripción del problema *
            </Label>
            <Textarea
              id="bug-description"
              placeholder="Describe qué problema encontraste y cómo podemos reproducirlo..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact-email">
              Email (opcional)
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting || !description.trim()}
              className="flex items-center gap-2"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar reporte
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BugReportModal;