import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { YogaComponent } from './components/yoga/yoga.component';
import { HealthAndWellBeingComponent } from './components/health-and-well-being/health-and-well-being.component';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { SummaryComponent } from './shared/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YogaComponent,
    HealthAndWellBeingComponent,
    TariffsComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
