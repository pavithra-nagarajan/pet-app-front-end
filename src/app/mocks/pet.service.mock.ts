import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {Pet} from '../interfaces';

// set up a dummy class to return data for testing
@Injectable() // lets us inject this mock service into our tests
export class PetServiceMock {
    constructor() {

    }

    // dummy function for returning all pets
    getAllPets(): Observable<Pet[]> {
        const pets = [{id: 1, name: 'ashes', species: 'cat', food: 'tuna'}];
        // return an observable of pets:
        return of(pets);
    }

    // dummy function for getting a single pet:
    getById(): Observable<Pet> {
        const pet = {id: 1, name: 'ashes', species: 'cat', food: 'tuna'};
        return of(pet);
    }
}