import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmatofferingsComponent } from './gmatofferings.component';

describe('GmatofferingsComponent', () => {
  let component: GmatofferingsComponent;
  let fixture: ComponentFixture<GmatofferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GmatofferingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GmatofferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
