import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';





const routes: Routes = [
  

  {path :'empresas',component:EmpresasComponent},
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: '**', redirectTo: 'empresas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }