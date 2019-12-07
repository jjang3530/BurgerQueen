import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PopoverController, Events } from '@ionic/angular';
import { ResetpopoverComponent} from '../resetpopover/resetpopover.component'

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage implements OnInit {

  orderType: any;
  menuName: any;
  quantity: any;
  unitPrice: any;
  detailData: Array<any>;

  constructor(private storage: Storage,
    public popoverController: PopoverController,
    public events: Events) { }

    ngOnInit() {
      this.storage.get('orderType').then((val) => {
        this.orderType = val;
      });
    }

    ionViewWillEnter(){
      this.detailData = new Array();
      this.getOrderDetail();
    }

    async openPopover(){
      const popover = await this.popoverController.create({
        component: ResetpopoverComponent,
        cssClass: 'popoverCss',
        translucent: false,
        animated: true,
        backdropDismiss: true
      });
      return await popover.present();
    }

    getOrderDetail(){
      for(let i =1; i < 6; i++){
        this.storage.get('Name' + i).then((name) => {
          this.menuName = name;
        });
        this.storage.get('Price' + i).then((price) => {
          this.unitPrice = price;
        });
        this.storage.get('Qty' + i).then((qty) => {
          this.quantity = qty;
           if(this.quantity != null){
            this.detailData.push({'menuName':this.menuName, 'unitPrice':this.unitPrice, 'quantity':this.quantity});
             }
          });
      }
    }
}
