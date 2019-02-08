import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get("https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&apikey=5289c324ff27b01176f4e1db590bf2b1");
  }
  
  putMovies(name,image){
    console.log("Data is"+name);
    return this.http.post("http://localhost:3000/favourites",{
      name, image
    })
    .subscribe(console.log);
  }
  
  displayImage(){
    return this.http.get("http://localhost:3000/favourites");
  }

  searchMovies(nameOfMovie: any){
    return this.http.get(`https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&q=${nameOfMovie}&apikey=5289c324ff27b01176f4e1db590bf2b1`);
  }

  getdetails(id){

  return this.http.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}&apikey=5289c324ff27b01176f4e1db590bf2b1`);

  }
  
}
