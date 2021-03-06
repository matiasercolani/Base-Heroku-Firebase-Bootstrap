import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario:UsuarioModel = new UsuarioModel();
  recordarme = false;
  



constructor(private auth: AuthService,
              private router: Router) { }




  ngOnInit(): void {

  //   if(localStorage.getItem('email')){
  //     this.usuario.email = localStorage.getItem('email');
  //     this.recordarme = true;
  //   }

  //   console.log(this.usuario.email);
  // }


  if(this.recordarme){
    this.usuario.email = localStorage.getItem('email');
    this.recordarme = true;
  }

  console.log(this.usuario.email);
}


accesoRapido(){
  this.usuario.email = 'admin@mail.com';
  this.usuario.password = '123456';
}

accesoRapido2(){
  this.usuario.email = 'empleado@mail.com';
  this.usuario.password = '123456';
}


login(form: NgForm){

  if(form.invalid){return;}

    //* Sweetalert
    Swal.fire({  
      allowOutsideClick: false, 
      icon: 'info', 
      text: 'Espera por Favor..'
    }); 
    
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(resp=>{
      
      console.log(resp);
      console.log(this.usuario.email);
      Swal.close();

         if(this.recordarme){
           localStorage.setItem('email', this.usuario.email);
         }

          localStorage.setItem('email', this.usuario.email);

      this.router.navigateByUrl('/home');

    }, (err) =>{
      // console.log(err.error.error.message);
      Swal.fire({  
        icon: 'error', 
        title: 'Error al autenticar',
        text: err.error.error.message
      }); 
    })
  }
  
  

}