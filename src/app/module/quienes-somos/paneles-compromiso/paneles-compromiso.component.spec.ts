import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelesCompromisoComponent } from './paneles-compromiso.component';

describe('PanelesCompromisoComponent', () => {
  let component: PanelesCompromisoComponent;
  let fixture: ComponentFixture<PanelesCompromisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelesCompromisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelesCompromisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
