import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menus:any[] = [
    {
      name:'Home',
      enlace: 'index.html'
    },
    {
      name:'About',
      enlace: 'about.html'
    },
    {
      name:'Shop',
      enlace: 'shop.html'
    },
    {
      name:'Contact',
      enlace: 'contact.html'
    },
]

}
