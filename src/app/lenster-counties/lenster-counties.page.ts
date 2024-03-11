import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lenster-counties',
  templateUrl: './lenster-counties.page.html',
  styleUrls: ['./lenster-counties.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LensterCountiesPage implements OnInit {
  counties: string[] =  ["Carlow", "Dublin", "Kildare",
  "Kilkenny", "Laois", "Longford", "Louth", "Meath",
  "Offaly", "Westmeath", "Wexford", "Wicklow"]; 

  constructor() { }

  ngOnInit() {
  }

}
