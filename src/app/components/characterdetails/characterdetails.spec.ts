import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdetailsComponent } from './characterdetails';

describe('Characterdetails', () => {
  let component: CharacterdetailsComponent;
  let fixture: ComponentFixture<CharacterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterdetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterdetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
