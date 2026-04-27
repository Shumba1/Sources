import Link from 'next/link';
import type { ReactNode } from 'react';

import { MemberBottomNav } from '@/components/shell/member-bottom-nav';
import { Icon } from '@/components/ui/icon';
import { ShellMain, ShellViewport } from '@/components/shell/shell-primitives';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ShellViewport tone="app">
      <header className="shell-topbar shell-topbar--app">
        <div className="shell-brand-block">
          <p className="shell-brand">Marriage OS</p>
          <p className="shell-context">Member space</p>
        </div>
        <Link href="/today/check-in" className="shell-pill shell-pill--app" aria-label="Run check-in">
          <span>Run check-in</span>
          <Icon className="pathway-icon pathway-icon--small" name="arrow-right" />
        </Link>
      </header>
      <ShellMain withBottomNav>{children}</ShellMain>
      <MemberBottomNav />
    </ShellViewport>
  );
}
