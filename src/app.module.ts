import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module'; 
import { AppComponent } from './app/app.component'; 
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { HomeComponent } from './app/components/home/home.component';

@NgModule({
  imports:  [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule {}
