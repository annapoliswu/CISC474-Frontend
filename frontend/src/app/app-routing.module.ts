import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddprojectComponent } from './pages/addproject/addproject.component';
import { ListhouseComponent } from './pages/listhouse/listhouse.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'listhouse',component: ListhouseComponent},
  {path:'addproject',component: AddprojectComponent},
  {path:'favorites',component: FavoritesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
