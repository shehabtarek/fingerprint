import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';



@IonicPage()
@Component({
  selector: 'page-fingerprint',
  templateUrl: 'fingerprint.html',
})
export class FingerprintPage {s

  constructor(private androidFingerprintAuth: AndroidFingerprintAuth, private platform: Platform) {}
  kamel()
  {
    if (this.platform.is('cordova'))
    {this.androidFingerprintAuth.isAvailable()

  .then((result)=> {
    alert("YAS")
    if(result.isAvailable){
      // it is available
      alert("YAS")

      this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
        .then(result => {
           if (result.withFingerprint) {
               console.log('Successfully encrypted credentials.');
               console.log('Encrypted credentials: ' + result.token);
           } else if (result.withBackup) {
             console.log('Successfully authenticated with backup password!');
           } else console.log('Didn\'t authenticate!');
        })
        .catch(error => {
           if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
             console.log('Fingerprint authentication cancelled');
           } else console.error(error)
        });

    } else {
      // fingerprint auth isn't available
      alert("no");
    }
  })}
  else
  {
    alert("on browser");
  }
  //.catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintPage');
  }

}
