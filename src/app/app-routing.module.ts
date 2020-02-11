import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule) },
  // { path: 'home', loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule) },
  { path: 'team', loadChildren: () => import('./components/team/team.module').then(mod => mod.TeamModule) },
  { path: 'getintouch', loadChildren: () => import('./components/getintouch/getintouch.module').then(mod => mod.GetintouchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
