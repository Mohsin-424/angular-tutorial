import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitComponent } from './cockpit.component';

describe('cockpitcomponent', () => {
  let component: cockpitcomponent;
  let fixture: ComponentFixture<CockpitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CockpitComponent]
    });
    fixture = TestBed.createComponent(CockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
