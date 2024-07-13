import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpratorComponent } from './oprator.component';

describe('OpratorComponent', () => {
  let component: OpratorComponent;
  let fixture: ComponentFixture<OpratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
