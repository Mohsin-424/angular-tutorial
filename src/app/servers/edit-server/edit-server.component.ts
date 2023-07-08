import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CanDeactivateGuard } from "../../services/edit-server/can-deactivate-guard.service";
import { CanComponentDeactivate } from "../../services/edit-server/can-deactivate-guard.service";


import { ServersService } from '../servers.service';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  // To implement canDeactivate()
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Retrieve query parameters and fragments
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // 2nd method to retrieve query params and fragments
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });

    this.route.fragment.subscribe((fragment: string | null) => {
      // Do something with the fragment
      if (fragment) {
        // Perform actions with the fragment
        console.log(fragment);
      }
    });

    const id = +this.route.snapshot.params['id'];
    // Subscribe route params to update the id if params change
    this.server = this.serversService.getServer(id)!;

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(): void {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    // To prevent accidental navigation, we use canDeactivate
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}

