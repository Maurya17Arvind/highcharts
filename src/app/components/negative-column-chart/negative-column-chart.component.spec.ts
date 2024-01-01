import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeColumnChartComponent } from './negative-column-chart.component';

describe('NegativeColumnChartComponent', () => {
  let component: NegativeColumnChartComponent;
  let fixture: ComponentFixture<NegativeColumnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeColumnChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegativeColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
