import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movie: MoviesService, private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
  }
 
  arrayOfMovies:any=[];

  getMovie(value){
    this.movie.searchMovies(value).subscribe((data: any) => {
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

  resDetails(name)
  {
    this.router.navigateByUrl(`details/${name}`)
  }

}