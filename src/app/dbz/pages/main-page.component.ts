

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddComponent } from '../components/add/add.component';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [CommonModule, ListComponent, AddComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  constructor(
    private dbzService: DbzService
  ) {
    // dbzService.onNewCharacter({name: 'Goku', power: 10000});
    // dbzService.onNewCharacter({name: 'Vegeta', power: 9500});
    // dbzService.onNewCharacter({name: 'Trunks', power: 1500});
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(character: Character): void {
    this.dbzService.onDeleteCharacter(character);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

}
