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
      image: 'EMarket.png',
      tech: ['.NET', 'Angular', 'SQL Server'],
      demo: 'https://eslamdawood017.github.io/E-commerce-project/home',
      github: 'https://github.com/EslamDawood017/E-commerce-project',
      category: 'Full stack',
      year: '2025',
      featured: true,
    },
    {
      title: 'Driving Licenses Management System',
      description:
        'a full-stack Driving License Management System that streamlines the process of managing drivers, license applications, tests, renewals, and license issuance.',
      image: 'DVLD.png',
      tech: ['.NET API', 'ADO.Net', 'Angular'],
      demo: 'https://eslamdawood017.github.io/DVLD-Project/Home',
      github: 'https://github.com/EslamDawood017/DVLD-Project',
      category: 'Full stack',
      year: '2024',
    },
    {
      title: 'Landing Page',
      description:
        'A modern and responsive landing page built using Angular as part of an e-commerce system. The project focuses on delivering a clean UI, smooth user experience, and structured frontend architecture connected to a real backend API.',
      image: 'Landing.png',
      tech: ['Angular', 'HTML', 'TypeScript', 'SCSS'],
      demo: 'https://eslamdawood017.github.io/Landing_page/',
      github: 'https://github.com/EslamDawood017/Landing_page',
      category: 'Frontend',
      year: '2024',
    },
    {
      title: 'Authentication System',
      description:
        'A full-stack authentication system built with Angular and .NET Core, featuring secure JWT-based login, registration, refresh tokens, OTP verification, password reset, and role-based authentication using ASP.NET Identity. The project includes a responsive Angular frontend with a landing page and authentication components, integrated with a secure and scalable Web API backend.',
      image: 'AuthSys.png',
      tech: ['.NET API', 'Angular', 'JWT'],
      demo: 'https://eslamdawood017.github.io/Authentication-System/',
      github: 'https://github.com/EslamDawood017/Authentication-System',
      category: 'Full stack',
      year: '2025',
    },
    {
      title: 'Bondi Landing Page',
      description:
        'A modern and responsive landing page built using vanilla HTML, CSS, and JavaScript, focused on clean UI design, smooth user experience, and performance optimization.',
      image: 'Bondi.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://eslamdawood017.github.io/Bondi/',
      github: 'https://github.com/EslamDawood017/Bondi',
      category: 'Frontend',
      year: '2023',
    },
  ];

  isPlaceholderUrl(url: string): boolean {
    return !url || url === '#';
  }
}
