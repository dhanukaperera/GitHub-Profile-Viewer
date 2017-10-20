import {NgModule} from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations:[SearchResultComponent],
    imports: [IonicModule],
    exports: [SearchResultComponent]
})

export class ComponentsModule {
    
}