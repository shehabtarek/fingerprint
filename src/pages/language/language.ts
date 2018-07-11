import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import {FingerprintAIO, FingerprintOptions} from "@ionic-native/fingerprint-aio"
import { FingerprintPage } from '../fingerprint/fingerprint';


@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {
  Fingerprintoptions : FingerprintOptions;
  //param = {value: 'Dayana'};
  lang : string;
  constructor(private fingerprint: FingerprintAIO ,private translate : TranslateService, private nav: NavController, private platform : Platform) {
    translate.setDefaultLang('en'); //use if nothing is translated
    this.Fingerprintoptions = {clientId:"fingerprint-demo", clientSecret: "password", disableBackup : true}
    
  }

  changeAr()
  {
    this.translate.use('ar'); //use when translate
  }

  changeEn()
  {
    this.translate.use('en'); //use when translate
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }
  GoToTest()
  {
    this.nav.push('TestPage');
  }
  GoToFinger()
  {
    this.nav.push("FingerprintPage");
  }
   
  async showFingerprintDialog()
  {
    try 
     {
       await this.platform.ready(); // if platform ready
        console.log("platform ready");
        const available = await this.fingerprint.isAvailable(); // if available
        alert("YES");
        console.log(available);
        if(available == "OK")
          {
            const result = await this.fingerprint.show(this.Fingerprintoptions);
            console.log(result);
          }

        else
        {
          alert("NO");
        }
    }
     catch(e)
     {
       console.error(e);  //else error
     }
  }
}
