import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-Order',
  templateUrl: 'Order.page.html',
  styleUrls: ['Order.page.scss']
})
export class OrderPage {
  quantityB: any;
  quantityC: any;
  quantityD: any;
  quantityF: any;
  quantityP: any;
  constructor(private storage: Storage,
    public toastController: ToastController) {}

   async openToast() {
      const toast = await this.toastController.create({
        message: 'Your order have been saved.',
        animated: true,
        duration: 1000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
      toast.onDidDismiss().then((val) => {
        console.log('toast dismissed');
      });
    }

    async openToastError() {
      const toast = await this.toastController.create({
        message: 'Please select order quantity.',
        animated: true,
        duration: 1000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
      toast.onDidDismiss().then((val) => {
        console.log('toast dismissed');
      });
    }

  onChangeB(selectQuantity: any){
    console.log(selectQuantity);
    this.quantityB = selectQuantity;
  }
  onChangeC(selectQuantity: any){
    console.log(selectQuantity);
    this.quantityC = selectQuantity;
  }
  onChangeD(selectQuantity: any){
    console.log(selectQuantity);
    this.quantityD = selectQuantity;
  }
  onChangeF(selectQuantity: any){
    console.log(selectQuantity);
    this.quantityF = selectQuantity;
  }
  onChangeP(selectQuantity: any){
    console.log(selectQuantity);
    this.quantityP = selectQuantity;
  }

  orderMenuB(){
    if(this.quantityB != null){
      this.storage.set('Name1', "Final Burger");
      this.storage.set('Price1',  4.99);
      this.storage.set('Qty1',  this.quantityB);
      this.openToast();
    }else{
      this.openToastError();
    }
  }

  orderMenuC(){
    if(this.quantityC != null){
      this.storage.set('Name2', "Final Cheese Burger");
      this.storage.set('Price2',  5.49);
      this.storage.set('Qty2',  this.quantityC);
      this.openToast();
    }else{
      this.openToastError();
    }
  }

  orderMenuD(){
    if(this.quantityD != null){
      this.storage.set('Name3', "Final Double Burger");
      this.storage.set('Price3',  6.99);
      this.storage.set('Qty3',  this.quantityD);
      this.openToast();
    }else{
      this.openToastError();
    }
  }

  orderMenuF(){
    if(this.quantityF != null){
      this.storage.set('Name4', "Final Fries");
      this.storage.set('Price4',  1.99);
      this.storage.set('Qty4',  this.quantityF);
      this.openToast();
    }else{
      this.openToastError();
    }
  }

  orderMenuP(){
    if(this.quantityP != null){
      this.storage.set('Name5', "Beverages");
      this.storage.set('Price5',  0.99);
      this.storage.set('Qty5',  this.quantityP);
      this.openToast();
    }else{
      this.openToastError();
    }
  }

}
