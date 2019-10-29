import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/formularios/login/login.component';
import { PlantillaComponent } from './components/formularios/plantilla/plantilla.component';
import { ControlGuard } from './control.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [ControlGuard]},
  {path: "registro", component:PlantillaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
