import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from "./ingreso/ingreso.component";
import { EmpresasComponent } from './empresas/empresas.component';





const routes: Routes = [
  
  { path: 'ingresar', component: IngresoComponent },
  {path :'empresas',component:EmpresasComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }