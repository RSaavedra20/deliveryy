import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Combo2Service } from '../combo2.service';

@Component({
  selector: 'app-descripcion-combo2',
  templateUrl: './descripcion-combo2.page.html',
  styleUrls: ['./descripcion-combo2.page.scss'],
})
export class DescripcionCombo2Page implements OnInit {
  producto
  constructor(private route: ActivatedRoute,private Servicio: Combo2Service
    ) {}
  ngOnInit() {
    this.route.params.subscribe(async params => {
      console.log(params['productoID'])
      this.producto = await this.Servicio.getProductosById(params['productoID'])
      console.log(this.producto)
     });
   }
}


