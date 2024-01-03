import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChartAdvanceComponent } from './stock-chart-advance.component';

describe('StockChartAdvanceComponent', () => {
  let component: StockChartAdvanceComponent;
  let fixture: ComponentFixture<StockChartAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockChartAdvanceComponent]
    });
    fixture = TestBed.createComponent(StockChartAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
