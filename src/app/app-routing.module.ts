import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { HomeComponent } from './Components/home/home.component';
import { QuestionsComponent } from './questions/questions.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { PeriodicInformationComponent } from './periodic-information/periodic-information.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"profile", component:ProfileComponent,
  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {path:"Question", component:QuestionsComponent},
  {path:"QuestionInfo/:group_name", component:QuestionDetailsComponent},
  {path:"elementinfo", component:PeriodicInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
