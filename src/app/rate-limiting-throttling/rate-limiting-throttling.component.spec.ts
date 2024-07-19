import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateLimitingThrottlingComponent } from './rate-limiting-throttling.component';

describe('RateLimitingThrottlingComponent', () => {
  let component: RateLimitingThrottlingComponent;
  let fixture: ComponentFixture<RateLimitingThrottlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateLimitingThrottlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RateLimitingThrottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
