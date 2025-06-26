import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Contato',
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">Entre em contato</h1>
      <ContactForm />
      <div className="text-center mt-6">
        <Button variant="secondary" asChild>
          <a
            href="https://wa.me/SEU_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale pelo WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
