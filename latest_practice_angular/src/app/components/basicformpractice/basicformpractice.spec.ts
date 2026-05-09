import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basicformpractice } from './basicformpractice';

describe('Basicformpractice', () => {
  let component: Basicformpractice;
  let fixture: ComponentFixture<Basicformpractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Basicformpractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basicformpractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
