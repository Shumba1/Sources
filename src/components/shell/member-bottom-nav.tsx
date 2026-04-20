'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon, type IconName } from '@/components/ui/icon';
import { getPrimaryNavForPath, primaryMemberNav } from '@/config/routes';

const navIcons: Record<(typeof primaryMemberNav)[number]['id'], IconName> = {
  today: 'compass',
  repair: 'flag',
  guides: 'message-square',
  knowledge: 'book-open',
  progress: 'chart-column',
};

export function MemberBottomNav() {
  const pathname = usePathname();
  const activeNav = getPrimaryNavForPath(pathname);

  return (
    <nav className="shell-bottom-nav" aria-label="Primary">
      {primaryMemberNav.map((item) => {
        const isActive = activeNav === item.id;

        return (
          <Link key={item.id} href={item.href} className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'page' : undefined}>
            <span className="shell-bottom-nav__icon-wrap" aria-hidden="true">
              <Icon className="shell-bottom-nav__icon" name={navIcons[item.id]} width={18} height={18} />
            </span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
