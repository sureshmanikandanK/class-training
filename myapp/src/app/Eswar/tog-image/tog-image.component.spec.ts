import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogImageComponent } from './tog-image.component';

describe('TogImageComponent', () => {
  let component: TogImageComponent;
  let fixture: ComponentFixture<TogImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TogImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
