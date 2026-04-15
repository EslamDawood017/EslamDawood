import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly brand = 'Eslam Dawood';
  readonly links = [
    { label: 'Home', fragment: 'home' },
    { label: 'About', fragment: 'about' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Contact', fragment: 'contact' },
  ] as const;
  activeFragment: string = this.links[0].fragment;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = this.links.map((l) => l.fragment);

    for (let section of sections) {
      const el = document.getElementById(section);
      if (!el) continue;

      const rect = el.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeFragment = section;
        break;
      }
    }
  }
}
