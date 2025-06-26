'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const metadata = {
  title: 'Contato',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle submit
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">Entre em contato</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <Input
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          className="w-full h-32 p-3 border rounded-md"
          placeholder="Mensagem"
          value={form.message}
          onChange={handleChange}
        />
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
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
