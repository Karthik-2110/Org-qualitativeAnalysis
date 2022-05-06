import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ElementsService } from 'src/app/services/elements.service';
import { ChangeDetectorRef } from '@angular/core';

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
    private periodicService: ElementsService,
    private cdr: ChangeDetectorRef
  ) { }

  periodicElements:any;
  elements:any;

  ngOnInit(): void {
    console.log(this.user$)
    this.periodicService.getAllElements().subscribe( (res) => {
      console.log(res)
      this.periodicElements = res
      this.elements = res
    } )
    this.cdr.detectChanges()
  }

  onSearch(event: any) {
    this.periodicElements = this.elements.filter((product: any) => {
      return product['name'].toLowerCase().includes(event.target.value.toLowerCase())
    });
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
