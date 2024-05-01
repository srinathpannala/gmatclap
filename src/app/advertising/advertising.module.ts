import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Remove Routes import
import { AdvertisingRoutingModule } from './advertising-routing.module';
import { MastergmatComponent } from './mastergmat/mastergmat.component';

@NgModule({
  declarations: [
    MastergmatComponent
  ],
  imports: [
    CommonModule,
    AdvertisingRoutingModule,
    RouterModule 
  ],
  exports: [RouterModule]

})
export class AdvertisingModule { }
