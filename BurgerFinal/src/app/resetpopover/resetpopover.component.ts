import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-resetpopover',
  templateUrl: './resetpopover.component.html',
  styleUrls: ['./resetpopover.component.scss'],
})
export class ResetpopoverComponent implements OnInit {

  constructor(private storage: Storage,
    public popoverController: PopoverController) { }

  ngOnInit() {}

  clearStorage(){
    this.popoverController.dismiss();
    this.storage.clear();
  }
  clossPopover(){
    this.popoverController.dismiss();
  }
}
