'use client';

import FeedbackCarousel from '@/components/FeedbackCarousel';
import Image from 'next/image';

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

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center min-h-[60vh] py-12 animate-fade-in">
        <div className="relative w-40 h-40 mb-6 animate-scale-in">
          <Image
            src="/images/foto3.jpg"
            alt="Foto do profissional"
            fill
            className="object-cover rounded-full border-4 border-[var(--primary)] shadow-lg"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-slide-up">Dr. Nome do Dentista</h1>
        <p className="text-lg sm:text-xl text-center max-w-xl mb-2 animate-slide-up delay-100">
          Cirurgião-Dentista | CRO 00000<br/>
          Especialista em Sorrisos e Bem-estar
        </p>
        <p className="text-md text-center max-w-2xl text-muted-foreground animate-slide-up delay-200">
          Com anos de experiência, dedicação e tecnologia de ponta, ofereço um atendimento humanizado e personalizado para transformar o seu sorriso. Agende sua consulta e descubra um novo motivo para sorrir!
        </p>
      </section>
      <section className="w-full py-12 bg-[var(--card)]">
        <div className="container px-4 sm:px-6 max-w-full">
          <h2 className="text-2xl font-bold text-center mb-8">Feedbacks</h2>
          <FeedbackCarousel feedbacks={feedbacks} />
        </div>
      </section>
    </div>
  );
}
