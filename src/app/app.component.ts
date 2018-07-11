import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp 
{
  textDir: string = "ltr"; // default is english ltr
  rootPage:string = "LanguagePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService) 
  {
    platform.ready().then(() => 
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        this.textDir = event.lang == 'ar'? 'rtl' : 'ltr';
              if(event.lang == 'ar')
                {
                  platform.setDir('rtl', true);
                  platform.setDir('ltr', false);
                }
                else
                {
                  platform.setDir('ltr', true);
                  platform.setDir('rtl', false);
                }
  });
}
}