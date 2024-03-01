import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  changeName(name: string) {
    this.name = name;
  }

  changeAge(age: number) {
    this.age = age
  }

}
