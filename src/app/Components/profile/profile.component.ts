import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$ = this.authService.user$;
  logout$: Observable<any> | undefined;
  constructor(
    private readonly authService : AuthService,
    private readonly router : Router,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.logout$ = this.authService
    .logout()
    .pipe(
      tap(
        () => this.router.navigateByUrl('/login')
      )
    );
  }

}
