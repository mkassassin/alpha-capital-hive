import { Component, OnInit } from '@angular/core';

import { RegistrationComponent } from '../registration/registration.component';

import { MatCardModule } from '@angular/material/card';


@Component({
  imports: [RegistrationComponent, MatCardModule],
  selector: 'alpha-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
