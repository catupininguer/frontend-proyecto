import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ListProductsComponent } from "../components/list-products/list-products.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular';
}