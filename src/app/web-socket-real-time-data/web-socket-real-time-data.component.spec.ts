import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketRealTimeDataComponent } from './web-socket-real-time-data.component';

describe('WebSocketRealTimeDataComponent', () => {
  let component: WebSocketRealTimeDataComponent;
  let fixture: ComponentFixture<WebSocketRealTimeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebSocketRealTimeDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebSocketRealTimeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
