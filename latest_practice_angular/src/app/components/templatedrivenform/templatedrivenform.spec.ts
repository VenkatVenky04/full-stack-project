import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatedrivenform } from './templatedrivenform';

describe('Templatedrivenform', () => {
  let component: Templatedrivenform;
  let fixture: ComponentFixture<Templatedrivenform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templatedrivenform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templatedrivenform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
