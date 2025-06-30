'use client';

import FeedbackCarousel from '@/components/FeedbackCarousel';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Feedback {
  name: string;
  message: string;
}

const feedbacks: Feedback[] = [
  { name: 'Paciente 1', message: 'Depoimento do paciente 1.' },
  { name: 'Paciente 2', message: 'Depoimento do paciente 2.' },
  { name: 'Paciente 3', message: 'Depoimento do paciente 3.' },
];

const areas = [
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
      <section className="w-full py-16 bg-[var(--card)]">
        <div className="container grid items-center gap-8 px-4 sm:px-6 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold">Dr. Nome do Dentista</h1>
            <p className="text-lg sm:text-2xl">CRO 00000 • Sorrisos saudáveis e bem-estar</p>
            <Button asChild size="lg" withAnimation>
              <a href="/contact">Agende sua consulta</a>
            </Button>
          </div>
          <Image
            src="/images/foto1.jpg"
            alt="Dr. Nome do Dentista"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-64 md:h-auto"
          />
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="w-full py-12">
        <div className="container px-4 sm:px-6 space-y-12">
          <h2 className="text-2xl font-bold text-center">Áreas de Atuação</h2>
          {areas.map((area, index) => (
            <div
              key={area.title}
              className={`flex flex-col items-center gap-6 md:gap-8 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <Image
                src={area.image}
                alt={area.title}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full md:w-1/2 h-64 md:h-auto"
              />
              <div className="md:w-1/2 space-y-2 text-center md:text-left">
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{area.description}</p>
              </div>
            </div>
          ))}
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
