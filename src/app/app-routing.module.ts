import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PeopleComponent } from './components/people/people.component';
import { TvComponent } from './components/tv/tv.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { AuthClassGuard } from './auth-class.guard';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthClassGuard],component:HomeComponent},
  {path:'movies',canActivate:[AuthClassGuard],component:MoviesComponent},
  {path:'people',canActivate:[AuthClassGuard],component:PeopleComponent},
  {path:'tv',canActivate:[AuthClassGuard],component:TvComponent},
  {path:'moviedetails/:id',component:MoviedetailsComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((x)=>x.SettingsModule)},
  // {path:'settings',loadChildren:()=>import('./settings/settings-routing.module').then((x)=>x.SettingsRoutingModule)},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
