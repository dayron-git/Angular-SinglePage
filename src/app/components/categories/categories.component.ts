import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  public categorias:any[] =[
    {nombre: 'Watches', imagen:'./img/category_img_01.jpg'},
    {nombre: 'Shoes', imagen:'./img/category_img_02.jpg'},
    {nombre: 'Accessories', imagen:'./img/category_img_03.jpg'},


  ];

}
