import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 5000,
    // img: 'assets/images/goku.png'
  }];

  @Output()
  public onDeleteId: EventEmitter<Character> = new EventEmitter();

  onDeleteCharacter(character: Character): void {
    this.onDeleteId.emit(character);
  }
}
