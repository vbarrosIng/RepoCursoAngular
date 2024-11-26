import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PformComponent } from './pform.component';

describe('PformComponent', () => {
  let component: PformComponent;
  let fixture: ComponentFixture<PformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
