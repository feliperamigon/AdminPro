import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Gráficas', url: '/graficas1' },
        { title: 'Promesas', url: '/promises' },
        { title: 'RxJS', url: '/rxjs'}
      ]
    },
    {
      title: 'Mantenimientos',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        {title: 'Usuarios', url: '/usuarios'},
        {title: 'Hospitales', url: '/hospitales'},
        {title: 'Médicos', url: '/medicos'}
      ]
    }
  ];

  constructor() { }

}
