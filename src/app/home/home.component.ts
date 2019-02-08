import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movie: MoviesService) { }

  arrayOfMovies = [];
  ngOnInit() {
    this.movie.getMovies().subscribe((data: any) => {
      console.log(data)
          data.restaurants= data.restaurants.map(e =>  { 
          return e 
        })
        this.arrayOfMovies = data.restaurants
    })

  }


  addToFavs(moviedata) {
    console.log("data is: : "+moviedata.name,moviedata.featured_image)
    this.movie.putMovies(moviedata.name,moviedata.featured_image);
    
  }


  }

