import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionCriptoComponent } from './cotizacion-cripto.component';

describe('CotizacionCriptoComponent', () => {
  let component: CotizacionCriptoComponent;
  let fixture: ComponentFixture<CotizacionCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotizacionCriptoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CotizacionCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
