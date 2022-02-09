import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/core/models/contato';
import { StoreService } from '../../core/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit(): void {
  }

  addContato(): void {
    const contato: Contato = {
      nome: 'Marcos Paulo',
      idade: '30',
      email: 'marcos@gamil.com'
    };

    // ADD contato no state
    this.storeService.addContato(contato);
    this.router.navigate(['/contato'])
  }

}
