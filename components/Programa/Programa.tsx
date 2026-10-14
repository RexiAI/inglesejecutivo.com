import { CALENDLY_URL, COACHING_EMAIL_HREF, CheckItem } from '@/components/shared';

/** "Inversión y Estructura Clara" — #programa pricing section with the two plan cards. */
export function Programa() {
  return (
    <section id="programa" className="mx-auto max-w-5xl space-y-12 px-4 py-16">
      <div className="space-y-3 text-center">
        <h2 className="font-serif text-3xl font-bold text-slate-900">
          Inversión y Estructura Clara
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          Comienza con una evaluación de una hora sin costo para definir tu punto de partida y tus
          prioridades. El programa mensual da continuidad a ese plan.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Evaluación Diagnóstica — highlighted card */}
        <div className="relative space-y-6 rounded-lg border-2 border-amber-600 bg-white p-8 shadow-md">
          <span className="absolute -top-3 right-6 rounded bg-amber-600 px-3 py-1 text-xs font-bold uppercase text-white">
            Punto de Partida
          </span>
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">Evaluación Diagnóstica</h3>
            <p className="mt-1 text-xs text-slate-500">
              Sesión individual de diagnóstico y plan de acción
            </p>
          </div>
          <div className="text-3xl font-bold text-slate-900">
            $0 MXN <span className="text-xs font-normal text-slate-500">/ 1 Hora sin costo</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <CheckItem>
              Revisión de tu comunicación en inglés: comprensión, pronunciación, vocabulario y
              gramática.
            </CheckItem>
            <CheckItem>
              Identificación de dificultades para responder, organizar ideas y expresarte con
              claridad.
            </CheckItem>
            <CheckItem>
              Plan de trabajo según tu objetivo profesional o académico, nivel actual y plazo.
            </CheckItem>
            <CheckItem>
              Para objetivos de negocio, evaluación basada en desempeño: una presentación breve con
              preguntas, un correo formal y vocabulario de tu sector. Un puntaje académico por sí
              solo no mide si puedes negociar o responder a un consejo.
            </CheckItem>
          </ul>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded bg-amber-600 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-amber-700"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>

        {/* Mentoría mensual — standard card */}
        <div className="space-y-6 rounded-lg border border-sand-300 bg-white p-8 shadow-sm">
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Mentoría de Inglés 1 a 1
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Enfoque profesional o preparación de exámenes, según tu objetivo
            </p>
          </div>
          <div className="text-3xl font-bold text-slate-900">
            $3,000 MXN <span className="text-xs font-normal text-slate-500">/ mes</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <CheckItem tone="slate">
              <strong>3 horas por semana</strong> de mentoría individual privada.
            </CheckItem>
            <CheckItem tone="slate">
              Simulación de reuniones, entrevistas y estructuración de argumentos.
            </CheckItem>
            <CheckItem tone="slate">
              Preparación TOEFL/TOEIC con práctica de las habilidades y tareas del examen elegido.
            </CheckItem>
          </ul>
          <p className="text-xs leading-relaxed text-slate-600">
            Cada universidad define qué examen, versión y puntaje acepta. La preparación no
            sustituye el examen oficial ni garantiza un puntaje, titulación o admisión.
          </p>
          <a
            href={COACHING_EMAIL_HREF}
            className="block rounded bg-slate-900 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-slate-800"
          >
            Enviar Mensaje Directo
          </a>
        </div>
      </div>
    </section>
  );
}
