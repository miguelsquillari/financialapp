import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoListComponent } from './cripto-list.component';

describe('CriptoListComponent', () => {
  let component: CriptoListComponent;
  let fixture: ComponentFixture<CriptoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriptoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriptoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
