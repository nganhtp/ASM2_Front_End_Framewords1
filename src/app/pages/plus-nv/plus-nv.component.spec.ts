import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusNvComponent } from './plus-nv.component';

describe('PlusNvComponent', () => {
  let component: PlusNvComponent;
  let fixture: ComponentFixture<PlusNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusNvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
