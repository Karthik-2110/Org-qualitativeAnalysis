import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth: AngularFireAuth) {
  }
  private user = new BehaviorSubject(this.auth.authState);
  user$: Observable<firebase.User | null> = this.user.pipe(
    switchMap((user) => user)
  ) ;
  login(): Observable<firebase.auth.UserCredential> {
  return from  (this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  logout(): Observable<void> {
  return from  (this.auth.signOut());
  }
}



