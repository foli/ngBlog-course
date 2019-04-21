import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTabsPage } from './admin-tabs.page';

describe('AdminTabsPage', () => {
  let component: AdminTabsPage;
  let fixture: ComponentFixture<AdminTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
