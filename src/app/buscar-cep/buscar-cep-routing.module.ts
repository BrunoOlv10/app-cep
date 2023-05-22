import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarCepPage } from './buscar-cep.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarCepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarCepPageRoutingModule {}
