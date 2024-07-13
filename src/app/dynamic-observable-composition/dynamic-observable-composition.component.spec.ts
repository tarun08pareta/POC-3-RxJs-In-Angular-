import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicObservableCompositionComponent } from './dynamic-observable-composition.component';

describe('DynamicObservableCompositionComponent', () => {
  let component: DynamicObservableCompositionComponent;
  let fixture: ComponentFixture<DynamicObservableCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicObservableCompositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicObservableCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
