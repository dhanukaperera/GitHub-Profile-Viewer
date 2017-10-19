import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../../models/user.interface';

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  constructor(public http: Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

}
