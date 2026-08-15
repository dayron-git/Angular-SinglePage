import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  public products:any[] = [
    {
      precio:'240',
      nombre:'Gym weight',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.',
      reviews: '24',
      imagen:'./img/feature_prod_01.jpg',
      estrellas:[true, true, true, false, false]
    },
    {
      precio:'480',
      nombre:'Cloud Nike Shoes',
      descripcion: 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',
      reviews: '48',
      imagen:'./img/feature_prod_02.jpg',
      estrellas:[true, true, true, true, false]
    },
    {
      precio:'360',
      nombre:'Summer Addides Shoes',
      descripcion: 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.',
      reviews: '74',
       imagen:'./img/feature_prod_03.jpg',
       estrellas:[true, true, true, true, true]
    },
    



  ]
}
