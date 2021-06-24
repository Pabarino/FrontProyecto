// app.routing.ts
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { AboutusComponent } from './components/main/aboutus/aboutus.component';
import { BodyComponent } from './components/main/body/body.component';
import { GamesComponent } from './components/main/games/games.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { RegisterComponent } from './components/main/register/register.component';

//Services
import {UserGuard} from './api/user.guard';

const appRoutes = [
  { path: "", component: BodyComponent},
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "", component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate:[UserGuard]},
  { path: 'games', component: GamesComponent},
  { path: 'aboutus', component: AboutusComponent},
];
export const routing = RouterModule.forRoot(appRoutes);