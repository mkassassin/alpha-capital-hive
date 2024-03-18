import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'

@Component({
  imports: [ReactiveFormsModule, FormsModule, MatInputModule],
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit() {
		this.registrationForm = new FormGroup({
			name: new FormControl('', Validators.required),
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
			termsAndCondition: new FormControl(false, Validators.requiredTrue)
		});
  }

	onSubmit() {
		console.log(this.registrationForm?.value);
	}

}
