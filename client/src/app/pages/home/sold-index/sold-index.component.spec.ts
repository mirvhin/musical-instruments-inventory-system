import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldIndexComponent } from './sold-index.component';

describe('SoldIndexComponent', () => {
  let component: SoldIndexComponent;
  let fixture: ComponentFixture<SoldIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
