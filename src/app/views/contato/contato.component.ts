import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../core/services/store.service';
import {take, pluck, filter} from 'rxjs/operators'
import { Contato } from 'src/app/core/models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
contatos: Contato[] = [];
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getContato();
  }

  //Metodo para pegar o State
  getContato(): void {
    this.storeService.state$.pipe(
      take(1),
      pluck('contato'),
      filter(data => data !== null)
    ).subscribe( data => {
      this.contatos = data;
      
    });
  }

}
