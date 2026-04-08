import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterlistComponent } from './characterlist';

describe('Characterlist', () => {
  let component: CharacterlistComponent;
  let fixture: ComponentFixture<CharacterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterlistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterlistComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
