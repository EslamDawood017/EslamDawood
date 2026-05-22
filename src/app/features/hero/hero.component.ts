import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  /**
   * Add your file as `public/11.jpg` (or change extension below).
   * Supported: .jpg, .jpeg, .png, .webp
   */
  readonly profilePhotoSrc = '11.png';
  readonly profilePhotoAlt = 'Professional portrait';
}
