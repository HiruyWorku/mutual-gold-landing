import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="min-h-screen">
      <app-hero></app-hero>
      <app-features></app-features>
    </main>
  `
})
export class AppComponent {
  title = 'mutual-fund-calculator';
}