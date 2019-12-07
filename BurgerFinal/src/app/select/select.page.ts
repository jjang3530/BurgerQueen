import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router} from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  public orderType: string;
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  selected(answer){
    this.orderType = answer;

    this.storage.set('orderType', this.orderType);

    // Or to get a key/value pair
    this.storage.get('orderType').then((val) => {
      console.log('Order to ', val);
    });
  }

}
