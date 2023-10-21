import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthgenComponent } from './fifthgen.component';

describe('FifthgenComponent', () => {
  let component: FifthgenComponent;
  let fixture: ComponentFixture<FifthgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifthgenComponent]
    });
    fixture = TestBed.createComponent(FifthgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
