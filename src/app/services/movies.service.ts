import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fa0c0f5f3e1b5d2ada5a089e17921b8c`)
  }

  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fa0c0f5f3e1b5d2ada5a089e17921b8c`)
   }
  getMovieByPagination(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=fa0c0f5f3e1b5d2ada5a089e17921b8c&language=en-US&sort_by=popularity.desc&include_video=false&page=${pageNumber}{}`)
   }
}

