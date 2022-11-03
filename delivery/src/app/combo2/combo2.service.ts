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
      precio:'$1500',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id:'2',
      titulo: "pizza",
      url:"https://www.saborusa.com/cl/wp-content/uploads/sites/17/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
      precio:'$1500',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id:'3',
      titulo: "Barros luco",
      url:"https://www.chilerecetas.cl/images/fotos/barros_luco.jpg",
      precio:'$1500',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
  ];

  constructor() { }

  //listar
  getProductos(){
    return [...this.productos]
  }

  //agregar
  addProducto(titulo: string, url: string, precio: string, descripcion: string){
    this.productos.push(
      {
        id: this.productos.length+1+"",
        titulo: titulo,
        url: url,
        precio: precio,
        descripcion: descripcion
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
    return this.productos.filter(p =>{
      return p.id == productoID
    })[0]
    
  }
}
