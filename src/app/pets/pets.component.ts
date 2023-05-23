import { Component, OnInit } from '@angular/core';
import { Pet } from '../interfaces';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets!: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    // declare a dummy list of pets:
    // TODO: get this information from our back-end:
    this.petService.getAllPets().subscribe(
      returnPets => {
        this.pets = returnPets;
      }
    )
  }

}
