import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({

      'userData': new FormGroup({

        'username': new FormControl(null, Validators.required),

        'email': new FormControl(null, [Validators.required, Validators.email]),

        'gender': new FormControl('male'),

        //  The FormArray is a way to manage the collection of Form Controls in Angular

        'hobbies': new FormArray([])
      }),
      gender: new FormControl(null)
    });
  }

  onSubmit() {

    console.log(this.signupForm.value);

  }

  onAddHobby() {
    const control = new FormControl( null ,
      Validators.required);
// Here we  use "push" to append a new field ohter than our already remaining fields

   (<FormArray>this.signupForm.get('hobbies')).push(  control );
  }

  get hobbyControls() {

    return (this.signupForm.get('userData.hobbies') as FormArray).controls;


  }
}

