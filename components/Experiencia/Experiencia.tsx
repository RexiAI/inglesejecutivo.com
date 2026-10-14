import { LINKEDIN_URL, LinkedInIcon } from '@/components/shared';

/**
 * "Experiencia al servicio de tu aprendizaje" — sand section with bio cards,
 * trajectory paragraphs and the LinkedIn CTA.
 *
 * Bio-card h3s use `font-sans` (Inter): the source site applied an inline
 * style for the same effect; the class renders identically and keeps the
 * no-inline-styles house rule. See DESIGN.md §Typography.
 */
export function Experiencia() {
  return (
    <section className="border-t border-sand-300 bg-sand-200 px-4 py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Experiencia al servicio de tu aprendizaje
          </h2>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
            Ralph Barrero | Director y fundador · Desde 2024
          </p>
        </div>

        <div className="grid gap-6 text-sm text-slate-700 md:grid-cols-2">
          <div className="space-y-2 rounded border border-sand-300 bg-white p-5">
            <h3 className="font-sans text-base font-bold text-slate-900">
              Dirección académica y formación corporativa
            </h3>
            <p className="text-xs text-slate-600">
              Trayectoria en enseñanza y gestión de programas de inglés desde 1998: dirección
              académica en Wall Street English, dirección de centro en Berlitz México y dirección
              regional de soluciones corporativas en Wall Street English China.
            </p>
          </div>
          <div className="space-y-2 rounded border border-sand-300 bg-white p-5">
            <h3 className="font-sans text-base font-bold text-slate-900">
              Mentoría para profesionales internacionales
            </h3>
            <p className="text-xs text-slate-600">
              Coaching de inglés de negocios en Learnlight (2014–2018) y Speexx (2018–2022), con
              planes adaptados a objetivos de trabajo, comunicación internacional y
              retroalimentación sobre expresión oral y escrita.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">
          Como fundador de MultiEnglish (2007–2014), desarrolló programas para empresas y
          universidades en Aguascalientes y estableció un centro autorizado de aplicación
          TOEFL/TOEIC de ETS. Esa experiencia en evaluación orienta hoy la preparación individual;
          no implica una autorización vigente del programa actual por ETS.
        </p>
        <p className="text-sm leading-relaxed text-slate-700">
          También se desempeñó como traductor para el expresidente de México Vicente Fox. Esa
          experiencia en comunicación de alto nivel, donde cada palabra cuenta, define el estándar
          de precisión y discreción de cada sesión.
        </p>
        <div className="flex justify-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
          >
            <LinkedInIcon className="h-5 w-5 shrink-0" />
            Referencias profesionales en LinkedIn
            <span className="sr-only">(abre en una nueva pestaña)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
