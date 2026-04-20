import type { SVGProps } from 'react';

export type IconName =
  | 'compass'
  | 'flag'
  | 'triangle-alert'
  | 'message-square'
  | 'refresh-cw'
  | 'chevron-right'
  | 'arrow-right'
  | 'book-open'
  | 'chart-column'
  | 'dot';

const iconPaths: Record<IconName, string[]> = {
  compass: ['M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9', 'm14.7 9.3-3.6 1.6-1.6 3.6 3.6-1.6z'],
  flag: ['M4 20V4', 'M4 4h10l-1.5 3L14 10H4'],
  'triangle-alert': ['M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0', 'M12 9v4', 'M12 17h.01'],
  'message-square': ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
  'refresh-cw': ['M21 12a9 9 0 1 1-2.6-6.4', 'M21 3v6h-6'],
  'chevron-right': ['m9 18 6-6-6-6'],
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'book-open': ['M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z', 'M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z'],
  'chart-column': ['M6 20V10', 'M12 20V4', 'M18 20v-7'],
  dot: ['M12 12h.01'],
};

export function Icon({ name, className, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      {...props}
    >
      {iconPaths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
