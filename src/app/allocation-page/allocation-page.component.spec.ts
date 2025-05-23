import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationPageComponent } from './allocation-page.component';

describe('AllocationPageComponent', () => {
  let component: AllocationPageComponent;
  let fixture: ComponentFixture<AllocationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllocationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
