import type { ReactNode } from 'react';

export function ShellViewport({ children, tone }: { children: ReactNode; tone: 'marketing' | 'app' }) {
  return <div className={`shell-viewport shell-viewport--${tone}`}>{children}</div>;
}

export function ShellMain({ children, withBottomNav = false }: { children: ReactNode; withBottomNav?: boolean }) {
  const className = withBottomNav ? 'shell-main shell-main--with-bottom-nav' : 'shell-main';
  return <main className={className}>{children}</main>;
}

export function ScaffoldPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="scaffold-panel">
      <h1>{title}</h1>
      <div className="scaffold-panel__body">{children}</div>
    </section>
  );
}
