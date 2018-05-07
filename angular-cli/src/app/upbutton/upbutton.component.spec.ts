import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpbuttonComponent } from './upbutton.component';

describe('UpbuttonComponent', () => {
  let component: UpbuttonComponent;
  let fixture: ComponentFixture<UpbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
