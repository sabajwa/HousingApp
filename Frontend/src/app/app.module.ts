import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
<<<<<<< HEAD
import { HttpClientModule } from "@angular/common/http";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { AppComponent } from "./app.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
=======
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { AppComponent } from "./app.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
   declarations: [
      AppComponent,
      PropertyCardComponent,
      PropertyListComponent,
      NavBarComponent
   ],
   imports: [
	 BrowserModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
>>>>>>> bdb86bf58baf3a8b16a4902af7d0594d25a98c9d
})
export class AppModule {}
