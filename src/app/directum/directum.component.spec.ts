import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectumComponent } from './directum.component';

describe('DirectumComponent', () => {
  let component: DirectumComponent;
  let fixture: ComponentFixture<DirectumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
