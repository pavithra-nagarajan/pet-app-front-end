import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { modules, services } from '../imports';

import { InstructionsComponent } from './instructions.component';

describe('InstructionsComponent', () => {
  let component: InstructionsComponent;
  let fixture: ComponentFixture<InstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsComponent ],
      imports: [...modules, ...services]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // Make sure that certain elements on the page are rendered:
  it('should contain instructions', waitForAsync(() => {
    // create an instructions component to test on:
    const fixture = TestBed.createComponent(InstructionsComponent);
    // detect changes made to the component
    fixture.detectChanges();
    // take the HTML elements of the component and store it in a variable "compiled"
    const compiled = fixture.nativeElement as HTMLElement;

    // Make sure that our ol component contains the text "ng new pet-app"
    expect(compiled.querySelector('ol')?.textContent).toContain('ng new pet-app');
    expect(compiled.querySelector('ol')?.textContent).toContain('ng generate component instructions');
    expect(compiled.querySelector('ol')?.textContent).toContain('npm install ngx-cookie');
    expect(compiled.querySelector('ol')?.textContent).toContain('ng generate component register');


  }));

});
