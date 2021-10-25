import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtodosapprovedComponent } from './listtodosapproved.component';

describe('ListtodosapprovedComponent', () => {
  let component: ListtodosapprovedComponent;
  let fixture: ComponentFixture<ListtodosapprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtodosapprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtodosapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
