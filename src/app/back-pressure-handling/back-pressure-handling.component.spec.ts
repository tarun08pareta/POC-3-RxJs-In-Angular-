import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPressureHandlingComponent } from './back-pressure-handling.component';

describe('BackPressureHandlingComponent', () => {
  let component: BackPressureHandlingComponent;
  let fixture: ComponentFixture<BackPressureHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackPressureHandlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackPressureHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
