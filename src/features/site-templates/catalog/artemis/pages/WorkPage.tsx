import type { SiteTemplatePageProps } from '../../../types';
import { bi, projects } from '../content';
import { Shell } from '../components/Shell';
import { ProjectCard } from '../components/ProjectCard';
export default function WorkPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell {...{ locale, basePath }}><section className="art-container art-page-heading"><span className="art-eyebrow">{bi('精选项目 · 2024—2026', 'SELECTED PROJECTS · 2024—2026')[locale]}</span><h1>{bi('作品', 'Works')[locale]}</h1><p>{bi('从概念到上线，陪伴初创团队成长的设计', 'From concept to launch — projects that helped startups grow, scale, and succeed.')[locale]}</p></section><section className="art-container art-project-grid art-work-list">{projects.map((project, index) => <ProjectCard key={project.slug} {...{ project, index, locale, basePath }}/>)}</section></Shell>; }
