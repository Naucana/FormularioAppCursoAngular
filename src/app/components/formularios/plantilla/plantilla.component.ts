import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  usuario = {
    apellidos: '',
    nombre: '',
    correo: '',
    edad: '',
    telefono: '',
    password: '',
    repetirPassword: ''
  }

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      repetirPassword: new FormControl('', [this.passwordRepe.bind(this.forma)])
    });
   }

  ngOnInit() {
  }

  guardar(frm: NgForm){
    console.log('ngForm', frm);
    console.log("Valor frm", frm.value);
    console.log("Usuario", this.usuario);
    this.usuario = frm.value;
  }

  passwordRepe(control: FormControl) {
    console.log(this);
    console.log(control);
    // console.log(this.forma.control.repetirPassword.value);
  }

  getErrors(){}
  
}
