import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarblueEvelutionComponent } from './dolarblue-evolution.component';

describe('DolarblueEvelutionComponent', () => {
  let component: DolarblueEvelutionComponent;
  let fixture: ComponentFixture<DolarblueEvelutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DolarblueEvelutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarblueEvelutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
