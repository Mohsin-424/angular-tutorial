import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  // Assighning an Alias
  @Input('srvElement') element!: { type: String; name: string; content: string };
  constructor() {

  }
  ngOnInit() {}
}
