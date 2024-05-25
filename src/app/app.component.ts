import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingPageComponent],
  template: `
  <main>
    <section class="content">
      <app-landing-page></app-landing-page>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
