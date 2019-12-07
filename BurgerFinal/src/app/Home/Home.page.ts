import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-Home',
  templateUrl: 'Home.page.html',
  styleUrls: ['Home.page.scss']
})
export class HomePage {

  constructor(private fcm: FCM, public plt: Platform) {
    this.plt.ready()
    .then(() => {
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });
    });
  }
}
