import { Injectable } from '@angular/core';
import { Store } from './store';
import { Data } from './data';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends Store<Data>{

  constructor() { 
    super(new Data());
  }

  addContato(data: Contato): void {
    this.setState({...this.state, contato: data});
  }
}
