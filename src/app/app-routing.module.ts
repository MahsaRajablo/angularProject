import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExploreComponent } from './explore/explore.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AutherComponent } from './auther/auther.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'forms', loadChildren: () => import('./auth/auth-routing.module').then(a => AuthModule)},
  {path: 'explore', component: ExploreComponent},
  {path:'itemDetails',component:ItemDetailsComponent},
  {path:'author', component:AutherComponent},
  {path: 'notFound', component: NotFoundComponent},
  {path: '**', redirectTo: 'notfound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
