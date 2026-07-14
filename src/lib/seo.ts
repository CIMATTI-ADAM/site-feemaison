import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

type SEOProps = {
  title?: string;
  description?: string;
};

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    const pageTitle = title ?? siteConfig.seo.defaultTitle;
    const pageDescription = description ?? siteConfig.seo.defaultDescription;

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDescription);
  }, [title, description]);
}
