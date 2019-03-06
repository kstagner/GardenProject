import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GardenHomeComponent } from './garden-home/garden-home.component';
import { GardenAboutComponent } from './garden-about/garden-about.component';
import { GardenProductComponent } from './garden-product/garden-product.component';

const routes = [
  { path: 'about', component: GardenAboutComponent },
  { path: 'products', component: GardenProductComponent },
  { path: 'home', component: GardenHomeComponent },
  //{ path: 'login', component: }

];
@NgModule({
  declarations: [
    AppComponent,
    GardenHomeComponent,
    GardenAboutComponent,
    GardenProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
