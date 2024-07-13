import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionManagnmentComponent } from './subscription-managnment.component';

describe('SubscriptionManagnmentComponent', () => {
  let component: SubscriptionManagnmentComponent;
  let fixture: ComponentFixture<SubscriptionManagnmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionManagnmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionManagnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
