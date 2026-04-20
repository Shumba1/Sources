import type { IconName } from '@/components/ui/icon';

export type SemanticIcon =
  | 'state'
  | 'nextAction'
  | 'caution'
  | 'script'
  | 'recheck'
  | 'drillIn'
  | 'forward'
  | 'category';

export const semanticIconMap: Record<SemanticIcon, IconName> = {
  state: 'compass',
  nextAction: 'flag',
  caution: 'triangle-alert',
  script: 'message-square',
  recheck: 'refresh-cw',
  drillIn: 'chevron-right',
  forward: 'arrow-right',
  category: 'dot',
};
