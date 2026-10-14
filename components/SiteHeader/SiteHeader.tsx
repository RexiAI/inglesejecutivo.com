import { CALENDLY_URL, EMAIL, EMAIL_HREF, EnvelopeIcon } from '@/components/shared';

/** Sticky dark contact bar: wordmark, email, location, booking CTA. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3.5">
        <div className="flex items-center space-x-3">
          <span className="font-serif text-xl font-bold tracking-wide text-amber-400">
            Ralph Barrero
          </span>
          <span className="hidden text-sm text-slate-400 sm:inline">
            | Inglés profesional y académico · 1 a 1
          </span>
        </div>

        <div className="flex items-center space-x-6 text-xs sm:text-sm">
          <a
            href={EMAIL_HREF}
            className="flex items-center space-x-1 font-medium transition-colors hover:text-amber-400"
          >
            <EnvelopeIcon className="h-4 w-4 text-amber-400" />
            <span>{EMAIL}</span>
          </a>
          <span className="hidden text-slate-400 md:inline">Aguascalientes, Ags.</span>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-amber-600 px-3.5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-amber-700"
          >
            Agendar Evaluación
          </a>
        </div>
      </div>
    </header>
  );
}
