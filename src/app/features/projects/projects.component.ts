import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  /** Public URL or path under `/` (e.g. `/project01.png`). */
  image: string;
  tech: string[];
  demo: string;
  github: string;
  category: string;
  year: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack commerce with authentication, catalog management, checkout, and order workflows—structured for scale and maintainability.',
      image: '/project01.png',
      tech: ['.NET', 'Angular', 'SQL Server'],
      demo: 'https://eslamdawood017.github.io/Landing_page/',
      github: '#',
      category: 'Full stack',
      year: '2024',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description:
        'Responsive marketing site with section-based layout, accessible navigation, and a cohesive dark UI aligned with a single design system.',
      image: '/project02.png',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      demo: '#',
      github: '#',
      category: 'Frontend',
      year: '2025',
    },
    {
      title: 'Enterprise REST API',
      description:
        'Versioned HTTP APIs with validation, structured logging, and clear error contracts—designed for integration with web and mobile clients.',
      image: 'https://picsum.photos/seed/portfolio-api/800/500',
      tech: ['.NET', 'EF Core', 'OpenAPI'],
      demo: '#',
      github: '#',
      category: 'Backend',
      year: '2024',
    },
    {
      title: 'Real-Time Task Board',
      description:
        'Collaborative board with live updates, role-aware views, and optimistic UI patterns for a fast-feeling experience under load.',
      image: 'https://picsum.photos/seed/portfolio-tasks/800/500',
      tech: ['Angular', 'SignalR', '.NET'],
      demo: '#',
      github: '#',
      category: 'Full stack',
      year: '2023',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Operations dashboard with filterable metrics, dense-but-readable tables, and export-friendly summaries for stakeholders.',
      image: 'https://picsum.photos/seed/portfolio-dash/800/500',
      tech: ['Angular', 'RxJS', 'Chart.js'],
      demo: '#',
      github: '#',
      category: 'Frontend',
      year: '2024',
    },
    
  ];

  isPlaceholderUrl(url: string): boolean {
    return !url || url === '#';
  }
}
