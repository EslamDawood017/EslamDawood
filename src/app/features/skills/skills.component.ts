import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

export interface SkillItem {
  name: string;
  description: string;
  icon: string;
  highlight?: boolean;
  tags: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skills: SkillItem[] = [
    {
      name: '.NET',
      description: 'Building scalable APIs and backend systems.',
      icon: 'fa-code',
      highlight: true,
      tags: ['C#', 'ASP.NET Core','WebAPI',],
    },
    {
      name: 'Angular',
      description: 'Modern frontend architecture and UI development.',
      icon: 'fa-laptop-code',
      highlight: true,
      tags: ['TypeScript', 'RxJS','Angular CLI'],
    },
    {
      name: 'SQL Server',
      description: 'Database design and performance optimization.',
      icon: 'fa-database',
      tags: ['SQL-Server', 'MongoDB' , 'indexing' ],
    },
    {
      name: 'APIs',
      description: 'Designing secure and scalable REST APIs.',
      icon: 'fa-plug',
      tags: ['RESTful APIs', 'Authentication', 'OpenAPI'],
    },
    {
      name: 'Tools',
      description: 'Development workflow and productivity tools.',
      icon: 'fa-toolbox',
      tags: ['Git', 'GitHub', 'Azure DevOps' ],  
    },
    {
      name: 'Architecture',
      description: 'Designing scalable and maintainable system architectures.',
      icon: 'fa-sitemap',
      highlight: true,
      tags: [ 'SOLID', 'Design Patterns' , 'N-Tier layers'],
    },
  ];
}
