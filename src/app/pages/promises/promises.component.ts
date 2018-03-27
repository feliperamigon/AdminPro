import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.count3Seconds().then(
      () => console.log('Termino!')
    ).catch(
      error => console.log('Error en la promesa', error)
      );
  }

  ngOnInit() {
  }

  count3Seconds(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

      let cont = 0;
      let interval = setInterval(() => {
        cont += 1;
        console.log(cont);
        if (cont === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);

    });
  }

}
