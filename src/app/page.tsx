'use client';

import FeedbackCarousel from '@/components/FeedbackCarousel';
import ImageCarousel from '@/components/ImageCarousel';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Feedback {
  name: string;
  message: string;
}

const slides = [
  {
    src: '/images/foto1.jpg',
    text: 'Cuide do seu sorriso',
  },
  {
    src: '/images/foto2.jpg',
    text: 'Atendimento personalizado',
  },
  {
    src: '/images/foto3.jpg',
    text: 'Tecnologia de ponta',
  },
  {
    src: '/images/foto4.jpg',
    text: 'Equipe qualificada',
  },
  {
    src: '/images/foto5.jpg',
    text: 'Ambiente acolhedor',
  },
];

const feedbacks: Feedback[] = [
  { name: 'Paciente 1', message: 'Depoimento do paciente 1.' },
  { name: 'Paciente 2', message: 'Depoimento do paciente 2.' },
  { name: 'Paciente 3', message: 'Depoimento do paciente 3.' },
];

const services = [
  {
    image: '/images/foto1.jpg',
    title: 'Implantes Dentários',
    description: 'Recupere a funcionalidade e estética do seu sorriso.',
  },
  {
    image: '/images/foto2.jpg',
    title: 'Ortodontia',
    description: 'Alinhamento correto para um sorriso harmônico.',
  },
  {
    image: '/images/foto3.jpg',
    title: 'Clareamento Dental',
    description: 'Dentes mais brancos e saudáveis.',
  },
  {
    image: '/images/foto4.jpg',
    title: 'Estética Facial',
    description: 'Tratamentos para realçar sua beleza natural.',
  },
  {
    image: '/images/foto5.jpg',
    title: 'Atendimento Humanizado',
    description: 'Cuidado especial em cada etapa do tratamento.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative">
        <ImageCarousel slides={slides} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--primary-foreground)] bg-black/40 p-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">Dr. Nome do Dentista</h1>
          <p className="text-lg sm:text-2xl text-center">CRO 00000 • Sorrisos saudáveis e bem-estar</p>
          <Button asChild size="lg" variant="secondary" withAnimation>
            <a href="/contact">Agende sua consulta</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12">
        <div className="container px-4 sm:px-6 max-w-full">
          <h2 className="text-2xl font-bold text-center mb-8">Serviços</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((servico) => (
              <div key={servico.title} className="flex flex-col items-center text-center space-y-4">
                <Image src={servico.image} alt={servico.title} width={300} height={200} className="rounded-lg object-cover" />
                <h3 className="text-lg font-semibold">{servico.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{servico.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 bg-[var(--card)]">
        <div className="container px-4 sm:px-6 max-w-full">
          <h2 className="text-2xl font-bold text-center mb-8">Depoimentos</h2>
          <FeedbackCarousel feedbacks={feedbacks} />
        </div>
      </section>
    </div>
  );
}
