import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }
  user={
    usuario:"",
    password:""
  }
  ingresar(){
    const animation: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.animacion'))
      .duration(1000)
      .fromTo('opacity', '1', '0.2')
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
    animation.play();

    
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/pagina-inicial'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }

  tuPromo(){
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/combo2'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }

  login(){
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/login'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }

  

  





}
