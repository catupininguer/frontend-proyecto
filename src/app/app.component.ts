import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ListProductsComponent } from "../components/list-products/list-products.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ListProductsComponent],
=======
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
>>>>>>> b325f29751b6dc429c85333e8eeaad242837ea8f
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'crud-angular';
=======
  title = 'frontend';
>>>>>>> b325f29751b6dc429c85333e8eeaad242837ea8f
}
