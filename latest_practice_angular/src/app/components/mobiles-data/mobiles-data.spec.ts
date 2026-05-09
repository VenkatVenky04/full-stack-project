import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesData } from './mobiles-data';

describe('MobilesData', () => {
  let component: MobilesData;
  let fixture: ComponentFixture<MobilesData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilesData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilesData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
