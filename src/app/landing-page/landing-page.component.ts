import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  openLuthierForm() {
    this.router.navigate(['luthier-form']);
  }

  openGuitarConfigurator() {
    this.router.navigate(['guitar-configurator'])
  }

}