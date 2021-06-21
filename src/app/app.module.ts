import { NgModule } from '@angular/core';
import { routing } from "./app.routing";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { GamesComponent } from './components/main/games/games.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { AboutusComponent } from './components/main/aboutus/aboutus.component';
import { BodyComponent } from './components/main/body/body.component';
import { HomeComponent } from './components/main/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    GamesComponent,
    ProfileComponent,
    AboutusComponent,
    BodyComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
