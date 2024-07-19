import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrencyManagementComponent } from './concurrency-management.component';

describe('ConcurrencyManagementComponent', () => {
  let component: ConcurrencyManagementComponent;
  let fixture: ComponentFixture<ConcurrencyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcurrencyManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcurrencyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
