import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTourneComponent } from './gestion-tourne.component';

describe('GestionTourneComponent', () => {
  let component: GestionTourneComponent;
  let fixture: ComponentFixture<GestionTourneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTourneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTourneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
