import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Home from '@/app/page';
import {
  CALENDLY_URL,
  COACHING_EMAIL_HREF,
  EMAIL,
  EMAIL_HREF,
  LINKEDIN_URL,
  PHONE_HREF,
  PROGRAMA_ANCHOR,
  WHATSAPP_URL,
} from '@/components/shared';

// next/font/google requires the Next.js compiler pipeline, which does not run
// under vitest. The mock preserves the CSS-variable contract the layout uses.
vi.mock('next/font/google', () => ({
  Inter: () => ({ variable: '--font-inter' }),
  Playfair_Display: () => ({ variable: '--font-playfair' }),
}));

afterEach(cleanup);

function linksWithHref(href: string): HTMLAnchorElement[] {
  return screen
    .getAllByRole('link')
    .filter((el): el is HTMLAnchorElement => (el as HTMLAnchorElement).href === href);
}

describe('landing page replica', () => {
  it('renders the hero headline exactly as on the source site', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Inglés para avanzar en tu carrera y cumplir tus metas académicas.',
      })
    ).toBeTruthy();
  });

  it('renders the sticky header wordmark and email contact', () => {
    render(<Home />);
    const header = document.querySelector('header') as HTMLElement;
    expect(within(header).getByText('Ralph Barrero')).toBeTruthy();
    expect(linksWithHref(EMAIL_HREF).length).toBeGreaterThan(0);
    expect(screen.getAllByText(EMAIL).length).toBeGreaterThan(0);
  });

  it('points every Calendly CTA at the source booking URL (header, hero, pricing, footer)', () => {
    render(<Home />);
    // header "Agendar Evaluación", hero "Solicitar Diagnóstico…", pricing
    // "Agendar Diagnóstico Gratuito", footer "calendly.com/misterb53"
    expect(linksWithHref(CALENDLY_URL)).toHaveLength(4);
  });

  it('keeps the #programa anchor wired to the pricing section', () => {
    render(<Home />);
    const anchorLinks = screen
      .getAllByRole('link')
      .filter((el) => el.getAttribute('href') === PROGRAMA_ANCHOR);
    expect(anchorLinks).toHaveLength(1);
    const section = document.querySelector('#programa');
    expect(section).not.toBeNull();
    expect(within(section as HTMLElement).getByRole('heading', { level: 2 }).textContent).toBe(
      'Inversión y Estructura Clara'
    );
  });

  it('shows both prices with their exact source formatting', () => {
    render(<Home />);
    expect(screen.getByText('$0 MXN')).toBeTruthy();
    expect(screen.getByText('$3,000 MXN')).toBeTruthy();
  });

  it('renders the coaching mailto CTA with the pre-filled subject', () => {
    render(<Home />);
    expect(linksWithHref(COACHING_EMAIL_HREF)).toHaveLength(1);
  });

  it('renders footer call/WhatsApp/LinkedIn targets verbatim', () => {
    render(<Home />);
    expect(linksWithHref(PHONE_HREF)).toHaveLength(1);
    expect(linksWithHref(WHATSAPP_URL)).toHaveLength(1);
    expect(linksWithHref(LINKEDIN_URL)).toHaveLength(1);
  });

  it('opens external links in a new tab with noopener protection', () => {
    render(<Home />);
    const external = [
      ...linksWithHref(CALENDLY_URL),
      ...linksWithHref(WHATSAPP_URL),
      ...linksWithHref(LINKEDIN_URL),
    ];
    for (const link of external) {
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
    }
  });

  it('exposes the source site metadata (title + description)', async () => {
    const { metadata } = await import('@/app/layout');
    expect(metadata.title).toBe('Inglés Profesional y Preparación TOEFL/TOEIC | Ralph Barrero');
    expect(metadata.description).toContain('Mentoría de inglés 1 a 1 con Ralph Barrero');
  });
});
