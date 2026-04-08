import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterfilterComponent } from './characterfilter';

describe('Characterfilter', () => {
  let component: CharacterfilterComponent;
  let fixture: ComponentFixture<CharacterfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterfilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterfilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
