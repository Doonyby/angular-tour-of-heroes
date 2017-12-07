import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFormComponent } from './practice-form.component';

describe('PracticeFormComponent', () => {
  let component: PracticeFormComponent;
  let fixture: ComponentFixture<PracticeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
