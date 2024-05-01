import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmatmasteryComponent } from './gmatmastery.component';

describe('GmatmasteryComponent', () => {
  let component: GmatmasteryComponent;
  let fixture: ComponentFixture<GmatmasteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GmatmasteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GmatmasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
