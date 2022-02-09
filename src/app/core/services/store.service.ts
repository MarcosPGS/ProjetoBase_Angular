import { Injectable } from '@angular/core';
import { Store } from './store';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends Store<Data>{

  constructor() { 
    super(new Data());
  }

  addObjetoTeste(data: any): void {
    this.setState({...this.state, objetoTeste: data});
  }
}
