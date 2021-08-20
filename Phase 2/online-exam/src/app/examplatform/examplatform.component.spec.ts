import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplatformComponent } from './examplatform.component';

describe('ExamplatformComponent', () => {
  let component: ExamplatformComponent;
  let fixture: ComponentFixture<ExamplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
