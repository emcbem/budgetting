import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBudgetPageComponent } from './ai-budget-page.component';

describe('AiBudgetPageComponent', () => {
  let component: AiBudgetPageComponent;
  let fixture: ComponentFixture<AiBudgetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiBudgetPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiBudgetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
