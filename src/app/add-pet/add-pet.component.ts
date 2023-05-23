import { Component, OnInit } from '@angular/core';
import { Pet } from '../interfaces';
import { PetService } from '../services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  // declare this pet as partial, because we don't have the id just yet:
  pet!:Partial<Pet>;

  // dependency injection, put the service in the constructor:
  constructor(private petService:PetService, private router:Router ) { }

  ngOnInit(): void {
    // 2 way binding, making sure that this values are displayed on some form on our web page
    // and changes to that form will affect the data here
    this.pet = {
      // because when we're adding a pet, we don't know the id, so we can't provide it here
      name: "default name",
      species: "default species",
      food: "default food"
    }
  }

  add(): void{
    if(this.validatePet()) {
      // Once we've changed up some data on our form, we can console log to display those changes:
      this.petService.addPet(this.pet).subscribe(
        pet => {
          // alert the user what the generated id is:
          alert(`Pet added successfully, generated id is : ${pet.id}`);
          // this.router.navigate(["/pets"])
          this.clearPet();
        }
      )
    }
    else {
      alert("One or more fields is not valid!");
    }
    // TODO: Send this to database
  }

  // reset fields to empty:
  clearPet() {
    this.pet.name = "";
    this.pet.species = "";
    this.pet.food = "";
  }

  // custom validate function:
  validatePet() {
    if(this.pet.name?.trim() == "") return false;
    if(this.pet.species == "") return false;
    if(this.pet.food == "") return false;
    // if all of the fields are not empty, we can return true:
    return true;
  }

  // TODO, validate the data before we send it:

}
