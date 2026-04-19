// src/config/routes.ts
// Canonical route tree aligned to approved V1 architecture and current public labels.

export type NavItem = 'today' | 'repair' | 'guides' | 'knowledge' | 'progress';
export type ShellType = 'marketing' | 'app';
export type AccessType = 'public' | 'member';

export type RouteId =
  | 'home'
  | 'howItWorks'
  | 'start'
  | 'store'
  | 'storeCategory'
  | 'productDetail'
  | 'pricing'
  | 'safety'
  | 'login'
  | 'signup'
  | 'today'
  | 'todayCheckIn'
  | 'todayState'
  | 'repair'
  | 'repairModule'
  | 'guides'
  | 'guideDetail'
  | 'knowledge'
  | 'knowledgeArticle'
  | 'progress'
  | 'library'
  | 'account'
  | 'settings';

export interface RouteNode {
  id: RouteId;
  path: string;
  title: string;
  shell: ShellType;
  access: AccessType;
  nav?: NavItem;
  showTopBar: boolean;
  showBottomNav: boolean;
  showSideNav: boolean;
  showRightRail?: boolean;
  indexable?: boolean;
  children?: RouteNode[];
}

export const routeTree: RouteNode[] = [
  { id: 'home', path: '/', title: 'Home', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: true },
  { id: 'howItWorks', path: '/how-it-works', title: 'How It Works', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: true },
  { id: 'start', path: '/start', title: 'Start', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: false },
  {
    id: 'store', path: '/store', title: 'Store', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: true,
    children: [
      { id: 'storeCategory', path: '/store/[category]', title: 'Store Category', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: true },
      { id: 'productDetail', path: '/store/[category]/[slug]', title: 'Product Detail', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: true },
    ],
  },
  { id: 'pricing', path: '/pricing', title: 'Pricing', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: true },
  { id: 'safety', path: '/safety', title: 'Safety', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: true },
  { id: 'login', path: '/login', title: 'Log In', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: false },
  { id: 'signup', path: '/sign-up', title: 'Create Account', shell: 'marketing', access: 'public', showTopBar: true, showBottomNav: false, showSideNav: false, indexable: false },
  {
    id: 'today', path: '/today', title: 'Today', shell: 'app', access: 'member', nav: 'today', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false,
    children: [
      { id: 'todayCheckIn', path: '/today/check-in', title: 'Today Check-In', shell: 'app', access: 'member', nav: 'today', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: false, indexable: false },
      { id: 'todayState', path: '/today/state', title: 'Current State', shell: 'app', access: 'member', nav: 'today', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false },
    ],
  },
  {
    id: 'repair', path: '/repair', title: 'Repair', shell: 'app', access: 'member', nav: 'repair', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false,
    children: [
      { id: 'repairModule', path: '/repair/[slug]', title: 'Repair Module', shell: 'app', access: 'member', nav: 'repair', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false },
    ],
  },
  {
    id: 'guides', path: '/guides', title: 'Perspectives', shell: 'app', access: 'member', nav: 'guides', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false,
    children: [
      { id: 'guideDetail', path: '/guides/[slug]', title: 'Perspective Detail', shell: 'app', access: 'member', nav: 'guides', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false },
    ],
  },
  {
    id: 'knowledge', path: '/knowledge', title: 'Knowledge', shell: 'app', access: 'member', nav: 'knowledge', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false,
    children: [
      { id: 'knowledgeArticle', path: '/knowledge/[slug]', title: 'Knowledge Article', shell: 'app', access: 'member', nav: 'knowledge', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false },
    ],
  },
  { id: 'progress', path: '/progress', title: 'Progress', shell: 'app', access: 'member', nav: 'progress', showTopBar: true, showBottomNav: true, showSideNav: true, showRightRail: true, indexable: false },
  { id: 'library', path: '/library', title: 'Library', shell: 'app', access: 'member', showTopBar: true, showBottomNav: false, showSideNav: true, showRightRail: true, indexable: false },
  { id: 'account', path: '/account', title: 'Account', shell: 'app', access: 'member', showTopBar: true, showBottomNav: false, showSideNav: true, showRightRail: false, indexable: false },
  { id: 'settings', path: '/settings', title: 'Settings', shell: 'app', access: 'member', showTopBar: true, showBottomNav: false, showSideNav: true, showRightRail: false, indexable: false },
];

export const primaryMemberNav = [
  { id: 'today' as const, label: 'Today', href: '/today' },
  { id: 'repair' as const, label: 'Repair', href: '/repair' },
  { id: 'guides' as const, label: 'Perspectives', href: '/guides' },
  { id: 'knowledge' as const, label: 'Knowledge', href: '/knowledge' },
  { id: 'progress' as const, label: 'Progress', href: '/progress' },
];

export const storeCategories = [
  { slug: 'templates', label: 'Templates' },
  { slug: 'guides', label: 'Guides' },
  { slug: 'resets', label: 'Resets' },
  { slug: 'bundles', label: 'Bundles' },
] as const;

export const repairCategories = [
  { slug: 'stop-damage', label: 'Stop Damage' },
  { slug: 'restore-bond', label: 'Restore Bond' },
  { slug: 'repair-desire', label: 'Attraction & Desire' },
  { slug: 'overload-life-phase', label: 'Life Pressure' },
  { slug: 'threats-to-system', label: 'External Pressure' },
  { slug: 'stay-and-rebuild', label: 'Stay & Rebuild' },
] as const;
