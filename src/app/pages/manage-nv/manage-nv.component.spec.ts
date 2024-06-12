import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNVComponent } from './manage-nv.component';

describe('ManageNVComponent', () => {
  let component: ManageNVComponent;
  let fixture: ComponentFixture<ManageNVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
