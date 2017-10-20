import {NgModule} from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { IonicModule } from 'ionic-angular';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
    declarations:[SearchResultComponent,
    RepositoryComponent],
    imports: [IonicModule],
    exports: [SearchResultComponent,
    RepositoryComponent]
})

export class ComponentsModule {
    
}