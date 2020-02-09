import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/LoginService/login.service";
import { token } from "../../models/handleHeaderOnit";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  value = "Clear me";
  token;
  displayButtons;
  displayUserButtons;

  constructor(private ls: LoginService) {}

  ngOnInit() {
    let token = { token: sessionStorage.getItem("token") };

    if (token.token !== null) {
      this.ls.handleUserOnit(token).subscribe(data => {
        this.token = data;
        console.log(this.token);
        this.displayButtons = false;
        this.displayUserButtons = true;
      });
    } else {
      this.displayButtons = true;
      this.displayUserButtons = false;
    }
  }
}
