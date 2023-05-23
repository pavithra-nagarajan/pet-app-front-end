import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Imported the instructions component automatically for us
import { InstructionsComponent } from './instructions/instructions.component';
import { PetComponent } from './pet/pet.component';
import { PetsComponent } from './pets/pets.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { StyleTestComponent } from './style-test/style-test.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdoptedComponent } from './adopted/adopted.component';
import { CookieModule } from 'ngx-cookie';
import { LogoutComponent } from './logout/logout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthGuard } from './auth.guard';
import { PersonService } from './services/person.service';
import { PetService } from './services/pet.service';
import { SessionService } from './services/session.service';

// set up our routes:
const routes:Routes = [
  // automatically go to /pets if we navigate to "/"
  // we want pathMatch to be full when redirecting from empty locations
  {path: "", redirectTo: "/pets", pathMatch: "full"},
  // when go to /pets, we want to display the PetsComponent
  {path: 'pets', component: PetsComponent},
  {path: 'add', component: AddPetComponent},
  // adding an id parameter here to indicate which pet we want to view here:
  {path: 'pet/:id', component: PetComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  // before we activate this route, first use our guard to check if we are logged in:
  {path: "adopted", component: AdoptedComponent, canActivate:[AuthGuard]},
  {path: "logout", component: LogoutComponent},
  {path: "wishlist", component: WishlistComponent}
]

@NgModule({
  // we need to declare all of our components in this array:
  declarations: [
    AppComponent,
    InstructionsComponent,
    PetComponent,
    PetsComponent,
    AddPetComponent,
    StyleTestComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdoptedComponent,
    LogoutComponent,
    WishlistComponent
  ],
  // whatever modules we need to import, we'll include those in this array:
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // lets us use the ngModel for 2-way binding
    FormsModule,
    // configure the router module to use the routes that we defined above:
    RouterModule.forRoot(routes),
    CookieModule.withOptions()
  ],
  providers: [
    // list the services that we made (IMPORTANT FOR S3 HOSTING)
    PersonService, PetService, SessionService
  ],
  // root component of the app:
  bootstrap: [AppComponent]
})
export class AppModule { }
