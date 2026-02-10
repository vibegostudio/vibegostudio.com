import { ProjectData, SiteConfig, TechStack } from '@/types';

// Import JSON data
import projectsData from '@/data/projects.json';
import siteConfigData from '@/data/site-config.json';
import techStackData from '@/data/tech-stack.json';

export function getProjects(): ProjectData {
  return projectsData as ProjectData;
}

export function getSiteConfig(): SiteConfig {
  return siteConfigData as SiteConfig;
}

export function getTechStack(): TechStack[] {
  return techStackData as TechStack[];
}

export function getAllProjects() {
  const data = getProjects();
  return [...data.featured, ...data.upcoming];
}
