import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { modules, services } from '../imports';
import { PetServiceMock } from '../mocks/pet.service.mock';
import { PetService } from '../services/pet.service';

import { PetComponent } from './pet.component';

describe('PetComponent', () => {
  let component: PetComponent;
  let fixture: ComponentFixture<PetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetComponent ],
      imports: [...modules, ...services, RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot:{
            paramMap: {
              get(key: string): number {
                // setting up our test to use an arbitray value of 70 for our id
                if(key == 'id') return 70;
                return -1;
              }

            }
          }
        }
      },
      // providing a pet service mock to use for our pet service:
   {provide: PetService, useClass: PetServiceMock}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get id from route', waitForAsync(() => {
  //   // make sure that the arbitary 70 value is being passed to our pet id from the route
  //   // expect(component.petId).toEqual(70);
  // }))
});
