import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {ROUTER_PROVIDERS} from 'angular2/router';


bootstrap(AppComponent, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS]);
