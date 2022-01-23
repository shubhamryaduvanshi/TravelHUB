import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNRComponent } from './pnr.component';

describe('PNRComponent', () => {
  let component: PNRComponent;
  let fixture: ComponentFixture<PNRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PNRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
