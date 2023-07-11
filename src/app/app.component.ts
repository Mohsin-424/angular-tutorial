import { NgForm } from '@angular/forms';
import { Component,ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('registrationForm', {static:false}) registrationForm!:NgForm;
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onregister(registrationForm: NgForm) {
    if (registrationForm.valid) {
      // Perform registration logic here, such as sending data to an API
      console.log('Registration data:', this.user);
    }
  }

  // onSubmit(form: ElementRef){
  //   console.log(form);
    
  // }
}
