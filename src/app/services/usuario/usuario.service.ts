import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

import 'rxjs/add/operator/map';



@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router, public _subirArchivo: SubirArchivoService) {
    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;

  }

  crearUsuario(usuario: Usuario) {

    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario).map((res: any) => {
      swal('Usuario Creado', usuario.email, 'success');
      return res.usuario;
    });

  }
  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';

    return this.http.post(url, usuario).map((res: any) => {
      this.guardarStorage(res.id, res.token, res.usuario);
      return true;
    });

  }

  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, { token }).map((res: any) => {
      this.guardarStorage(res.id, res.token, res.usuario);
      return true;
    });

  }

  actualizarUsuario(usuario: Usuario) {

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;
    return this.http.put(url, usuario).map((res: any) => {

      this.guardarStorage(res.usuario._id, this.token, res.usuario);
      swal('Usuario actualizado', usuario.nombre, 'success');

      return true;
    });

  }

  cambiarImagen(archivo: File, id: string) {

    this._subirArchivo.subirArchivo(archivo, 'usuarios', id)
      .then((res: any) => {

        this.usuario.img = res.usuario.img;
        swal('Imagen actualizada', this.usuario.nombre, 'success');
        this.guardarStorage(id, this.token, this.usuario);

      })
      .catch(err => {
        console.error(err);
      });
  }

}
