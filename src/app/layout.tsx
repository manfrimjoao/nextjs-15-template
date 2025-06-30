// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import MainFooter from '@/components/Footer';
import MainNavbar from '@/components/Navbar';
import { QueryProvider } from '@/providers/query';
import { ThemeProvider } from '@/providers/theme';
import '@/styles/globals.css';
import type { ChildrenProps } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Portfolio Odontológico',
  description:
    'Template de portfólio para dentistas construído com Next.js e Tailwind.',
  keywords: 'dentista, portfolio, consultório, odontologia',
  authors: [{ name: 'Dentista' }],
  creator: 'Dentista',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://your-domain.com',
    title: 'Portfolio Odontológico',
    description: 'Apresente seus serviços de forma profissional.',
    siteName: 'Portfolio Odontológico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Odontológico',
    description: 'Apresente seus serviços de forma profissional.',
    creator: '@usuario',
  },
};

function RootLayoutContent({ children }: ChildrenProps) {
  return (
    
      <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryProvider>
          <div className="flex min-h-screen bg-[var(--background)] w-full overflow-x-hidden">
            <div className="flex-1 flex flex-col w-full">
              <MainNavbar />
              <main className="flex-1 w-full overflow-x-hidden">
                {children}
              </main>
              <MainFooter />
              {/* Botão flutuante de WhatsApp */}
              <a
                href="https://wa.me/SEU_NUMERO" // Substitua SEU_NUMERO pelo número desejado
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale pelo WhatsApp"
                className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-[var(--primary)] hover:bg-[var(--primary-foreground)] text-[var(--primary-foreground)] hover:text-[var(--primary)] shadow-lg rounded-full p-4 transition-colors duration-200 flex items-center justify-center"
              >
                {/* Ícone do WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.991c-.003 5.456-4.438 9.891-9.893 9.891m8.413-18.306A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.088c0 2.13.557 4.213 1.615 6.044L.057 24l6.043-1.591a11.876 11.876 0 0 0 5.944 1.515h.005c6.554 0 11.989-5.435 11.991-12.088a11.86 11.86 0 0 0-3.485-8.485"/>
                </svg>
              </a>
            </div>
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className:
                'bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]',
              duration: 3000,
            }}
          />
        </QueryProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
    </ClerkProvider>
  );
}
