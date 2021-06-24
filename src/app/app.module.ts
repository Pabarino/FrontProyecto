import { routing } from "./app.routing";

import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutusComponent } from './components/main/aboutus/aboutus.component';
import { BodyComponent } from './components/main/body/body.component';
import { GamesComponent } from './components/main/games/games.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { RegisterComponent } from './components/main/register/register.component';


//Services
import { AuthService } from './api/auth.service';
import { GeneroService } from './api/genero.service';
import { InteresService } from './api/interes.service';
import { JuegoService } from './api/juego.service';
import { JuegosGeneroService } from './api/juegosGenero.service';
import { JuegosPlataformaService } from './api/juegosPlataforma.service';
import { PlataformaService } from './api/plataforma.service';
import { UsuarioService } from './api/usuario.service';
import {UserGuard} from './api/user.guard';

@NgModule({
  imports:      [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      NavbarComponent,
      AboutusComponent,
      BodyComponent,
      GamesComponent,
      HomeComponent,
      LoginComponent,
      ProfileComponent,
      RegisterComponent
  ],
  exports:      [],
  providers: [
    AuthService,
    GeneroService,
    InteresService,
    JuegoService,
    JuegosGeneroService,
    JuegosPlataformaService,
    PlataformaService,
    UsuarioService,
    UserGuard ]
})
export class AppModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<any> {
        return {
            ngModule: AppModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AppModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
