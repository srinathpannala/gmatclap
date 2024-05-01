import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmatstructureComponent } from './gmatstructure.component';

describe('GmatstructureComponent', () => {
  let component: GmatstructureComponent;
  let fixture: ComponentFixture<GmatstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GmatstructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GmatstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
