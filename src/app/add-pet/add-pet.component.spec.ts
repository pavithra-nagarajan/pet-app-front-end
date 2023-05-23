import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { modules, services } from '../imports';
import { By } from '@angular/platform-browser';

import { AddPetComponent } from './add-pet.component';

describe('AddPetComponent', () => {
  let component: AddPetComponent;
  let fixture: ComponentFixture<AddPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetComponent ],
      imports: [...modules, ...services]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // make sure that the pet field is properly initialized with the correct values:
  it('pet should be initialized', waitForAsync(() => {
    // ensure our data has the proper value:
    expect(component.pet.name).toEqual('default name');
  }))

  // Make sure that when we click the "add" button, the add function is called:
  it('should call the add function', waitForAsync(() => {
    fixture.detectChanges();

    // install a spy on the add function, because we're 
    // going to check if the function is being called:
    spyOn(component, 'add');

    // querying for an element by an id and then returning it in the el variable
    let el = fixture.debugElement.query(By.css("#submitButton")).nativeElement;
    // once we get the element, we can click it:
    el.click();

    // once the add button is clicked, want to verify that the function was called 1 time
    expect(component.add).toHaveBeenCalledTimes(1);
  }))

  // make sure that the pet object is being properly updated:
  it('should update the pet obect', waitForAsync(() => {
    const hostElement = fixture.nativeElement;

    // using CSS selectors to query for input elements on the page
    const nameInput = hostElement.querySelector("#pet-name");
    const speciesInput = hostElement.querySelector("#pet-species");
    const foodInput = hostElement.querySelector("#pet-food");
    fixture.detectChanges();

    // manually fill in the input values for these elements:
    nameInput.value = "new name";
    speciesInput.value = "cat";
    foodInput.value = "tuna";

    // dispatch these input changes:
    nameInput.dispatchEvent(new Event('input'));
    speciesInput.dispatchEvent(new Event('input'));
    foodInput.dispatchEvent(new Event('input'));

    // make sure the 2-way binding works, check the fields of the pet object:
    expect(component.pet.name).toBe('new name');
    expect(component.pet.species).toBe('cat');
    expect(component.pet.food).toBe('tuna');




  }))


});
