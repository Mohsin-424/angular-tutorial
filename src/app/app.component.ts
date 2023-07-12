import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['Ali', 'Raza'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return {'nameIsForbidden': false};
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'Mohsin@test.com') {
        resolve({ 'emailIsForbidden': true });
      } else {
        resolve(null);
      }
    }, 1000);
  });
}


}
