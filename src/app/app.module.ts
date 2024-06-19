import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PeopleComponent } from './components/people/people.component';
import { RegisterComponent } from './components/register/register.component';
import { TvComponent } from './components/tv/tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { WatchPipe } from './watch.pipe';
import { SeemorPipe } from './seemor.pipe';
import { SearchPipe } from './search.pipe';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
  // import {FormGroup  } from "@angular/forms";
  // import {NgxTypedJsModule} from 'ngx-typed-js';
  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MoviesComponent,
    NavbarComponent,
    NotfoundComponent,
    PeopleComponent,
    RegisterComponent,
    TvComponent,
    MoviedetailsComponent,
    WatchPipe,
    SeemorPipe,
    SearchPipe,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    // FormGroup,
    // NgxTypedJsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
