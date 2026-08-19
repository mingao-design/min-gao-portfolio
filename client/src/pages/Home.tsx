/** 展览档案室设计提醒：首页只像展览前言般呈现精选项目，留白和索引带为独立项目页预留呼吸。 */
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { Link } from "wouter";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, portfolioPdf } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  fr: { kicker:"Portfolio sélectionné · 2024—2026", heroA:"Donner forme", heroB:"aux relations.", intro:"Designer franco-chinoise, je construis des récits, objets et espaces qui rendent les systèmes plus sensibles, plus lisibles et plus habitables.", explore:"Explorer les projets", selected:"Projets sélectionnés", all:"Voir tous les projets", writingKicker:"Écrits & recherches", writingTitle:"Observer, traduire, partager.", writingText:"Notes de projet, réflexions sur les cultures matérielles et récits de design à venir.", about:"À propos", contactTitle:"Construisons des expériences qui comptent.", contactText:"Pour une collaboration, une mission de design ou une conversation autour d’un projet culturel, écrivez-moi.", download:"Télécharger le portfolio PDF" },
  en: { kicker:"Selected portfolio · 2024—2026", heroA:"Giving form", heroB:"to relations.", intro:"A Franco-Chinese designer building narratives, objects and spaces that make systems more felt, more legible and more liveable.", explore:"Explore projects", selected:"Selected projects", all:"View all projects", writingKicker:"Writing & research", writingTitle:"Observe, translate, share.", writingText:"Project notes, reflections on material cultures and future design narratives.", about:"About", contactTitle:"Let’s build experiences that matter.", contactText:"For a collaboration, a design commission or a conversation around a cultural project, write to me.", download:"Download portfolio PDF" },
};

export default function Home() {
  const { language } = useLanguage(); const t = copy[language]; const featured = projects.filter((project) => project.featured).slice(0, 4);
  return <main id="top">
    <section className="wall-hero">
      <div className="wall-hero-image" aria-hidden="true" /><div className="wall-hero-shade" aria-hidden="true" />
      <div className="scene-index"><span>00</span><b>{t.kicker}</b><small>MG / PORTFOLIO</small></div>
      <div className="scene-copy"><p className="kicker"><i />{t.kicker}</p><h1>{t.heroA}<em>{t.heroB}</em></h1><p>{t.intro}</p><Link className="scene-entry" href="/projects"><span>{t.explore}</span><ArrowDownRight size={17} /></Link></div>
      <div className="scene-plaque"><i className="mg-seal" aria-hidden="true" /></div>
    </section>
    <section className="home-projects"><div className="section-head"><div><p className="kicker"><i />01 / {t.selected}</p><div className="heading-lockup"><span className="mg-seal section-stamp" aria-hidden="true" /><h2>{t.selected}</h2></div></div><Link className="archive-action section-action" href="/projects">{t.all}<ArrowUpRight size={15} /></Link></div><div className="home-grid">{featured.map((project, index) => <ProjectCard project={project} language={language} className={`home-card home-card--${index + 1}`} key={project.slug} />)}</div></section>
    <section className="home-writing"><div><p className="kicker"><i />02 / {t.writingKicker}</p><h2>{t.writingTitle}</h2></div><div><p>{t.writingText}</p><Link className="archive-action" href="/writing">{language === "fr" ? "Voir les écrits" : "View writing"}<ArrowUpRight size={15} /></Link></div></section>
    <section className="home-contact"><div><p className="kicker"><i />03 / {t.about}</p><h2>{t.contactTitle}</h2></div><div className="contact-box"><div className="contact-index"><span>MG / ARCHIVE</span><span>END OF INDEX</span></div><p>{t.contactText}</p><a href="mailto:auriane0625@gmail.com">auriane0625@gmail.com <ArrowUpRight size={18} /></a><Link href="/about">{language === "fr" ? "À propos de Min Gao" : "About Min Gao"}</Link><a className="pdf-link" href={portfolioPdf} target="_blank" rel="noreferrer"><Download size={16} />{t.download}</a></div></section>
  </main>;
}
