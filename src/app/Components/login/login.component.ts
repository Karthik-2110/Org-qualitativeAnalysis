import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login$!: Observable<any>;
  constructor(
    private readonly authService: AuthService,
    private readonly router : Router) { }

  ngOnInit(): void {

  }

  login() {
    this.login$ =  this.authService
  .login()
  .pipe(
    tap(
      () => this.router.navigateByUrl('/profile')
    )
  );
  }


}
