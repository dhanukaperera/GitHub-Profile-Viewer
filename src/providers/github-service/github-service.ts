import { Http,Response} from '@angular/http';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
/* rxjx allow us to use observable within our application.
  obeserbales allow us to subscribe into data streams and 
  simller to promises, but which promise onle fire onces,
  but observable allow us to subscribe to stram until how
  many values we pass through until we unsubscribe it.
*/
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of' // allow us to do create a observables of values


import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

import { Repository } from '../../models/repository.interface'; 
import { REPOISITORY_LIST } from '../../mocks/repository.mocks';
/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";

  constructor(private http:Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

  /*
  Finding the username from within USER_LIST, equlal to the Username passed in.
  Returning the results as observables. 
  */
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name == username)[0])
  }

  /*
  Finding the repositories from whithin REPOSITORY_LIST, equal to the usernmae pased in.
  Returning the results as an Observable.
   */
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOISITORY_LIST.filter(repository => repository.owner.name === username))
  }

  getUserInformation(username : string) : Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .do((data:Response) => console.log(data))
    .map((data:Response)=>data.json())
    .do((data:Response) => console.log(data))
    .catch((error:Response)=>Observable.throw(error.json().error || "Server error."))
  }
}
