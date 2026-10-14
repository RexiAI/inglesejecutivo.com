import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Inglés Profesional y Preparación TOEFL/TOEIC | Ralph Barrero',
  description:
    'Mentoría de inglés 1 a 1 con Ralph Barrero para profesionales y universitarios. Inglés de negocios y preparación TOEFL/TOEIC en Aguascalientes y en línea. Evaluación de 1 hora sin costo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`flex min-h-screen flex-col justify-between ${inter.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
