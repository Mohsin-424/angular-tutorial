import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['Mohsin', 'Raza'];

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, 
          
          [Validators.required, this.forbiddenNames.bind(this)] ),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl('male'),
        hobbies: new FormArray([])
      }),
      gender: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('userData.hobbies') as FormArray).push(control);
  }

  forbiddenNames( control: FormControl): { [s:string]: boolean } {
    // Logic to implement cvalidation of forbiedden user names
    if( this. forbiddenUsernames.indexOf( control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
      return {'nameIsForbidden': true};
  }

  get hobbyControls() {
    return (this.signupForm.get('userData.hobbies') as FormArray).controls;
  }
}
