'use client';
import { useState } from 'react';
import { Entrance } from './Motion';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { TemplateLocale } from '../../../types';
import { bi, faqs } from '../content';
export function FAQ({ locale }: {
    locale: TemplateLocale;
}) { const [active, setActive] = useState<number | null>(null), reduced = useReducedMotion(); return <section className="art-faq art-container"><div><span className="art-eyebrow">{bi('合作之前', 'BEFORE WE BEGIN')[locale]}</span><h2>FAQs</h2><p>{bi('你想知道的，都在这里', 'Got questions? I’ve got answers.')[locale]}</p></div><div>{faqs.map(([q, a], i) => <Entrance className="art-faq-item" key={i} y={40}><h3><button aria-expanded={active === i} aria-controls={'art-faq-' + i} onClick={() => setActive(active === i ? null : i)}>{q[locale]}<span aria-hidden="true">{active === i ? '−' : '+'}</span></button></h3><AnimatePresence initial={false}>{active === i && <motion.div id={'art-faq-' + i} initial={reduced ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.25 }}><p>{a[locale]}</p></motion.div>}</AnimatePresence></Entrance>)}</div></section>; }
