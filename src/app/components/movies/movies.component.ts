import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
declare var $: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  trendingMovies: any[] = [];
  pages:number[]=[]
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  term:string='';


  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    // $("#myElment").hide(4000)

    this.pages=new Array(10).fill(0).map((x,i)=>i+1);
    this._MoviesService.getMovieByPagination(1).subscribe({
      next: (response) =>
        (this.trendingMovies = response.results),
    })
  }
test(pageNumber:number)
{
  this._MoviesService.getMovieByPagination(pageNumber).subscribe({
    next: (response) =>
      (this.trendingMovies = response.results),
  })

}

}
