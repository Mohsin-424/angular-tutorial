import { AccountService } from './account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 accounts:{name:string, status:string} []= [];
 constructor(private accountService:AccountService) {

 }
ngOnInit() {
  // to access all the data in the service  we set it equal to accountService.accounts
  this.accounts = this.accountService.accounts;





}
  
}
