import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ConnachtCountiesPage} from "../connacht-counties/connacht-counties.page"
@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ConnachtCountiesPage]
})
export class ConnachtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
