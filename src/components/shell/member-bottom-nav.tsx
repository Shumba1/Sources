'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPrimaryNavForPath, primaryMemberNav } from '@/config/routes';

export function MemberBottomNav() {
  const pathname = usePathname();
  const activeNav = getPrimaryNavForPath(pathname);

  return (
    <nav className="shell-bottom-nav" aria-label="Primary">
      {primaryMemberNav.map((item) => {
        const isActive = activeNav === item.id;

        return (
          <Link key={item.id} href={item.href} className={isActive ? 'is-active' : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
