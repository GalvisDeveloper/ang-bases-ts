import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['SpiderMan', 'Hulk', 'Thor', 'IronMan', 'Captain America', 'Black Widow', 'Hawkeye', 'Black Panther', 'Doctor Strange', 'AntMan', 'Wasp'];
  public heroDeleted?: string;

  deletedLasthero() {
    const heroDeleted = this.heroNames.pop();
    this.heroDeleted = heroDeleted;
  }
}
