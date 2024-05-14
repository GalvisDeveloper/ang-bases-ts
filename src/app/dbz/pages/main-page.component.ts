

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddComponent } from '../components/add/add.component';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [CommonModule, ListComponent, AddComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  // public characters: any[] = [];

}
