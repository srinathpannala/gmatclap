import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmatquestionsComponent } from './gmatquestions.component';

describe('GmatquestionsComponent', () => {
  let component: GmatquestionsComponent;
  let fixture: ComponentFixture<GmatquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GmatquestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GmatquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
