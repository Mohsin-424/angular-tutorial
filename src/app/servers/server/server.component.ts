import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string } | undefined;

  constructor(private serversService: ServersService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Access id using snapshot
    const id = +this.route.snapshot.params['id'];
    const server = this.serversService.getServer(id);
    this.server = server !== undefined ? server : undefined;

    this.route.params.subscribe((params: Params) => {
      const server = this.serversService.getServer(+params['id']);
      this.server = server !== undefined ? server : undefined;
    });
  }
}
