import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'database',
    directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES ],
    providers: [SidenavService],
    templateUrl: 'app/factory-database/template/database.html'
})
export class DatabaseComponent {

}
