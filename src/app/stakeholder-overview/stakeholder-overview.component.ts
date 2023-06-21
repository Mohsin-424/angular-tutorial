import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-stakeholder-overview',
  templateUrl: './stakeholder-overview.component.html',
  styleUrls: ['./stakeholder-overview.component.css']
})
export class StakeholderOverviewComponent {
@Input() data! : any[];
 displayedColumns: string[] = ['position', 'name', 'Subproject', 'type'];

}
