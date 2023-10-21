import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdgenComponent } from './thirdgen.component';

describe('ThirdgenComponent', () => {
  let component: ThirdgenComponent;
  let fixture: ComponentFixture<ThirdgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdgenComponent]
    });
    fixture = TestBed.createComponent(ThirdgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
