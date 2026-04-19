import Link from 'next/link';
import type { ReactNode } from 'react';
import { ShellMain, ShellViewport } from '@/components/shell/shell-primitives';

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <ShellViewport tone="marketing">
      <header className="shell-topbar shell-topbar--marketing">
        <Link href="/" className="shell-brand">
          Marriage OS
        </Link>
        <nav className="shell-actions">
          <Link href="/how-it-works">How it works</Link>
          <Link href="/start">Start</Link>
        </nav>
      </header>
      <ShellMain>{children}</ShellMain>
    </ShellViewport>
  );
}
