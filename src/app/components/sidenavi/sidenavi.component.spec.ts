import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenaviComponent } from './sidenavi.component';

describe('SidenaviComponent', () => {
  let component: SidenaviComponent;
  let fixture: ComponentFixture<SidenaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
