import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CommfuncProvider } from '../../providers/commfunc/commfunc';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-addput',
  templateUrl: 'addput.html',
})
export class AddputPage {
  public intPutDetailsID;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private myFunc: CommfuncProvider
)
 {
    this.intPutDetailsID = this.navParams.get("putDetailsID");
  //  this.strPutNo = this.navParams.get("putNo");
    console.log(this.intPutDetailsID);
}

  ionViewDidLoad() {
  }

}
