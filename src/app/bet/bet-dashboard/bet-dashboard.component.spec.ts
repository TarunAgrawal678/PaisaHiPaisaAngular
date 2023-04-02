import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetDashboardComponent } from './bet-dashboard.component';

describe('BetDashboardComponent', () => {
  let component: BetDashboardComponent;
  let fixture: ComponentFixture<BetDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
