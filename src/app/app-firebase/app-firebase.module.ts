import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [AngularFireAuthModule],
})
export class AppFirebaseModule { }
