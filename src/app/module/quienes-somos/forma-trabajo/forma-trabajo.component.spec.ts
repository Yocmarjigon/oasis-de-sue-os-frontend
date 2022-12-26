import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaTrabajoComponent } from './forma-trabajo.component';

describe('FormaTrabajoComponent', () => {
  let component: FormaTrabajoComponent;
  let fixture: ComponentFixture<FormaTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
