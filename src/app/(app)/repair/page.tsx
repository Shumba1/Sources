import Link from 'next/link';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function RepairPage() {
  return (
    <ScaffoldPanel title={getRouteTitle('repair')}>
      <p className="scaffold-meta">Phase 1 scaffold surface</p>
      <p>This route keeps repair entry points stable while feature modules are implemented in later packets.</p>
      <div className="scaffold-actions">
        <Link href="/guides">Open Perspectives</Link>
      </div>
    </ScaffoldPanel>
  );
}
