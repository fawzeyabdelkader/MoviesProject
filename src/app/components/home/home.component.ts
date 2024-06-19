import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

constructor(private _MoviesService:MoviesService){}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 8
    }
  },
  nav: true
}

trendingTv:any[]=[];
trendingPerson:any[]=[];
trendingMovies:any[]=[];
imgPrefix:string='https://image.tmdb.org/t/p/w500'
ngOnInit(): void {
this._MoviesService.getTrending('movie').subscribe({
  next:(response)=>this.trendingMovies=response.results.slice(0,16 ),
  // next:(response)=>this.trendingMovies=response.results.slice(0,10),
})

this._MoviesService.getTrending('tv').subscribe({
  next:(response)=>this.trendingTv=response.results.slice(0,16 ),
  // next:(response)=>this.trendingTv=response.results.slice(0,10),
})

this._MoviesService.getTrending('person').subscribe({
    next:(response)=>this.trendingPerson=response.results.slice(0,16 ),
    // next:(response)=>this.trendingPerson=response.results.slice(0,10),
  })
}
}
