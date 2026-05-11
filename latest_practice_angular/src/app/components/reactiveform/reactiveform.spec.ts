import { ComponentFixture, TestBed } from '@angular/core/testing';

import { reactiveform } from './reactiveform';

describe('reactiveform', () => {
  let component: reactiveform;
  let fixture: ComponentFixture<reactiveform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [reactiveform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(reactiveform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
