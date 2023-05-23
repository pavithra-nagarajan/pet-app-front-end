import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Person} from '../interfaces';
import { PersonService } from '../services/person.service';
import { SessionService } from '../services/session.service';
// https://www.npmjs.com/package/ngx-cookie#installation
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  person! : Person

  constructor(private personService:PersonService,
    private router:Router,
    private sessionService: SessionService,
    private cookieService:CookieService) { }

  ngOnInit(): void {
    // filling out default values for this person (they will fill them in with the form)
    this.person = {
      name: "",
      password: "",
      pets: []
    }
  }

  login() {
    this.personService.login(this.person).subscribe(
      returnedPerson => {
        if(returnedPerson == null) {
          alert('Username or password is incorrect!');
        }
        else {
          alert('Login successful!');
          // setting the userId in the session to be the returned value from the http request:
          // this.sessionService.set("userId", returnedPerson.id);
          this.cookieService.put("userId", String(returnedPerson.id));
          this.router.navigate(["/pets"]);
        }
      }
    )
  }

}
