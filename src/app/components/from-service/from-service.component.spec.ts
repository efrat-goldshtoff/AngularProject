import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromServiceComponent } from './from-service.component';

describe('FromServiceComponent', () => {
  let component: FromServiceComponent;
  let fixture: ComponentFixture<FromServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FromServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
