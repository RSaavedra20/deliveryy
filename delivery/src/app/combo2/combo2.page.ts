import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import{Combo2Service} from  './combo2.service'

@Component({
  selector: 'app-combo2',
  templateUrl: './combo2.page.html',
  styleUrls: ['./combo2.page.scss'],
})
export class Combo2Page implements OnInit {

  private productos = []
  constructor(private Servicio: Combo2Service,private router:Router) { }

  ngOnInit() {
    this.productos = this.Servicio.getProductos()

  }
  logout() {
    console.log("oK")
    localStorage.setItem('ingresado','false');
    this.router.navigate(['/login'])
   }
}


  









