import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private movie: MoviesService, private http: HttpClient, private route: ActivatedRoute, private router: Router ) { }


  movieDetails: any;

  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('name');
    console.log(id);
    this.movie.getdetails(id).subscribe((data:any) => {
      console.log(data)
      this.movieDetails=data;
    })
  }

  addToFavs(moviedata) {
    console.log("data is: : "+moviedata.name,moviedata.featured_image)
    this.movie.putMovies(moviedata.name,moviedata.featured_image);
    
  }
}
