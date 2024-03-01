import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, HeroComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hello world!';
}
