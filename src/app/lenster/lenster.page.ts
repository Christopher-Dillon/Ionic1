import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lenster',
  templateUrl: './lenster.page.html',
  styleUrls: ['./lenster.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LensterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openCounties(){
    this.router.navigate(['/lenster-counties']);
  }

}
