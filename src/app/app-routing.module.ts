import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { HomeComponent } from "./home/home.component";


import { AuthGuard } from '@auth0/auth0-angular';





const routes: Routes = [
  
  {path :'home',component:HomeComponent},
  {path :'empresas',component:EmpresasComponent,canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }