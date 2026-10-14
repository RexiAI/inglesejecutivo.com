import { CheckItem } from '@/components/shared';

/**
 * "La diferencia 1 a 1 frente a un instituto grupal" card:
 * five check items plus the Antes/Después session example.
 */
export function DiferenciaCard() {
  return (
    <div className="rounded border border-sand-300 bg-white p-6 text-sm text-slate-700 shadow-sm">
      <h3 className="mb-3 text-base font-bold text-slate-900">
        La diferencia 1 a 1 frente a un instituto grupal
      </h3>
      <ul className="space-y-2">
        <CheckItem>
          <strong className="text-slate-900">Cero ejercicios genéricos:</strong> en lugar de temas
          como pedir en un restaurante o repasos de gramática en grupo, ensayamos tus presentaciones
          reales, juntas de consejo y negociaciones de fusiones y adquisiciones.
        </CheckItem>
        <CheckItem>
          <strong className="text-slate-900">Vocabulario de tu industria:</strong> términos que un
          curso general no cubre, como CapEx frente a OpEx, indemnización frente a responsabilidad
          contractual, o cuello de botella frente a <em>lead time</em>, explicados en el contexto de
          tus decisiones.
        </CheckItem>
        <CheckItem>
          <strong className="text-slate-900">Confidencialidad absoluta:</strong> puedes traer
          documentos corporativos sensibles, presentaciones para inversionistas y borradores de
          contratos, con estricta confidencialidad.
        </CheckItem>
        <CheckItem>
          <strong className="text-slate-900">Tiempo bien invertido:</strong> en lugar de pasar 4 a 6
          horas por semana escuchando a otros alumnos de distintos niveles, cada sesión se dedica al
          100% a tus puntos ciegos y a tu agenda inmediata.
        </CheckItem>
        <CheckItem>
          <strong className="text-slate-900">Respaldo entre pares:</strong> las clases grupales
          suelen impartirse por profesores de inglés general. Aquí trabajas con experiencia en
          traducción para el expresidente de México Vicente Fox y en dirección de programas de
          idiomas para empresas.
        </CheckItem>
      </ul>
      <div className="mt-4 space-y-1 border-t border-sand-300 pt-4 text-xs text-slate-600">
        <p className="font-semibold text-slate-900">Ejemplo de una sesión real:</p>
        <p>
          <span className="font-semibold">Antes:</span>{' '}
          <em>
            &quot;We had a big problem with the providers because the pieces arrived late, but we
            fixed it and now we are working normal.&quot;
          </em>
        </p>
        <p>
          <span className="font-semibold">Después:</span>{' '}
          <em>
            &quot;We experienced a temporary supply chain disruption due to vendor delays, but we
            implemented mitigation strategies and have restored baseline operational capacity.&quot;
          </em>
        </p>
      </div>
    </div>
  );
}
