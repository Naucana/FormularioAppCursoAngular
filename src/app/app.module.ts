import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { PlantillaComponent } from './components/formularios/plantilla/plantilla.component';
import { LoginComponent } from './components/formularios/login/login.component';
// import { HttpClient } from "module";

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
