import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarCepPageRoutingModule } from './buscar-cep-routing.module';

import { BuscarCepPage } from './buscar-cep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarCepPageRoutingModule
  ],
  declarations: [BuscarCepPage]
})
export class BuscarCepPageModule {}
