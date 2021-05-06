import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'bienvenidos', component: BienvenidosComponent },
  // { path: '', component: BienvenidosComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'bienvenidos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
