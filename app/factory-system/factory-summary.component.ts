import {Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {AppListComponent} from './app-list.component';
import {DatabaseListComponent} from './database-list.component';
import {HardwareListComponent} from './hardware-list.component';
import {VirtualMachineListComponent} from './virtual-machine-list.component';
import {RouteParams} from '@angular/router-deprecated';
import {Factory} from '../factory-list/model/factory';
import {FactoryService} from '../factory-list/service/factory.service';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';

@Component({
  selector: 'factory-summary',
  templateUrl: 'app/factory-system/template/factory-summary.html' ,
  directives: [AppListComponent, DatabaseListComponent, HardwareListComponent,
      VirtualMachineListComponent, MdRadioButton, MdRadioGroup],
  providers: [MdRadioDispatcher],
  styles: [`
    md-radio-button {
      margin: 24px;
    }
      `
  ]
})
export class FactorySummaryComponent implements OnInit {

  selectedFactory : Factory;
  data: any = {
     viewModeList: ['Application', 'Database', 'Hardware', 'Virtual Machine'],
     viewMode: 'Application'
  };

  visible : any = {
     application: false,
     database: false,
     hardware: false,
     vm: false
  };

  ngOnInit() {
    this.onChange(this.data.viewMode);
    let code = this._routeParams.get('code');
    this.selectedFactory = code ?
        this._factoryService.getFactory(code) :
        new Factory('TBD', 'N/A', 'N/A');
  }

  //  factory summary
  constructor(private _routeParams: RouteParams,
      private _factoryService: FactoryService) {
  }

  onChange(viewMode :string) {
      console.log("selected viewMode: " + viewMode);
      this.visible.application = _.isEqual(viewMode, 'Application');
      this.visible.database = _.isEqual(viewMode, 'Database');
      this.visible.hardware = _.isEqual(viewMode, 'Hardware');
      this.visible.vm = _.isEqual(viewMode, 'Virtual Machine');
  }
}
