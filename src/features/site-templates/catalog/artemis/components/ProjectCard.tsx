import Link from 'next/link';
import type { TemplateLocale } from '../../../types';
import { asset, projects } from '../content';
import { Reveal } from './Shell';
import { hrefFor } from '../routing';
export function ProjectCard({ project, locale, basePath, index }: {
    project: typeof projects[number];
    locale: TemplateLocale;
    basePath: string;
    index: number;
}) { return <Reveal><Link className="art-project" href={hrefFor(basePath, 'works/' + project.slug)}><div className="art-project-image"><img src={asset(project.image)} alt={project.name + ' · ' + project.category[locale]} loading="lazy"/></div><div className="art-project-heading"><h3>{project.name}</h3><span>0{index + 1}</span></div><p>{project.description[locale]}</p><span className="art-tag">{project.category[locale]}</span></Link></Reveal>; }
