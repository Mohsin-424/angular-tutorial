import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server!: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    // Retrieve query parameters and fragments
    console.log(this.router.snapshot.queryParams);
    console.log(this.router.snapshot.fragment);

    // 2nd method to retrieve query params and fragments
    this.router.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });

    this.router.fragment.subscribe((fragment: string | null) => {
      // Do something with the fragment
      if (fragment) {
        // Perform actions with the fragment
        console.log(fragment);
      }
    });

    this.server = this.serversService.getServer(1)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(): void {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }
}

