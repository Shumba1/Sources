'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryMemberNav } from '@/config/routes';

export function MemberBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="shell-bottom-nav" aria-label="Primary">
      {primaryMemberNav.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link key={item.id} href={item.href} className={isActive ? 'is-active' : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
