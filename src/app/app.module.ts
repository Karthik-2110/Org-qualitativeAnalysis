import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { HomeComponent } from './Components/home/home.component';

import { MatIconModule } from '@angular/material/icon';

import { AppFirebaseModule } from './app-firebase/app-firebase.module';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';

import { ToastrModule } from 'ngx-toastr';
import { PeriodicInformationComponent } from './periodic-information/periodic-information.component';

export function playerFactory(){
  return player
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    QuestionsComponent,
    QuestionDetailsComponent,
    PeriodicInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    AppFirebaseModule,
    LottieModule.forRoot({player: playerFactory}),
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
