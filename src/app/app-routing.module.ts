import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { MyGuardGuard } from './pages/my-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'first',
    component: FirstPageComponent,
  },
  {
    path: 'second',
    canActivate: [MyGuardGuard],
    component: SecondPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
