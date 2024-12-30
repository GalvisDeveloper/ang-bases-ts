import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }

    public characters: Character[] = [{
        id: uuid(),
        name: 'Goku',
        power: 10000,
        // img: 'assets/images/goku.png'
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 9500,
        // img: 'assets/images/vegeta.png'
    }, {
        id: uuid(),
        name: 'Trunks',
        power: 1500,
        // img: 'assets/images/vegeta.png'
    }, {
        id: uuid(),
        name: 'Gohan',
        power: 6500,
        // img: 'assets/images/vegeta.png'
    }];

    onNewCharacter(character: Character): void {
        const newCharacter: Character = { id: uuid(), ...character };
        this.characters.push(newCharacter);
    }

    onDeleteCharacter(character: Character): void {
        this.characters = this.characters.filter((c: Character) => c.name !== character.name);
    }

}