'use client';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import type { SiteTemplatePageProps } from '../../../types';
import { articles, asset, bi } from '../content';
import { Shell } from '../components/Shell';
import { hrefFor } from '../routing';
export default function ArticlePage({ locale = 'zh', basePath }: SiteTemplatePageProps) { const slug = usePathname().split('/').at(-1), article = articles.find(a => a.slug === slug); if (!article)
    notFound(); return <Shell {...{ locale, basePath }}><article className="art-article art-container"><header className="art-page-heading"><span className="art-eyebrow">{article.category[locale]} · {article.date}</span><h1>{article.title[locale]}</h1><p>{article.intro[locale]}</p></header><img className="art-article-cover" src={asset(article.image)} alt={article.title[locale]}/><div className="art-prose">{article.sections.map(([title, text]) => <section key={title.en}><h2>{title[locale]}</h2><p>{text[locale]}</p></section>)}<Link className="art-text-link" href={hrefFor(basePath, 'blog')}>← {bi('返回设计日志', 'Back to journal')[locale]}</Link></div></article></Shell>; }
