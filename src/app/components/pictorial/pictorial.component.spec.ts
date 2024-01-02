import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictorialComponent } from './pictorial.component';

describe('PictorialComponent', () => {
  let component: PictorialComponent;
  let fixture: ComponentFixture<PictorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictorialComponent]
    });
    fixture = TestBed.createComponent(PictorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
