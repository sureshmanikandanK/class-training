import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindindComponent } from './databindind.component';

describe('DatabindindComponent', () => {
  let component: DatabindindComponent;
  let fixture: ComponentFixture<DatabindindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabindindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
