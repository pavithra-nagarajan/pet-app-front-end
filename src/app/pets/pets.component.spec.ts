import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { modules, services } from '../imports';
import { PetServiceMock } from '../mocks/pet.service.mock';
import { PetService } from '../services/pet.service';

import { PetsComponent } from './pets.component';

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsComponent ],
      imports: [...modules, ...services],
      providers: [
        {provide: PetService, useClass: PetServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing to make sure data from our service makes it into the pet component (using the mock/dummy service)
  it('should gets pets from service', waitForAsync(() => {
    expect(component.pets).toBeTruthy();
    expect(component.pets[0].name).toBe('ashes');
    expect(component.pets[0].species).toBe('cat');
    expect(component.pets[0].food).toBe('tuna');
  }))


});
