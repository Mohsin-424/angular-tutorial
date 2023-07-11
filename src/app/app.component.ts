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
      // patch value overwrties parts of a form
      userData:{
        // Set.value to set the whole frm
        username:suggestedName
    }});
  }
  // onSubmit(form:NgForm){
  //   console.log(form);
  
  onSubmit() {
console.log(this.signuopForm);
this.submitted = true;
this.user.username = this.signuopForm.value.userData.username;
this.user.email = this.signuopForm.value.userData.email;
this.user.secretQuestion = this.signuopForm.value.secret;
this.user.answer = this.signuopForm.value.questionAnswer;
this.user.gender = this. signuopForm.value.gender;
  }
}

