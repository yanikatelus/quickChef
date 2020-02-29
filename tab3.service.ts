import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Tab3Service {
  //url = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
  url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search';
  apiKey = 'Get Your Free key at RAPIDAPI'; // <-- Enter your own key here!
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
  /**
  * Get data from the Recipe API 
  * map the result to return only the results that we need
  * 
  * @param {string} meal Search Term
  * @returns Observable with the search results
  */
  searchData(meal: string): Observable<any> {
    let headers = new HttpHeaders({'x-rapidapi-key': this.apiKey});
    //return this.https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search
    //return this.http.get(`${this.url}&x-rapidapi-key=${this.apiKey}`).pipe(
    return this.http.get(`${this.url}?number=30&query=${meal}`,{headers: headers}).pipe(
      //map(results => results['Search'])
      map(results => results['results'])
      //map(results => console.log('my data: ', results))
    );
  }//end of searchData
}
