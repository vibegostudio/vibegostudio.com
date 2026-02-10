export interface Project {
  id: string;
  title: string;
  description: string;
  url: string | null;
  github: string | null;
  tags: string[];
  featured: boolean;
  status: 'live' | 'coming-soon' | 'in-development' | 'archived';
  year: string;
}

export interface ProjectData {
  featured: Project[];
  upcoming: Project[];
}

export interface HeroBadge {
  icon: string;
  text: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  badges: HeroBadge[];
}

export interface About {
  title: string;
  paragraphs: string[];
}

export interface Contact {
  github: string | null;
  threads: string | null;
  email: string | null;
}

export interface Site {
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
}

export interface Footer {
  text: string;
}

export interface SiteConfig {
  site: Site;
  hero: Hero;
  about: About;
  contact: Contact;
  footer: Footer;
}

export interface TechStack {
  name: string;
  icon: string;
  color: string;
}
