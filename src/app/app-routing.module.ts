import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./basket/basket.module').then(mod => mod.BasketModule)
  },
  {
    path: 'checkout',
    canActivate: [ AuthGuard],
    loadChildren: () =>
      import('./checkout/checkout.module').then(mod => mod.CheckoutModule)
  },
  { path: '*', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
