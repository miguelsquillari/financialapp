import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarcotizacionComponent } from './dolarcotizacion.component';

describe('DolarcotizacionComponent', () => {
  let component: DolarcotizacionComponent;
  let fixture: ComponentFixture<DolarcotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DolarcotizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DolarcotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
