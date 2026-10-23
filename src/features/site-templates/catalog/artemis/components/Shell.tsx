'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { SiteTemplatePageProps } from '../../../types';
import { brand } from '../config/brand';
import { bi } from '../content';
import { useArtemisHost } from '../host';
import '../theme.css';
import { hrefFor } from '../routing';
export function Reveal({ children, className = '' }: {
    children: ReactNode;
    className?: string;
}) { const reduced = useReducedMotion(); return <motion.div className={className} initial={false} whileInView={reduced ? undefined : { opacity: [0.7, 1], y: [14, 0] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.55 }}>{children}</motion.div>; }

export function Shell({ children, locale = 'zh', basePath }: SiteTemplatePageProps & {
    children: ReactNode;
}) {
    const host = useArtemisHost(), name = host.brandName?.[locale] ?? brand.name[locale], pathname = usePathname(), router = useRouter();
    const [open, setOpen] = useState(false), [download, setDownload] = useState(false), menuRef = useRef<HTMLButtonElement>(null);
    const root = locale === 'en' ? basePath.replace(/\/en\/?$/, '') : basePath.replace(/\/$/, '');
    const slug = pathname.slice(basePath.length).replace(/^\//, '');
    const other = locale === 'en' ? hrefFor(root, slug) : hrefFor(root + '/en', slug);
    function switchLocale(event: MouseEvent<HTMLAnchorElement>) { if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return; event.preventDefault(); router.push(other + window.location.search + window.location.hash); setOpen(false); }
    useEffect(() => { if (!open)
        return; const close = (event: KeyboardEvent) => { if (event.key === 'Escape') {
        setOpen(false);
        menuRef.current?.focus();
    } }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
    const nav = [['works', bi('作品', 'Works')], ['playground', bi('实验室', 'Playground')], ['blog', bi('日志', 'Journal')], ['contact', bi('联系', 'Contact')]] as const;
    return <div className="artemis" lang={locale === 'zh' ? 'zh-CN' : 'en'}>
  <a className="art-skip" href="#art-main">{bi('跳至正文', 'Skip to content')[locale]}</a>
  <header className="art-header">
   <Link className="art-nav-start" href={hrefFor(basePath, 'works')}>{bi('作品', 'Works')[locale]}</Link>
   <Link href={hrefFor(basePath)} className="art-brand" aria-label={bi('返回首页', 'Back to home')[locale]}>{host.logo ? <><img src={host.logo} alt="" width="24" height="24"/><span>{name}</span></> : <span>{name} &<br /><i>{name}</i></span>}</Link>
   <div className="art-nav-end"><Link href={hrefFor(basePath, 'playground')}>{bi('实验室', 'Playground')[locale]}</Link><Link className="art-language" href={other} onClick={switchLocale} aria-label={locale === 'zh' ? 'Switch to English' : '切换为中文'}>{locale === 'zh' ? 'EN' : '中文'}</Link><button className="art-menu-toggle" ref={menuRef} aria-expanded={open} aria-controls="art-menu" aria-label={bi('打开导航菜单', 'Open navigation menu')[locale]} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button></div>
  </header>
  {open && <nav id="art-menu" className="art-menu" aria-label={bi('主导航', 'Main navigation')[locale]}>{nav.map(([slug, title]) => <Link key={slug} href={hrefFor(basePath, slug)} onClick={() => setOpen(false)}>{title[locale]} </Link>)}</nav>}
  <main id="art-main">{children}</main>
  <section className="art-connect art-container" id="connect"><span className="art-eyebrow">{bi('下一段故事，一起创造', 'LET’S MAKE SOMETHING GOOD')[locale]}</span><h2>{bi('准备好创造\n令人心动的作品了吗', 'Ready to build\nsomething amazing?')[locale]}</h2><p>{bi('很期待听听你的想法', 'I’d love to connect with you!')[locale]}</p><Link className="art-button" href={hrefFor(basePath, 'contact')}>{bi('聊聊你的项目', 'Let’s connect')[locale]}</Link><div className="art-connect-links"><a href={'mailto:' + brand.email}>Email <span>{brand.email}</span></a><Link href={hrefFor(basePath, 'works')}>{bi('精选作品', 'Selected works')[locale]}</Link><Link href={hrefFor(basePath, 'blog')}>{bi('设计日志', 'Design journal')[locale]}</Link><button onClick={() => setDownload(true)}>{bi('下载模板', 'Download this template')[locale]}</button></div><p className="art-note" role="status">{download ? bi('这是展示按钮，未下载或跳转外站。', 'This is a display button. No download or external navigation occurred.')[locale] : ''}</p></section>
  <footer className="art-footer art-container"><Link className="art-brand" href={hrefFor(basePath)}>{name}</Link><p>{bi('让好想法，成为好体验', 'Turning good ideas into thoughtful experiences')[locale]}<br />© {brand.year} {name}</p><div><Link href={hrefFor(basePath, 'privacy')}>{bi('隐私政策', 'Privacy')[locale]}</Link><Link href={hrefFor(basePath, 'terms')}>{bi('使用条款', 'Terms')[locale]}</Link>{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></footer>
  {host.marketplaceHref && <Link className="art-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo && <img src={host.lightLogo} alt="" width="24" height="24"/>}<span>{name}</span></Link>}
 </div>;
}
