import {
  CALENDLY_URL,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  PhoneIcon,
  WHATSAPP_URL,
  WhatsAppIcon,
} from '@/components/shared';

/** Dark centered footer: tagline, call/WhatsApp buttons, direct-contact line. */
export function SiteFooter() {
  return (
    <footer className="space-y-3 bg-slate-900 px-4 py-8 text-center text-xs text-white">
      <p className="text-slate-400">
        Inglés profesional y académico 1 a 1 | Aguascalientes, México · Presencial, híbrido y en
        línea
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-2 rounded border border-slate-600 px-4 py-3 text-sm font-semibold transition-colors hover:border-amber-400 hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
        >
          <PhoneIcon className="h-5 w-5 shrink-0" />
          Llamar: {PHONE_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded bg-amber-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          WhatsApp: {PHONE_DISPLAY}
          <span className="sr-only">(abre en una nueva pestaña)</span>
        </a>
      </div>
      <p className="text-slate-500">
        Contacto Directo:{' '}
        <a href={EMAIL_HREF} className="text-amber-400 underline">
          {EMAIL}
        </a>{' '}
        | Agendar:{' '}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 underline"
        >
          calendly.com/misterb53
        </a>
      </p>
    </footer>
  );
}
