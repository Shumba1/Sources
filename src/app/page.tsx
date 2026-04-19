import Link from 'next/link';
import { pageData } from '@/config/page-data';
import { primaryMemberNav, routeTree, type RouteNode } from '@/config/routes';

function flattenRoutes(nodes: RouteNode[]): RouteNode[] {
  return nodes.flatMap((node) => [node, ...(node.children ? flattenRoutes(node.children) : [])]);
}

export default function HomePage() {
  const home = pageData.home;
  const featureSection = home.sections.find((section) => section.component === 'FeatureGrid');
  const featureItems =
    featureSection && Array.isArray(featureSection.props?.items)
      ? (featureSection.props.items as Array<{ title: string; body: string }>)
      : [];

  const publicRoutes = flattenRoutes(routeTree).filter((route) => route.access === 'public');

  return (
    <main className="min-h-dvh bg-slate-950 text-stone-100">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/80">Marriage OS</p>
            <p className="text-sm text-stone-300">Phase 1 baseline app stack is now wired.</p>
          </div>
          <Link
            href="/how-it-works"
            className="rounded-full border border-blue-400/30 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-400/10"
          >
            See system logic
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.9fr)] lg:py-20">
        <div className="space-y-7">
          {home.hero?.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200/85">{home.hero.eyebrow}</p>
          ) : null}
          <div className="space-y-5">
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-50 sm:text-5xl lg:text-6xl">
              {home.hero?.title}
            </h1>
            {home.hero?.subtitle ? (
              <p className="max-w-3xl text-lg leading-8 text-stone-300">{home.hero.subtitle}</p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            {home.hero?.primaryCta ? (
              <Link
                href={home.hero.primaryCta.href}
                className="rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                {home.hero.primaryCta.label}
              </Link>
            ) : null}
            {home.hero?.secondaryCta ? (
              <Link
                href={home.hero.secondaryCta.href}
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-white/5"
              >
                {home.hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>

          {featureItems.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {featureItems.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h2 className="text-base font-semibold text-stone-50">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{item.body}</p>
                </article>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/25">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">Foundation status</p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-50">Runnable shell baseline</h2>
            <p className="mt-3 text-sm leading-6 text-stone-300">
              This snapshot establishes the manifest, App Router root, TypeScript, Tailwind, and lint/build wiring.
              Shell split, navigation chrome, and route scaffolds come next.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Primary member nav</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {primaryMemberNav.map((item) => (
                <li key={item.id}>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-stone-200">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Public routes already defined</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              {publicRoutes.map((route) => (
                <li key={route.id} className="flex items-center justify-between gap-3 rounded-xl border border-white/5 px-3 py-2">
                  <span>{route.title}</span>
                  <code className="text-xs text-blue-200">{route.path}</code>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
