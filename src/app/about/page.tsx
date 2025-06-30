import Image from 'next/image';

export const metadata = {
  title: 'Sobre',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center space-y-8 max-w-full">
      <Image
        src="https://images.unsplash.com/photo-1588776814546-bdec7567a01a?auto=format&fit=crop&w=600&q=60"
        alt="Profissional"
        width={400}
        height={400}
        className="rounded-lg object-cover"
      />
      <div className="bg-[var(--card)] p-6 rounded-xl shadow-md max-w-2xl text-center">
        <p>lorem ipsum indolor...</p>
      </div>
      <div className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Especialidades</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Especialidade 1</li>
          <li>Especialidade 2</li>
          <li>Especialidade 3</li>
        </ul>
      </div>
    </div>
  );
}
