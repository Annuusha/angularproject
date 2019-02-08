import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {


  someVar : any = [];
 
  constructor(private movie: MoviesService, private http:HttpClient ) {}

  ngOnInit() {
    this.displayimg();
  }
  displayimg() {
    this.movie.displayImage().subscribe((x) => {
      this.someVar = x
      console.log(this.someVar)
    });
  }

    remove(resdata) {
      console.log("Data is"+resdata);
      this.http.delete("http://localhost:3000/favourites/"+resdata).subscribe(console.log);
      this.someVar=this.someVar.filter(data=>resdata!=data.id) 
  }
  
}
