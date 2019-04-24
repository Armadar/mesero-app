import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatoComponent } from './plato/plato.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './_service/login-guard.service';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { MiperfilEditComponent } from './miperfil/miperfil-edit/miperfil-edit.component';

const appRoutes: Routes = [
  {
    path: 'plato', component: PlatoComponent, children: [
      { path: '', component: PlatoInicioComponent },// Bienvenida
      { path: 'nuevo', component: PlatoEdicionComponent },// Formulario de registro
      { path: ':id', component: PlatoDetalleComponent },// Mostrar informacion del plato enviado por la URL, : significa ruta dinamica
      { path: ':id/editar', component: PlatoEdicionComponent },// Para Editarlo
    ], canActivate: [LoginGuard]
  },
  { path: 'consumo', component: ConsumoComponent, canActivate: [LoginGuard] },
  { path: 'consulta', component: ConsultaComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // al cargar la pagina ... cargar ...
  { path: 'login', component: LoginComponent },
  { path: 'miperfil', component: MiperfilComponent,children:[
    { path: 'edit', component: MiperfilEditComponent }// Edit Perfil
  ],canActivate: [LoginGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}