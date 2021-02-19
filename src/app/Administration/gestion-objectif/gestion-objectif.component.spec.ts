import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionObjectifComponent } from './gestion-objectif.component';

describe('GestionObjectifComponent', () => {
  let component: GestionObjectifComponent;
  let fixture: ComponentFixture<GestionObjectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionObjectifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
