import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   { path: 'bienvenida', component: BienvenidaComponent, canActivate:[AuthGuard] },
   { path: 'login', component: LoginComponent },
   {path:'', redirectTo: 'bienvenida', pathMatch:'full'},
   // Redireccion
   { path:'**', redirectTo:'bienvenida' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
