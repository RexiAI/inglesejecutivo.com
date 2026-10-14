import { WorkspaceIllustration } from './WorkspaceIllustration';
import { CALENDLY_URL, PROGRAMA_ANCHOR } from '@/components/shared';

/** Hero: eyebrow pill, h1, lede, dual CTAs, stats strip + illustration card (7/5 grid). */
export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-12 md:grid-cols-12 md:py-20">
      <div className="space-y-6 md:col-span-7">
        <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
          Profesionales y universitarios · Mentoría 1 a 1
        </span>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Inglés para avanzar en tu carrera y cumplir tus metas académicas.
        </h1>
        <p className="text-lg font-light leading-relaxed text-slate-700">
          Mentoría individual con Ralph Barrero para comunicar tus ideas con claridad en reuniones y
          entrevistas, o preparar el TOEFL/TOEIC que requiere tu universidad. Un plan de trabajo
          según tu nivel, tu objetivo y tu fecha límite.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-amber-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-amber-700"
          >
            Solicitar Diagnóstico Sin Costo (1 Hora)
          </a>
          <a
            href={PROGRAMA_ANCHOR}
            className="px-2 py-3 text-sm font-medium text-slate-700 underline hover:text-slate-900"
          >
            Ver detalles del programa →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-sand-300 pt-4 text-xs text-slate-600">
          <div>
            <span className="block text-base font-bold text-slate-900">+20 Años</span>
            Experiencia en formación de inglés y dirección académica
          </div>
          <div>
            <span className="block text-base font-bold text-slate-900">100% Individual</span>
            Sesiones adaptadas a tus objetivos y ritmo
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-sand-300 bg-sand-200 p-6 text-center shadow-sm md:col-span-5">
        <WorkspaceIllustration className="mx-auto mb-4 h-48 w-full text-slate-700" />
        <h3 className="font-serif text-lg font-bold text-slate-900">
          Sesiones 1 a 1 de Alto Impacto
        </h3>
        <p className="mt-1 text-xs text-slate-600">
          Un espacio de práctica individual para ensayar, recibir retroalimentación y volver a
          intentarlo con mayor claridad.
        </p>
      </div>
    </section>
  );
}
