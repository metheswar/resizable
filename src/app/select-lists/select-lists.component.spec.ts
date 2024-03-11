import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectListsComponent } from './select-lists.component';

describe('SelectListsComponent', () => {
  let component: SelectListsComponent;
  let fixture: ComponentFixture<SelectListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
