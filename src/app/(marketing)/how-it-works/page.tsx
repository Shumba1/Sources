import { pageData } from '@/config/page-data';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function HowItWorksPage() {
  return (
    <ScaffoldPanel title={pageData.howItWorks.hero?.title ?? 'How it works'}>
      <p>{pageData.howItWorks.hero?.subtitle}</p>
    </ScaffoldPanel>
  );
}
