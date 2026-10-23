import { notFound } from 'next/navigation';
import { artemisTemplate } from '../../features/site-templates/catalog/artemis/meta';
export function generateStaticParams() { return artemisTemplate.surfaces[0].pages.flatMap(page => [{ slug: page.slug ? page.slug.split('/') : [] }, { slug: ['en', ...(page.slug ? page.slug.split('/') : [])] }]); }
export default async function Page({ params }: {
    params: Promise<{
        slug?: string[];
    }>;
}) { const { slug = [] } = await params; const locale = slug[0] === 'en' ? 'en' : 'zh'; const path = (locale === 'en' ? slug.slice(1) : slug).join('/'); const page = artemisTemplate.surfaces[0].pages.find(p => p.slug === path); if (!page)
    notFound(); const { default: Component } = await page.load(); return <Component locale={locale} basePath={locale === 'en' ? '/en' : ''}/>; }
