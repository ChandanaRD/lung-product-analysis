import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoduleComponent } from './nodule.component';

describe('NoduleComponent', () => {
  let component: NoduleComponent;
  let fixture: ComponentFixture<NoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
