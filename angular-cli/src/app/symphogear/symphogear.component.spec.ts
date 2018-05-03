import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphogearComponent } from './symphogear.component';

describe('SymphogearComponent', () => {
  let component: SymphogearComponent;
  let fixture: ComponentFixture<SymphogearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymphogearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphogearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
