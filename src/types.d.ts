declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}


interface AstroFrontmatter {
  astro: {
    headers: [],
    source: string,
    html: string,
  }
  file: URL;
  url: string;
}

interface ProjectMarkdownFrontmatter extends AstroFrontmatter {
  layout: string;
  title: string;
  company: string;
  date: string;
  description: string;
  technology: string;
  role: string[];
  tags: string[]
}

interface PackageMarkdownFrontmatter extends AstroFrontmatter {
  layout: string;
  name: string;
  date: string;
  description: string;
  badges: Badge[];
  links: PackageLinks;
}

interface Badge {
  alt: string;
  image: string;
  link?: string;
}

interface PackageLinks {
  npm?: string;
  repository?: {
    type: RepositoryType
    url: string;
  }
}

type RepositoryType = 'github';
