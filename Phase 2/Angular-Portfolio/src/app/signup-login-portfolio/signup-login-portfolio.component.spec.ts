import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLoginPortfolioComponent } from './signup-login-portfolio.component';

describe('SignupLoginPortfolioComponent', () => {
  let component: SignupLoginPortfolioComponent;
  let fixture: ComponentFixture<SignupLoginPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupLoginPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupLoginPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
