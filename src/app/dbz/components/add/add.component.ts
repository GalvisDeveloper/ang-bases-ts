import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';

const initialValues = {
  name: '',
  power: 0
}

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})


export class AddComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public character: Character = initialValues

  emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = initialValues;

  }


}
