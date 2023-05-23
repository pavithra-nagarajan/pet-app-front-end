import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Pet} from '../interfaces';
import { PersonService } from '../services/person.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-adopted',
  templateUrl: './adopted.component.html',
  styleUrls: ['./adopted.component.css']
})
export class AdoptedComponent implements OnInit {
  adopted!:Pet[];

  constructor(
    private personService: PersonService,
    private sessionService:SessionService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    let userId = Number(this.cookieService.get("userId"));
    // We can remove the logic of checking for id because that will be taken care of by the router guard:
    // console.log(userId);
    // if (isNaN(userId)) {
    //   alert("You must be logged in to view adopted pets");
    //   this.router.navigate(["/pets"]);
    // }

    this.personService.getAdopted(userId).subscribe(
      returnVal => {
        this.adopted = returnVal;
      }
    )
   
  }

}
