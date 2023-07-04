import { Injectable } from '@angular/core';

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

  addAccount( name:string , status: string) {
    this.accounts.push({name:name,status:status});
  }
updateStatus( id:number, status: string){
this.accounts[id].status = status;

}


  constructor() { }
}
