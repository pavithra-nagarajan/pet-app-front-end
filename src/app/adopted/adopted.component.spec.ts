import { ComponentFixture, TestBed } from '@angular/core/testing';
import { modules, services } from '../imports';
import { CookieService } from 'ngx-cookie';

import { AdoptedComponent } from './adopted.component';

describe('AdoptedComponent', () => {
  let component: AdoptedComponent;
  let fixture: ComponentFixture<AdoptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptedComponent ],
      imports: [...modules, ...services],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expecting the component to be created
    // if it was null/undefined/falsey then this test would fail
    expect(component).toBeTruthy();
  });
});
