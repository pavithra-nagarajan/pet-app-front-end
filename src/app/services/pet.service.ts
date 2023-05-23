import { Injectable } from '@angular/core';
import {Pet} from '../interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {url} from '../endpoint';

// Injectable lets us use inject this as a dependency:
@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http:HttpClient) { }

  // take in a pet with no id, return an obserable of a pet with the id
  addPet(pet:Partial<Pet>): Observable<Partial<Pet>>{
    // TODO, send this to the database:
    // return an observable of our pet object, simulating what we would get from an HTTP response:
    // post takes in a url and an object as the body:
    return this.http.post<Pet>(`${url}/pets`, pet);
  }

  // simulating an http response by manually constucting an observable:
  getAllPets(): Observable<Pet[]> {
    console.log(url);
    // dummy data, will be replaced with http request:
    return this.http.get<Pet[]>(`${url}/pets`);
  }

  getById(id :Number): Observable<Pet> {
    // use template literals to construct the endpoint:
    let req_url = `${url}/pets/${id}`;
    console.log(req_url);
    return this.http.get<Pet>(req_url);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${url}/pets`, pet);
  }

  deletePet(id:Number) {
    return this.http.delete(`${url}/pets/${id}`);
  }


}
