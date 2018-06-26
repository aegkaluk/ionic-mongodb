import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewsProvider {
  
  data:any;

  constructor(public http: HttpClient) {
    console.log('Hello ReviewsProvider Provider');
    this.data = null;
  }

  getReviews(){
    if(this.data){
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve=>{

      this.http.get('http://localhost:8080/api/reviews')
          .map(res => console.log(res))
          .subscribe( data=> {
            this.data = data;
            resolve(this.data);
          });
    });
  
  }
  
  createReview(review){
    let headers = new HttpHeaders();
    headers.append('Content-type','application/json');

    this.http.post('http://localhost:8080/api/reviews',JSON.stringify(review),{headers: headers })
        .subscribe(res => {
          console.log(res);
        });
  }

  deleteReview(id){

    this.http.delete('http://localhost:8080/api/reviews'+id)
        .subscribe((res)=>{
            console.log(res);
        });

  }
  

}
