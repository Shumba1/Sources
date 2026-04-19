// src/components/domain/knowledge/article-section.tsx
// Canonical body renderer target for /knowledge/[slug].

import React from 'react';

export interface ArticleSectionProps {
  heading: string;
  body: string;
  kicker?: string;
  callout?: string;
  cta?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  };
}

export default function ArticleSection({ heading, body, kicker, callout, cta }: ArticleSectionProps) {
  return (
    <section data-component="ArticleSection" style={{ maxWidth: '66ch' }}>
      {kicker ? <p>{kicker}</p> : null}
      <h3>{heading}</h3>
      {body.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {callout ? <aside><p>{callout}</p></aside> : null}
      {cta ? <p><a href={cta.href}>{cta.label}</a></p> : null}
    </section>
  );
}
