import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
 
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit{
   movieDetails:any={};
  movieId:string='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService){}



  ngOnInit(): void {
 this.movieId= this._ActivatedRoute.snapshot.params['id'];
this._MoviesService.getMovieDetails(this.movieId).subscribe
 ({
  next:(response)=>this.movieDetails=response,
  error:(error)=>console.log(error)
 })
  }
}
