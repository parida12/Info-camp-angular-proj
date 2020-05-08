import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Array2Component } from './array2.component';

describe('Array2Component', () => {
  let component: Array2Component;
  let fixture: ComponentFixture<Array2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Array2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Array2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
