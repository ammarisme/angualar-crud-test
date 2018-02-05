// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserModalComponent} from './users/user-modal/user-modal.component';

// Services
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
