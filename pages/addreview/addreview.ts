import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addreview',
  templateUrl: 'addreview.html',
})
export class AddreviewPage {

  title:any;
  description:any;
  rating: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddreviewPage');
  }

  save(): void {
    let review = {
      title:this.title,
      description: this.description,
      rating: this.rating
    };
    this.viewCtrl.dismiss(review);
    console.log("save():",review);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
