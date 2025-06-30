"use client";

import { Button } from '@/components/ui/button';

interface Artigo {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
}

const artigos: Artigo[] = [
  {
    id: 1,
    titulo: 'Como manter a saúde bucal em dia',
    resumo: 'Dicas práticas para cuidar do seu sorriso todos os dias.',
    data: '2024-06-01',
  },
  {
    id: 2,
    titulo: 'O que é clareamento dental?',
    resumo: 'Entenda o procedimento, indicações e cuidados necessários.',
    data: '2024-05-20',
  },
  {
    id: 3,
    titulo: 'Alimentação e saúde dos dentes',
    resumo: 'Saiba como a alimentação influencia na saúde bucal.',
    data: '2024-05-10',
  },
];

export default function ArtigosPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-full">
      <h1 className="text-3xl font-bold mb-8 text-center">Artigos e Dicas de Saúde</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {artigos.map((artigo) => (
          <div
            key={artigo.id}
            className="bg-[var(--card)] p-6 rounded-xl shadow-md flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[var(--primary)]">{artigo.titulo}</h2>
              <p className="text-[var(--muted-foreground)] mb-4">{artigo.resumo}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-[var(--muted-foreground)]">{new Date(artigo.data).toLocaleDateString('pt-BR')}</span>
              <Button asChild size="sm">
                <a href="#">Ler mais</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 