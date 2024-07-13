import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchAndThrowErrorComponent } from './catch-and-throw-error.component';

describe('CatchAndThrowErrorComponent', () => {
  let component: CatchAndThrowErrorComponent;
  let fixture: ComponentFixture<CatchAndThrowErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatchAndThrowErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatchAndThrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
