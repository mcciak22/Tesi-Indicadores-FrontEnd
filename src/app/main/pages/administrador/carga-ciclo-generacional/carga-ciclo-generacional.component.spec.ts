import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaCicloGeneracionalComponent } from './carga-ciclo-generacional.component';

describe('CargaCicloGeneracionalComponent', () => {
  let component: CargaCicloGeneracionalComponent;
  let fixture: ComponentFixture<CargaCicloGeneracionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaCicloGeneracionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaCicloGeneracionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
