import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostPage } from './admin-post.page';

describe('AdminPostPage', () => {
  let component: AdminPostPage;
  let fixture: ComponentFixture<AdminPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
