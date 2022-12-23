import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneteCorporacionComponent } from './unete-corporacion.component';

describe('UneteCorporacionComponent', () => {
  let component: UneteCorporacionComponent;
  let fixture: ComponentFixture<UneteCorporacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneteCorporacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UneteCorporacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
