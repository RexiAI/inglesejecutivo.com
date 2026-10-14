import { Experiencia } from '@/components/Experiencia';
import { Hero } from '@/components/Hero';
import { Objetivos } from '@/components/Objetivos';
import { Programa } from '@/components/Programa';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col justify-between">
        <Hero />
        <Objetivos />
        <Programa />
        <Experiencia />
      </main>
      <SiteFooter />
    </>
  );
}
