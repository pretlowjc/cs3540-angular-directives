import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthgenComponent } from './fourthgen.component';

describe('FourthgenComponent', () => {
  let component: FourthgenComponent;
  let fixture: ComponentFixture<FourthgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthgenComponent]
    });
    fixture = TestBed.createComponent(FourthgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
