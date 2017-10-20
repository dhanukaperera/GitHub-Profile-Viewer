import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
/* rxjx allow us to use observable within our application.
  obeserbales allow us to subscribe into data streams and 
  simller to promises, but which promise onle fire onces,
  but observable allow us to subscribe to stram until how
  many values we pass through until we unsubscribe it.
*/
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of' // allow us to do create a observables of values


import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  constructor() {
    console.log('Hello GitHubServiceProvider Provider');
  }

  /*
  Finding the username from within USER_LIST, equlal to the Username passed in.
  Returning the results as observables. 
  */
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name == username)[0])
  }

}
