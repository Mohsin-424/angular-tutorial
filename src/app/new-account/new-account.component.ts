
import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 
})
export class NewAccountComponent {


constructor(private loggingService: LoggingService ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
   

}
}
