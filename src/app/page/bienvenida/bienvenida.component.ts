import { Component, OnInit } from '@angular/core';

// Importamos para poder usar api
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  usuarioGit:any;

  constructor(private _http:HttpClient) { 
    this._http.get('https://api.github.com/users/matiasercolani')
    .subscribe((usuario) => this.usuarioGit = usuario)
  }

  ngOnInit(): void {
  }

}
