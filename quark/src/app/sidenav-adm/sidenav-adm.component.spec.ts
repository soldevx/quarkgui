import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAdmComponent } from './sidenav-adm.component';

describe('SidenavAdmComponent', () => {
  let component: SidenavAdmComponent;
  let fixture: ComponentFixture<SidenavAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
