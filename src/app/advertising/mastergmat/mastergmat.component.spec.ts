import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastergmatComponent } from './mastergmat.component';

describe('MastergmatComponent', () => {
  let component: MastergmatComponent;
  let fixture: ComponentFixture<MastergmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MastergmatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MastergmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
