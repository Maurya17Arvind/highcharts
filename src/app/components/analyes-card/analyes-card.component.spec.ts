import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyesCardComponent } from './analyes-card.component';

describe('AnalyesCardComponent', () => {
  let component: AnalyesCardComponent;
  let fixture: ComponentFixture<AnalyesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
