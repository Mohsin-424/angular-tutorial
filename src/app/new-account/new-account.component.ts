import { AccountService } from './../account.service';

import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 
})
export class NewAccountComponent {


constructor(private loggingService: LoggingService ,
  private accountService:AccountService) {
    this.accountService.statusUpdated.subscribe(
      // It will emit the event which has occured in account service ts
      (status: string) => alert( 'New Status:' + status)

    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
   

}
}
