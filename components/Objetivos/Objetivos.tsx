import { DiferenciaCard } from './DiferenciaCard';
import { CheckItem } from '@/components/shared';

/** "Dos objetivos. Un plan individual." — sand section with the two objective cards. */
export function Objetivos() {
  return (
    <section className="border-y border-sand-300 bg-sand-200 px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <h2 className="text-center font-serif text-2xl font-bold text-slate-900">
          Dos objetivos. Un plan individual.
        </h2>
        <div className="grid gap-6 text-sm text-slate-700 md:grid-cols-2">
          <div className="rounded border border-sand-300 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-base font-bold text-slate-900">
              Inglés para tu desarrollo profesional
            </h3>
            <p>
              Practica reuniones, presentaciones y entrevistas con situaciones de tu sector. Trabaja
              vocabulario especializado, respuestas bajo presión y argumentos que reflejen tu
              capacidad profesional.
            </p>
            <ul className="mt-3 space-y-2">
              <CheckItem>
                <strong className="text-slate-900">Autoridad, no solo acento:</strong> la fluidez
                conversacional no basta. En salas de consejo de Miami y Aguascalientes, una duda
                breve o una frase corporativa imprecisa durante preguntas y respuestas suele leerse
                como falta de competencia.
              </CheckItem>
              <CheckItem>
                <strong className="text-slate-900">Mitigación de riesgo:</strong> un término de
                contrato mal comunicado o una propuesta fallida cuesta mucho más que la preparación.
                El costo de un negocio perdido supera con creces cualquier programa de idiomas.
              </CheckItem>
              <CheckItem>
                <strong className="text-slate-900">Velocidad de ejecución:</strong> un líder no
                tiene seis meses para estudiar reglas gramaticales. Trabajamos sobre fechas reales:
                la presentación del próximo jueves o la negociación del próximo mes.
              </CheckItem>
              <CheckItem>
                <strong className="text-slate-900">Respuestas bajo presión:</strong> frases de
                transición para ganar tiempo sin muletillas y respuestas estructuradas de 20
                segundos con el método PREP (Punto, Razón, Ejemplo, Punto) para preguntas difíciles
                de inversionistas o del consejo.
              </CheckItem>
            </ul>
          </div>
          <div className="rounded border border-sand-300 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-base font-bold text-slate-900">
              Preparación para tus metas universitarias
            </h3>
            <p>
              Prepara el TOEFL o TOEIC para tu titulación o solicitud de posgrado, según los
              requisitos de tu institución. La práctica se adapta a las habilidades evaluadas y al
              formato del examen que necesitas presentar.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">
          <strong className="text-slate-900">Cómo trabajamos:</strong> casos de estudio, debates y
          simulaciones, junto con ejercicios específicos para tu objetivo. La retroalimentación
          combina observaciones durante la práctica y revisión al cierre, sin interrumpir cada
          intervención. El diagnóstico orienta el plan; el avance se revisa con tareas comparables.
        </p>
        <DiferenciaCard />
      </div>
    </section>
  );
}
