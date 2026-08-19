/** 展览档案室设计提醒：项目卡把原始视觉作为作品证据，文字是展签；朱红只用于编号和进入档案的操作。 */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Language, Project } from "@/data/portfolio";

export function ProjectCard({ project, language, className = "" }: { project: Project; language: Language; className?: string }) {
  const t = project[language];
  return <article className={`project-card ${className}`}><Link href={`/projects/${project.slug}`} className="project-image"><img src={project.image} alt={`${t.title} — original project page`} /><span className="card-number">{project.id}</span><span className="card-open"><ArrowUpRight size={17} /></span></Link><div className="project-info"><div className="project-facts"><span>{project.category}</span><span>{t.location}</span><span>{t.year}</span></div><h3><Link href={`/projects/${project.slug}`}>{t.title}</Link></h3><p>{t.subtitle}</p><small>{t.role}</small><Link className="archive-action" href={`/projects/${project.slug}`}>{language === "fr" ? "Ouvrir le dossier" : "Open dossier"}<ArrowUpRight size={14} /></Link></div></article>;
}
