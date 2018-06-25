import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutesModule } from './app-routes.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RoomsModule } from './rooms/rooms.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from './materialize/materialize.module';
import { NewRoomModalComponent } from './rooms/new-room-modal/new-room-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule,
    RoomsModule,
    SharedModule
  ],
  entryComponents: [NewRoomModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
