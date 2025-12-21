export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  supervisor?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "cloud" | "database";
  experience: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
