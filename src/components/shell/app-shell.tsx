import Link from 'next/link';
import type { ReactNode } from 'react';
import { MemberBottomNav } from '@/components/shell/member-bottom-nav';
import { ShellMain, ShellViewport } from '@/components/shell/shell-primitives';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ShellViewport tone="app">
      <header className="shell-topbar shell-topbar--app">
        <p className="shell-brand">Marriage OS</p>
        <Link href="/start" className="shell-pill">
          Check state
        </Link>
      </header>
      <ShellMain withBottomNav>{children}</ShellMain>
      <MemberBottomNav />
    </ShellViewport>
  );
}
