
import { LoggingService } from './logging.service';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 accounts = [
    {
      name: 'Master Account1',
      status: 'active'
    },
    {
      name: 'Testaccount2',
      status: 'inactive'
    },
    {
      name: 'Hidden Account3',
      status: 'unknown'
    }
  ];
  constructor( private loggingService:LoggingService,
    private accountService:AccountService) { }

  addAccount( name:string , status: string) {
    this.accounts.push({name:name,status:status});
    // to use logging service in account service we will add the following
    this.loggingService.logStatusChange(status);
  }


statusUpdated = new EventEmitter<string>();

updateStatus( id:number, status: string){
this.accounts[id].status = status;

this.loggingService.logStatusChange(status);
}

}




