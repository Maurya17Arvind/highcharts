import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnWithDrilldownComponent } from './column-with-drilldown.component';

describe('ColumnWithDrilldownComponent', () => {
  let component: ColumnWithDrilldownComponent;
  let fixture: ComponentFixture<ColumnWithDrilldownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnWithDrilldownComponent]
    });
    fixture = TestBed.createComponent(ColumnWithDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
