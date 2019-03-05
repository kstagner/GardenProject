import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GardenHomeComponent } from './garden-home/garden-home.component';
import { GardenAboutComponent } from './garden-about/garden-about.component';
import { GardenProductComponent } from './garden-product/garden-product.component';

@NgModule({
  declarations: [
    AppComponent,
    GardenHomeComponent,
    GardenAboutComponent,
    GardenProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
