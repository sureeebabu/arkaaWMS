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
  public putDetailsJson:any =[];
  public hfScanBoxQR:string;
  public hfScanRackQR:string;
  scanBoxQR:string;
  scanRackQR:string;
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
    this.getPutDetailsyID(this.intPutDetailsID);
  }

  getPutDetailsyID(putDetailsID) {
    let data: Observable<any>;
    // alert(custCode);
    let url = this.myFunc.domainURL + "handlers/putMaster.ashx?mode=selPutDetByID&putDetailsID=" + putDetailsID;
    let loader = this.loadingCtrl.create({
      content: 'Fetching Data From Server...'
    });
    data = this.http.get(url);
    loader.present().then(() => {
      data.subscribe(result => {
       // console.log(result);
        this.putDetailsJson = result;
        this.hfScanBoxQR = result[0].itemName;
        this.hfScanRackQR = result[0].suggestedLocation;

        console.log(this.putDetailsJson);
        // alert(this.hfScanBoxQR);
        // alert(this.hfScanRackQR);

        loader.dismiss();
      }, error => {
        loader.dismiss();
        console.log(error);
        //alert('Error in List Claim');
      });
    });
  }

}
