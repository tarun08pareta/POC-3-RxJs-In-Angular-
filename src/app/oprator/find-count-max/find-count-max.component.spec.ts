import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCountMaxComponent } from './find-count-max.component';

describe('FindCountMaxComponent', () => {
  let component: FindCountMaxComponent;
  let fixture: ComponentFixture<FindCountMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindCountMaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindCountMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
