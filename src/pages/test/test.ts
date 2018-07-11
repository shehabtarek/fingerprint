import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { GitProvider } from '../../providers/git/git';
import { user } from '../../models/gitusers';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  accounts : Observable <any[]>;
  constructor( private git : GitProvider) {
  }

  GetUserInfo()
  {
    this.accounts =  this.git.GetUserInfo();
  }
  ionViewWillLoad() {
    this.GetUserInfo();
  }

}
