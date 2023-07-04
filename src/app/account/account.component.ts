import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

// Using Service Here we will use 
constructor(private loggingService:LoggingService){}


// Button Click Caller
  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});


    // console.log('A server status changed, new status: ' + status);

 this.loggingService.logStatusChange(status);
//  liate here we can use console.log and this.loggingserive.... both.Both will work in the same way 
  }
}

 