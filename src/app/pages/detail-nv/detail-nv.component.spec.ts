import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNvComponent } from './detail-nv.component';

describe('DetailNvComponent', () => {
  let component: DetailNvComponent;
  let fixture: ComponentFixture<DetailNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
