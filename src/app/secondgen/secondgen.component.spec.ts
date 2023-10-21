import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondgenComponent } from './secondgen.component';

describe('SecondgenComponent', () => {
  let component: SecondgenComponent;
  let fixture: ComponentFixture<SecondgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondgenComponent]
    });
    fixture = TestBed.createComponent(SecondgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
