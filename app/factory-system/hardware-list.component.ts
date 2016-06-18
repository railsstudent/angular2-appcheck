import {Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';

import {HardwareListService} from './service/hardware-list.service';
import {Hardware} from '../factory-hardware/model/hardware';

@Component({
    selector: 'hardware-list',
    templateUrl: 'app/factory-system/template/hardware-list.html'
})
export class HardwareListComponent implements OnInit {

  hardwareList: Array<Hardware> = new Array<Hardware>();
  factoryCode: string;
  condition: string[];

  ngOnInit() {
    console.log("ngOnInit of hardware list component fired.");
    this.factoryCode = this._routeParams.get('code');
    if (this.factoryCode) {
       this.hardwareList = this._hardwareListService.getHardwareByFactory(
                                        this.factoryCode);
    } else {
       this.hardwareList = [];
    }
    this.condition = this._hardwareListService.getCondition();
  }

  constructor(private _hardwareListService: HardwareListService,
    private _routeParams: RouteParams) {
  }

  @Input()
  set refresh(refresh: boolean) {
      console.log('HardwareListComponent: refresh = ' + refresh);
      console.log('HardwareListComponent: factory code = ' + this.factoryCode);
      // reload data
      if (refresh) {
        this.hardwareList = this._hardwareListService.getHardwareByFactory(this.factoryCode);
      }
  }
}
