import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRangeChartComponent } from './column-range-chart.component';

describe('ColumnRangeChartComponent', () => {
  let component: ColumnRangeChartComponent;
  let fixture: ComponentFixture<ColumnRangeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnRangeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnRangeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
