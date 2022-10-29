import { Component, OnInit } from '@angular/core';
import{Combo2Service} from  './combo2.service'

@Component({
  selector: 'app-combo2',
  templateUrl: './combo2.page.html',
  styleUrls: ['./combo2.page.scss'],
})
export class Combo2Page implements OnInit {

  private productos = []
  constructor(private Servicio: Combo2Service) { }

  ngOnInit() {
    this.productos = this.Servicio.getProductos()

  }

}


  









