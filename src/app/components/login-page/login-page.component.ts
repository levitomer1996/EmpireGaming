import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../services/LoginService/login.service";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  email = new FormControl("", [Validators.required, Validators.email]);
  form;
  constructor(
    private registerForm: FormBuilder,
    private router: Router,
    private ls: LoginService
  ) {
    this.form = this.registerForm.group({
      email: "",
      password: ""
    });
  }

  ngOnInit() {}
  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  postUser(user) {
    return new Promise((reso, rej) => {
      this.ls.userLogin(user).subscribe(data => reso(data));
    });
  }

  async handSubmit(val) {
    try {
      let pending = await this.postUser(val);

      if (pending.status == 200) {
        sessionStorage.setItem("token", pending.token);
        this.router.navigate(["./"]);
      }
    } catch (error) {}
  }
}
