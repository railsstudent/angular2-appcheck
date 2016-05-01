import {Component, Input, OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FactoryAppListService} from './service/factory-app.service';
import {Factory} from '../factory/model/factory';

@Component({
  selector: 'factory-app-list',
  templateUrl: 'app/factory-app/template/factory-app.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [FactoryAppListService]
})
export class FactoryAppListComponent implements OnInit, OnChanges {

  @Input()
  selectedFactory : Factory;

  factoryAppListService : FactoryAppListService;
  selectedAppList : any;

  ngOnInit() {
     this.selectedFactory = new Factory("TBD", "No factory selected");
  }

  ngOnChanges(changes: {[propKey:string]: SimpleChange}){

    for (let propName in changes) {
      if (propName === 'selectedFactory')  {
        let changedProp = changes[propName];
        let from = JSON.stringify(changedProp.previousValue);
        let to =   JSON.stringify(changedProp.currentValue);
        console.log('from value of selectedFactory: ' + from);
        console.log('to value of selectedFactory: ' +  to);
        if (changedProp.currentValue) {
            this.displayAppList(changedProp.currentValue.code);
        }
      }
    }
  }

  //  factory app list
  constructor(_factoryAppListService: FactoryAppListService) {
    this.factoryAppListService = _factoryAppListService;
  }

  displayAppList(code: string) {
      this.selectedAppList = this.factoryAppListService.getAppListByFactory(code);
  }

  displayAppDetail(appId: number) {
    console.log("app id: " + appId);
  }
}
