import { Component, OnInit } from '@angular/core';
// import the Pet interface:
import {Pet} from '../interfaces';
import { PetService } from '../services/pet.service';
// Activated Route lets us see information about the current route
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { PersonService } from '../services/person.service';
import {CookieService} from 'ngx-cookie';


// This decorator makes this class a component
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  // when we declare variables in TypeScript, we need to give it a type
  // in this case, pet is an object, so we need to give it an interface:
  pet!: Pet;

  img_url:string = "https://www.aquariumofpacific.org/images/exhibits/Magnificent_Tree_Frog_900.jpg";

  // this boolean keeps track of whether we want to show the "extra" content on our page
  show_extra_content:boolean = false;

  // store the id of the logged in user:
  userId!:number;
  petId!:number;

  // The only thing we want to use our constructor for is dependency injection:
  constructor(private petService: PetService,
    private personService: PersonService,
    private route:ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private cookieService: CookieService) {
    
   }

  // Lifecycle method, in this case, the OnInit will run when the component is first initialized or rendered:
  ngOnInit(): void {
    // When we first instantiate this component, we get the user id from the session:
    this.userId = Number(this.cookieService.get("userId"));

    // We can set up any variables or fields here:
    // because the pet is a field of this class, we use the "this" keyword
    // parse the id from the route and convert it to a number:
    this.petId = Number(this.route.snapshot.paramMap.get("id"));
    // returns an observable, so we have to subscribe to the return value
    this.petService.getById(this.petId).subscribe (
      // take in an arrow function with the returned value as the parameter
      returnPet => {
        // update our pet field with the returned value from the service
        this.pet = returnPet;
        console.log(returnPet);
      }
    )

  }

  hello() {
    alert("Hello!");
  }

  update() {
    this.petService.updatePet(this.pet).subscribe(
      returnPet => {
        console.log(returnPet);
      }
    )
  }

  delete() {
    this.petService.deletePet(this.pet.id).subscribe( );
    alert('Pet deleted successfully!');
    // once this pet is deleted, we navigate back to the all pets page:
    this.router.navigate(['/pets'])
  }

  adopt() {
    this.personService.adopt(this.userId, this.pet.id).subscribe(
      returnVal => {
        this.router.navigate(["/adopted"])
      }
    )
  }

  // store for guests:
  wishList() {
    // how we can check if we are logged in:
    // let userId = Number(this.cookieService.get("userId"));
    // if(isNaN(userId)) {

    // }
    let wishList:any = this.cookieService.getObject("wishList");
    // check if wishList is undefined:
    if(! wishList) {
      // init an empty wish list:
      wishList = [];
    }
    // add the pet:
    wishList.push(this.pet);
    // update the cookie:
    this.cookieService.putObject("wishList", wishList);
  }

}
