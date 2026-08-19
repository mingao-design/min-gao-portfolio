/** 展览档案室设计提醒：共享外壳使用暖纸、细线、MG 图章与克制朱红；导航应像图录索引，不做营销型按钮。 */
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  fr: { projects: "Projets", writing: "Écrits", about: "À propos", contact: "Contact", menu: "Menu", descriptor: "DESIGN" },
  en: { projects: "Projects", writing: "Writing", about: "About", contact: "Contact", menu: "Menu", descriptor: "DESIGN" },
};

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const t = copy[language];
  const archiveStatus = location.startsWith("/projects/") ? "DOSSIER" : location === "/projects" ? "PROJECT INDEX" : location === "/writing" ? "WRITING" : location === "/about" ? "AUTHOR INDEX" : location === "/contact" ? "CONTACT" : "PORTFOLIO";
  const links = [["/projects", t.projects], ["/writing", t.writing], ["/about", t.about], ["/contact", t.contact]];
  return <div className="site-shell">
    <div className="site-grain" aria-hidden="true" />
    <aside className="archive-rail" aria-hidden="true"><i className="mg-seal" /><span>{archiveStatus}</span><em>MIN GAO</em><b>2024—2026</b></aside>
    <header className="site-header">
      <Link href="/" className="site-brand" onClick={() => setOpen(false)}><i className="mg-seal" aria-hidden="true" /><span>MIN GAO</span><small>{t.descriptor}</small></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([href, label]) => <Link href={href} className={location === href ? "active" : ""} key={href}>{label}</Link>)}</nav>
      <div className="header-actions"><div className="language-switch" aria-label="Language selector"><button className={language === "fr" ? "active" : ""} onClick={() => setLanguage("fr")}>FR</button><span>/</span><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button></div><button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={t.menu}>{open ? <X size={18} /> : <Menu size={18} />}</button></div>
    </header>
    <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">{links.map(([href, label]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}</nav>
    {children}
    <footer className="site-footer"><span>© MIN GAO 2026</span><span>FR / EN PORTFOLIO</span><Link href="/contact">CONTACT</Link></footer>
  </div>;
}
