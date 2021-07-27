import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNavbarComponent } from './intro-navbar.component';

describe('IntroNavbarComponent', () => {
  let component: IntroNavbarComponent;
  let fixture: ComponentFixture<IntroNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
