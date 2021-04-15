import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._authSub = this._authService.authSubjectObservable.subscribe(
      (data: boolean) => {
        console.log(data);
        this.isLoggedIn = data;
      }
    );
  }
  private _authSub: Subscription;

  userName: String = '';
  isLoggedIn: Boolean = false;

  onInput(): void {
    console.log(this.userName);
  }
  login(): void {
    this.isLoggedIn = true;
    // this.userName="";
    console.log(this.isLoggedIn);
    this._authService.broadcastAuthValue(true);
    this._router.navigate(['/']);
  }
  logout(): void {
    this.isLoggedIn = false;
    this.userName = '';
    console.log(this.isLoggedIn);
    this._authService.broadcastAuthValue(false);
  }
  ngOnDestroy() {
    this._authSub.unsubscribe();
  }
}
