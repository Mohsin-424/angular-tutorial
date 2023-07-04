import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: 
    {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
  
}
