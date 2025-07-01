'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-16 bg-[var(--card)]"
      >
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
            className="image-frame w-full h-64 md:h-auto object-cover"
          />
        </div>
      </motion.section>

      {/* Sobre o Doutor */}
      <motion.section
        className="w-full py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container grid items-center gap-8 px-4 sm:px-6 md:grid-cols-2">
          <Image
            src="/images/foto2.jpg"
            alt="Consultório"
            width={500}
            height={500}
            className="image-frame w-full h-64 md:h-auto object-cover"
          />
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold">Sobre o Dr.</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Profissional dedicado a proporcionar tratamentos de excelência com foco no bem-estar e na saúde bucal.
            </p>
            <Button asChild size="lg" withAnimation>
              <a href="/contact">Agende sua avaliação</a>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Áreas de Atuação */}
      <motion.section
        className="w-full py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 sm:px-6 space-y-12">
          <h2 className="text-2xl font-bold text-center">Áreas de Atuação</h2>
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              className={`flex flex-col items-center gap-6 md:gap-8 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={area.image}
                alt={area.title}
                width={500}
                height={300}
                className="image-frame w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="md:w-1/2 space-y-2 text-center md:text-left">
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="w-full py-12 bg-[var(--card)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 sm:px-6 max-w-full space-y-6">
          <h2 className="text-2xl font-bold text-center mb-8">Depoimentos</h2>
          {feedbacks.map((fb, index) => (
            <motion.div
              key={fb.name}
              className="mx-auto max-w-md p-6 rounded-xl shadow-md bg-[var(--background)] border border-[var(--border)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="mb-4 text-lg text-center">“{fb.message}”</p>
              <span className="text-sm font-semibold text-[var(--primary)] block text-center">
                {fb.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contato CTA */}
      <motion.section
        className="w-full py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container grid items-center gap-8 px-4 sm:px-6 md:grid-cols-2">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold">Agende sua consulta</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Entre em contato para marcar uma avaliação personalizada.
            </p>
            <Button asChild size="lg" withAnimation>
              <a href="/contact">Fale conosco</a>
            </Button>
          </div>
          <Image
            src="/images/foto3.jpg"
            alt="Contato"
            width={500}
            height={500}
            className="image-frame w-full h-64 md:h-auto object-cover"
          />
        </div>
      </motion.section>
    </div>
  );
}
