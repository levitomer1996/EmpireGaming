import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-login-container",
  templateUrl: "./login-container.component.html",
  styleUrls: ["./login-container.component.css"]
})
export class LoginContainerComponent implements OnInit {
  @Input() name;
  constructor() {}

  ngOnInit() {
    console.log(this.name);
  }
}
