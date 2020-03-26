import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProductComponent } from './product/product.component';
import { MapaComponent } from './mapa/mapa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  FavoriteComponent,
  ProductComponent,
  MapaComponent
];
