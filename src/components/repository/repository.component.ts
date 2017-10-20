import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository.interface';

/**
 * Generated class for the RepositoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'repository',
  templateUrl: 'repository.component.html'
})
export class RepositoryComponent {

  @Input() repository: Repository;


}
