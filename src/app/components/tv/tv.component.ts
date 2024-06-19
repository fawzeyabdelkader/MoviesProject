import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}
  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe({
      next:(response)=>this.trendingTv=response.results ,
      // next:(response)=>this.trendingTv=response.results.slice(0,10),
    })  }
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  trendingTv:any[]=[];

}
