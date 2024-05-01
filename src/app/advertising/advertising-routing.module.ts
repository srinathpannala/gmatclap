import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastergmatComponent } from './mastergmat/mastergmat.component';

const routes: Routes = [
  // {path:'advertising',component:MastergmatComponent},
  {path:'master',
  children:[
  {path:'gmat-with-raaj',component:MastergmatComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisingRoutingModule { }
