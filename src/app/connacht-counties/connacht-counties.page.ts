import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-connacht-counties',
  templateUrl: './connacht-counties.page.html',
  styleUrls: ['./connacht-counties.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConnachtCountiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
