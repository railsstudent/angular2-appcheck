import {Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
import {MATERIAL_DIRECTIVES} from "ng2-material";

import {HardwareListService} from './service/hardware-list.service';
import {Hardware} from '../factory-hardware/model/hardware';

@Component({
    selector: 'hardware-list',
    templateUrl: 'app/factory-system/template/hardware-list.html',
    directives: [MATERIAL_DIRECTIVES]
})
export class HardwareListComponent implements OnInit {

  hardwareList: Array<Hardware> = new Array<Hardware>();
  factoryCode: string;
  condition: string[];
  pagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 0
  };
  availableLength = [5, 10];
  pagedHardwareList: Array<any> = [];

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
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: this.hardwareList.length
    }
    console.log(this.pagination);
    this.refreshHardwardList();
  }

  constructor(private _hardwareListService: HardwareListService,
    private _routeParams: RouteParams) {
  }

  refreshHardwardList() {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      end = start + this.pagination.itemsPerPage;
    this.pagedHardwareList = this.hardwareList.slice(start, end);
  }

  detectChange(event) {
    console.log('pagination detection');
    this.pagination = event.pagination;
    this.refreshHardwardList();
    console.log(this.pagination);
  }
}
