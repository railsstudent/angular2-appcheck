import {Component, OnInit } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Router, RouteParams} from 'angular2/router';
import * as _ from 'lodash';

import {DatabaseListService} from './service/database.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'app/factory-database/template/database-list.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [DatabaseListService]
})
export class DatabaseListComponent  {


}
