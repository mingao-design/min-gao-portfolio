/** 展览档案室设计提醒：项目索引是浏览入口，不是首页瀑布流；它通过筛选、展签和留白帮助进入独立档案。 */
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = { fr:{ kicker:"Index des projets", title:"Projets", body:"Chaque dossier réunit le contexte, les intentions, les matériaux visuels et les pages originales du projet.", all:"Tout" }, en:{ kicker:"Project index", title:"Projects", body:"Each dossier brings together context, intent, visual material and the project’s original pages.", all:"All" } };

export default function Projects() { const { language } = useLanguage(); const t = copy[language]; const [filter, setFilter] = useState<Category | "All">("All"); const list = useMemo(() => projects.filter((project) => filter === "All" || project.category === filter), [filter]);
  return <main className="page-main projects-page"><section className="page-hero"><p className="kicker"><i />01 / {t.kicker}</p><div className="page-hero-layout"><h1>{t.title}</h1><p>{t.body}</p></div></section><section className="index-section"><div className="filter-bar index-filter"><button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>{t.all}</button>{categories.map((category) => <button className={filter === category ? "active" : ""} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div><div className="index-grid">{list.map((project) => <ProjectCard project={project} language={language} key={project.slug} />)}</div></section></main>;
}
