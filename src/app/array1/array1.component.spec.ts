import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Array1Component } from './array1.component';

describe('Array1Component', () => {
  let component: Array1Component;
  let fixture: ComponentFixture<Array1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Array1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Array1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
