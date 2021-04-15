import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userName: String = '';
  isLoggedIn: Boolean = false;

  onInput(): void {
    console.log(this.userName);
  }
  login(): void {
    this.isLoggedIn = true;
    // this.userName="";
    console.log(this.isLoggedIn);
  }
  logout(): void {
    this.isLoggedIn = false;
    this.userName = '';
  }
}
