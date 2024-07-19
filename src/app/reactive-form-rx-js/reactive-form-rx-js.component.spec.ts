import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormRxJsComponent } from './reactive-form-rx-js.component';

describe('ReactiveFormRxJsComponent', () => {
  let component: ReactiveFormRxJsComponent;
  let fixture: ComponentFixture<ReactiveFormRxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormRxJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
