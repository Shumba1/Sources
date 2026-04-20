import Link from 'next/link';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function TodayPage() {
  return (
    <ScaffoldPanel title={getRouteTitle('today')}>
      <p className="scaffold-meta">Phase 1 scaffold surface</p>
      <p>This route is shell-complete and ready for local-first state bindings in a later packet.</p>
      <div className="scaffold-actions">
        <Link href="/repair">Open Repair</Link>
      </div>
    </ScaffoldPanel>
  );
}
