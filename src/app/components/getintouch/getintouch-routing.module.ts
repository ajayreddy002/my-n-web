import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetintouchComponent } from './getintouch.component';


const routes: Routes = [
  {path: '', component: GetintouchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetintouchRoutingModule { }
