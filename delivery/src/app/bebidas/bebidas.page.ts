import { Component, OnInit } from '@angular/core';
import { GetapiService } from './getapi.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

getdata: any[]=[];

  constructor(public _services: GetapiService) { 

    this._services.getdata<any[]>("").subscribe(data =>{
      this.getdata = data
      console.log(this.getdata);
    }
      )
  }

  ngOnInit() {
  }

}
