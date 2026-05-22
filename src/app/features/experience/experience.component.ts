import { Component } from '@angular/core';

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  employmentType: string;
  /** ISO 8601 date for `<time datetime>` when a single start date applies */
  periodDatetime?: string;
  /** Human-readable range, e.g. "Oct 2025 – Present" */
  periodLabel: string;
  location: string;
  arrangement: 'On-site' | 'Remote' | 'Hybrid';
  /** URL to company logo image (optional, falls back to logoInitials) */
  logoUrl?: string;
  highlights?: string[];
  /** Optional stack or focus areas with enhanced context */
  skills?: string[];
  logoInitials: string;
  current?: boolean;
}

export interface Education {
  institution: string;
  institutionUrl: string;
  degree: string;
  period: string;
  logoInitials: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences: WorkExperience[] = [
    {
      id: 'it-blocks',
      title: 'Software Engineer · .NET Developer',
      company: 'IT-BLOCKS | Professional Software Services',
      companyUrl: 'https://www.linkedin.com/company/it-blocks',
      employmentType: 'Full-time',
      periodDatetime: '2025-10',
      periodLabel: 'Oct 2025 – Present',
      location: 'Cairo, Egypt',
      arrangement: 'On-site',
      logoInitials: 'IT',
      current: true,
      logoUrl: 'IT-Blocks.jpg',
      highlights: [
        'Delivering scalable web applications with ASP.NET MVC and Angular, aligned with team standards and production workflows.',
        'Built scalable web applications using ASP.NET MVC and Angular.',
        'Collaborated with team to deliver production-ready systems.',
      ],
      skills: [
        'ASP.NET MVC',
        'Angular (RxJS)',
        'C# (SOLID)',
        'SQL Server (Query Optimization)',
        'REST APIs',
      ],
    },
    {
      id: 'tecfy',
      title: 'Full Stack Developer',
      company: 'TECFY',
      companyUrl: 'https://www.linkedin.com/company/tecfy-co',
      employmentType: 'Internship',
      periodLabel: 'Apr 2025 – Oct 2025',
      location: "Portsaid Port Police Department, Bur Sa'id, Egypt",
      arrangement: 'Remote',
      logoInitials: 'TF',
      logoUrl: 'tecfy.jpg',
      highlights: [
        'Developed an HR & Attendance Management System for 200+ employees across web, mobile, and desktop.',
        'Built REST APIs using ASP.NET Core, EF Core, Angular, and SQL Server.',
        'Implemented JWT authentication and role-based authorization to secure access.',
        'Created reusable validation services and standardized API responses.',
      ],
      skills: [
        'ASP.NET Core (Web API)',
        'EF Core (ORM)',
        'Angular (Forms & Validation)',
        'SQL Server',
        'JWT (Authentication)',
      ],
    },
  ];
}
