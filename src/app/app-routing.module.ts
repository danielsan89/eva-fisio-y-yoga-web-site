import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthAndWellBeingComponent } from './components/health-and-well-being/health-and-well-being.component';
import { HomeComponent } from './components/home/home.component';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { YogaComponent } from './components/yoga/yoga.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'health-and-well-being',
    component: HealthAndWellBeingComponent
  },
  {
    path: 'yoga',
    component: YogaComponent
  },
  {
    path: 'tariffs',
    component: TariffsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
