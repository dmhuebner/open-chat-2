import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutesModule } from './app-routes.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UrlBuilderService } from './services/urlBuilder/url-builder.service';
import { Constants } from './constants';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UrlBuilderService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
