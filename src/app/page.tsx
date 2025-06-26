'use client';

import ImageCarousel from '@/components/ImageCarousel';

interface Feedback {
  name: string;
  message: string;
}

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1588776814546-bdec7567a01a?auto=format&fit=crop&w=1200&q=60',
    text: 'Cuide do seu sorriso',
  },
  {
    src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=60',
    text: 'Atendimento personalizado',
  },
  {
    src: 'https://images.unsplash.com/photo-1551601651-2f6d3c5078e9?auto=format&fit=crop&w=1200&q=60',
    text: 'Tecnologia de ponta',
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
      <section className="w-full">
        <ImageCarousel slides={slides} />
      </section>
      <section className="w-full py-12 bg-[var(--card)]">
        <div className="container px-4 sm:px-6 max-w-full">
          <h2 className="text-2xl font-bold text-center mb-8">Feedbacks</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {feedbacks.map((fb, idx) => (
              <div
                key={idx}
                className="bg-[var(--background)] p-6 rounded-xl shadow-md"
              >
                <p className="mb-2">{fb.message}</p>
                <span className="text-sm text-[var(--muted-foreground)]">
                  {fb.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
