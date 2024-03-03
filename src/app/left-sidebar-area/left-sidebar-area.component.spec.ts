import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarAreaComponent } from './left-sidebar-area.component';

describe('LeftSidebarAreaComponent', () => {
  let component: LeftSidebarAreaComponent;
  let fixture: ComponentFixture<LeftSidebarAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSidebarAreaComponent]
    });
    fixture = TestBed.createComponent(LeftSidebarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
