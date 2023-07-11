import { Component,ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('f') signuopForm!:NgForm;
  defaultQuestion = 'Your Favourite Teacher';

  answer = '';

  genders = ['male' , 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  // I t has been set false so that we can display irt in DOM 
submitted = false;
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    //   this.signuopForm.setValue({
    //     userData: {
    //        username: suggestedName,
    //        email: ''
    //     },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    //   });
    this.signuopForm.form.patchValue({
      userData:{
        username:suggestedName
    }});
  }
 
  
  onSubmit() {

console.log(this.signuopForm);
this.submitted = true;
this.user.username = this.signuopForm.value.userData.username;
this.user.email = this.signuopForm.value.userData.email;
this.user.secretQuestion = this.signuopForm.value.secret;
this.user.answer = this.signuopForm.value.questionAnswer;
this.user.gender = this. signuopForm.value.gender;
//Restting Forms
this.signuopForm.reset(); 
  }

// From lesson 202 we are going to start reactive forms
}


