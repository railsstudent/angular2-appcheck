import {Component, Input, OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {AppDetailService} from './service/app-detail.service';
import {Factory} from '../factory/model/factory';

@Component({
  selector: 'app-detail',
  templateUrl: 'app/factory-app-detail/template/app-detail.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [AppDetailService]
})
export class AppDetailComponent  {

  // @Input()
  // selectedFactory : Factory;

  //  factory app list
  constructor(_appDetailService: AppDetailService) {
//    this.factoryAppListService = _factoryAppListService;
  }
}
