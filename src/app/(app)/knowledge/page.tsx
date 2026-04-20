import Link from 'next/link';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function KnowledgePage() {
  return (
    <ScaffoldPanel title={getRouteTitle('knowledge')}>
      <p className="scaffold-meta">Phase 1 scaffold surface</p>
      <p>This route preserves a consistent shell frame while index/detail bindings are added in later packets.</p>
      <div className="scaffold-actions">
        <Link href="/progress">Open Progress</Link>
      </div>
    </ScaffoldPanel>
  );
}
