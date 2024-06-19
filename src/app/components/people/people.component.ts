import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
// import Typed from 'typed.js';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe({
      next: (response) => (this.trendingPerson = response.results.slice(0, 16)),
      // next:(response)=>this.trendingPerson=response.results.slice(0,10),
    });
  }
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  trendingPerson: any[] = [];
}
