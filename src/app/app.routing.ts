// app.routing.ts
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/main/aboutus/aboutus.component';
import { BodyComponent } from './components/main/body/body.component';
import { GamesComponent } from './components/main/games/games.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { RegisterComponent } from './components/main/register/register.component';

const appRoutes = [
  { path: "", component: BodyComponent,
    children: [
      { path: "login", component: LoginComponent, pathMatch: "full" },
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: 'register', component: RegisterComponent,  pathMatch: 'full'},
      { path: 'profile', component: ProfileComponent,  pathMatch: 'full'},
      { path: 'games', component: GamesComponent,  pathMatch: 'full'},
      { path: 'aboutus', component: AboutusComponent,  pathMatch: 'full'},
    ]},
];
export const routing = RouterModule.forRoot(appRoutes);