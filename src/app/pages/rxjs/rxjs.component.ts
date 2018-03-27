import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el observer', error),
      () => console.log('El observador terminó')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  returnObservable(): Observable<any> {

    return new Observable(observer => {
      let cont = 0;
      let interval = setInterval(() => {

        cont += 1;
        let salida = {
          valor: cont
        };

        observer.next(salida);

        // if (cont === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if (cont === 2) {
        //   observer.error('Auxilio');
        // }

      }, 500);
    })
    .retry(2)
    .map((resp: any) => {
      return resp.valor;
    })
    .filter( (valor, index) => {
      // console.log('Filter', valor, index);

      if ( valor % 2 === 1) {
        // Odd
        return true;
      } else {
        // even
        return false;
      }
    });

  }

}
