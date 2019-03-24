import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmodaddonsComponent } from './gmodaddons.component';

describe('GmodaddonsComponent', () => {
  let component: GmodaddonsComponent;
  let fixture: ComponentFixture<GmodaddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmodaddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmodaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
