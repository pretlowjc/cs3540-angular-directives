import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstgenComponent } from './firstgen.component';

describe('FirstgenComponent', () => {
  let component: FirstgenComponent;
  let fixture: ComponentFixture<FirstgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstgenComponent]
    });
    fixture = TestBed.createComponent(FirstgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
