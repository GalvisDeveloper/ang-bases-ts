import { Component } from '@angular/core';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { MainPageComponent } from './dbz/pages/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ListComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hello world!';
}
