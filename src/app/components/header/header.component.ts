import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/LoginService/login.service";
import { token } from "../../models/handleHeaderOnit";

//Redux
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
  message: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  value = "Clear me";
  token;
  displayButtons;
  displayUserButtons: Observable<string>;

  constructor(private ls: LoginService, private store: Store<AppState>) {
    this.displayUserButtons = this.store.select("message");
  }

  ngOnInit() {
    let token = { token: sessionStorage.getItem("token") };
    console.log(this.displayUserButtons);
    if (token.token !== null) {
      this.ls.handleUserOnit(token).subscribe(data => {
        this.token = data;
        this.displayButtons = false;
      });
    } else {
      this.store.dispatch({ type: "ConnectUser" });
      this.displayButtons = true;
      console.log(this.displayButtons, this.displayUserButtons);
    }
  }
}
