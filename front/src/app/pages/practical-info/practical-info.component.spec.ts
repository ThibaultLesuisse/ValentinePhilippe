import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalInfoComponent } from './practical-info.component';

describe('PracticalInfoComponent', () => {
  let component: PracticalInfoComponent;
  let fixture: ComponentFixture<PracticalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
