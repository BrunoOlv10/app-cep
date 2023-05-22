import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarCepPage } from './buscar-cep.page';

describe('BuscarCepPage', () => {
  let component: BuscarCepPage;
  let fixture: ComponentFixture<BuscarCepPage>;

  beforeEach((async () => {
    fixture = TestBed.createComponent(BuscarCepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
