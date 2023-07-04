import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Use providers and add service name to get output 
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

// Using constructor for dependency Injection
constructor(private loggingService: LoggingService ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
this.loggingService.logStatusChange(accountStatus); 
}
}
