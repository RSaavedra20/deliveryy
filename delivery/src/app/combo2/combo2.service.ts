import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Combo2Service {

  private productos=[
    {
      id:'1',
      titulo: "completo",
      url:"https://finde.latercera.com/wp-content/uploads/2021/05/completo-1.jpg",
    },
    {
      id:'2',
      titulo: "pizza",
      url:"https://www.saborusa.com/cl/wp-content/uploads/sites/17/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
    },
    {
      id:'3',
      titulo: "Barros luco",
      url:"https://www.chilerecetas.cl/images/fotos/barros_luco.jpg"
    }
  ];

  constructor() { }

  //listar
  getProductos(){
    return [...this.productos]
  }

  //agregar
  addProducto(titulo: string, url: string){
    this.productos.push(
      {
        id: this.productos.length+1+"",
        titulo: titulo,
        url: url
      }
    )
  }
  //eliminar
  deleteproductos(productoID: string){

    this.productos = this.productos.filter(p =>{
      return p.id !== productoID
    })
  }


  //buscar por id
  getProductosById(productoID:string){
    return{
      ...this.productos.find(p =>{
        p.id = productoID
      })
    }
  }
}
