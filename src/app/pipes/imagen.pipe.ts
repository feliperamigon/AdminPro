import { URL_SERVICIOS } from './../config/config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, value: any, tipo: string = 'usuario'): any {


    let url = URL_SERVICIOS + '/img';

    if (!img) {
      return url + '/usuarios/xxxx';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {


      case 'usuario':
        url += '/usuarios/' + img;
        break;

      case 'medico':
        url += '/medicos/' + img;
        break;

      case 'hospital':
        url += '/hospitales/' + img;
        break;

      default:
        console.error('Tipo de imagen no existe, solo usuarios, medicos o hospitales');
        url += '/usuarios/xxxx';
        break;

    }

    return url;

  }

}
