import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargasarchivosComponent } from './cargasarchivos.component';

describe('CargasarchivosComponent', () => {
  let component: CargasarchivosComponent;
  let fixture: ComponentFixture<CargasarchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargasarchivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargasarchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
