import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddreviewPage } from '../addreview/addreview';
import { ReviewsProvider } from '../../providers/reviews/reviews';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  reviews : any;

  constructor(public navCtrl: NavController,public reviewService:ReviewsProvider,public modalCtrl:ModalController) {

  }

  ionViewDidLoad(){
    console.log("loadHome");
    this.reviewService.getReviews().then((data)=>{
      this.reviews = data;
    });
  }

  addReview(){

    let modal = this.modalCtrl.create(AddreviewPage);

    modal.onDidDismiss(review => {
      if(review){
        this.reviewService.createReview(review);
        this.reviews.push(review);        
      }
    })
    modal.present();

  }

  deleteReview(review){

    let index = this.reviews.indexOf(review);
    if(index>-1){
      this.reviews.splice(index,1); //Remove ion-item from ion-list
    }
    //remove from database
    this.reviewService.deleteReview(review._id);

  }
}
