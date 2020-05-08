import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaljsonComponent } from './localjson.component';

describe('LocaljsonComponent', () => {
  let component: LocaljsonComponent;
  let fixture: ComponentFixture<LocaljsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaljsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaljsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
