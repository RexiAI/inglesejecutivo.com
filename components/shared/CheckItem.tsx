import type { ReactNode } from 'react';

type CheckItemProps = {
  /** Check-mark color: amber (most lists) or slate (mentoría pricing card). */
  tone?: 'amber' | 'slate';
  children: ReactNode;
};

/** One `✓`-prefixed list item, replicated from the source site's check lists. */
export function CheckItem({ tone = 'amber', children }: CheckItemProps) {
  const toneClass = tone === 'amber' ? 'text-amber-600' : 'text-slate-900';
  return (
    <li className="flex items-start space-x-2">
      <span className={`${toneClass} font-bold`}>✓</span>
      <span>{children}</span>
    </li>
  );
}
