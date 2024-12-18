<<<<<<< HEAD
import { Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListProductsComponent } from '../components/list-products/list-products.component';
import { AddEditProductsComponent } from '../components/add-edit-products/add-edit-products.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



export const routes: Routes = [
    {path: '', component: ListProductsComponent},
    {path: 'add', component: AddEditProductsComponent},
    {path: 'edit/:id', component: AddEditProductsComponent },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {}
=======
import { Routes } from '@angular/router';

export const routes: Routes = [];
>>>>>>> b325f29751b6dc429c85333e8eeaad242837ea8f
