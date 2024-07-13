import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagnmentComponent } from './state-managnment.component';

describe('StateManagnmentComponent', () => {
  let component: StateManagnmentComponent;
  let fixture: ComponentFixture<StateManagnmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateManagnmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateManagnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
