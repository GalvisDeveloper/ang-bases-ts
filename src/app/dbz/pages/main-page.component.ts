

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddComponent } from '../components/add/add.component';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [CommonModule, ListComponent, AddComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Goku',
    power: 10000,
    // img: 'assets/images/goku.png'
  }, {
    name: 'Vegeta',
    power: 9500,
    // img: 'assets/images/vegeta.png'
  }, {
    name: 'Trunks',
    power: 1500,
    // img: 'assets/images/vegeta.png'
  }, {
    name: 'Gohan',
    power: 6500,
    // img: 'assets/images/vegeta.png'
  }];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(character: Character): void {
    this.characters = this.characters.filter((c: Character) => c.name !== character.name);
  }

}
