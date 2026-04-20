import Link from 'next/link';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function GuidesPage() {
  return (
    <ScaffoldPanel title={getRouteTitle('guides')}>
      <p className="scaffold-meta">Phase 1 scaffold surface</p>
      <p>This route holds the Perspectives shell while parallel-track content rendering is introduced later.</p>
      <div className="scaffold-actions">
        <Link href="/knowledge">Open Knowledge</Link>
      </div>
    </ScaffoldPanel>
  );
}
