import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbButtonComponent } from './fb-button.component';

describe('FbButtonComponent', () => {
  let component: FbButtonComponent;
  let fixture: ComponentFixture<FbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FbButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
