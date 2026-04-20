import Link from 'next/link';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function ProgressPage() {
  return (
    <ScaffoldPanel title={getRouteTitle('progress')}>
      <p className="scaffold-meta">Phase 1 scaffold surface</p>
      <p>This route anchors progress-shell navigation while measurement logic remains out of scope for this phase.</p>
      <div className="scaffold-actions">
        <Link href="/today">Back to Today</Link>
      </div>
    </ScaffoldPanel>
  );
}
