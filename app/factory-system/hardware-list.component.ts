import {Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
import {MATERIAL_DIRECTIVES} from "ng2-material";
import * as _ from 'lodash';

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
    itemsPerPage: 15,
    totalItems: 0
  };
  availableLength = [5, 10, 15];
  pagedHardwareList: Array<any> = [];
  selectedCondition: string;
  filteredList: Array<any> = [];

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
    this.selectedCondition = this.condition[0];
    this.onFilterCondition(this.selectedCondition);
    this.refreshHardwardList();
    console.log(this.pagination);
  }

  constructor(private _hardwareListService: HardwareListService,
    private _routeParams: RouteParams) {
  }

  refreshHardwardList() {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
        end = start + this.pagination.itemsPerPage;
    this.pagedHardwareList = this.filteredList.slice(start, end);
  }

  detectChange(event) {
    console.log('pagination detection');
    this.pagination = event.pagination;
    this.refreshHardwardList();
    console.log(this.pagination);
  }

  onFilterCondition(condition: string) {
      this.selectedCondition = condition;
      console.log("Hardware filter condition: " + this.selectedCondition);
      let ref = this;
      ref.filteredList.length = 0;
      _.forEach(this.hardwareList, hw => {
        if (_.isEqual(this.selectedCondition, 'All') ||
                  _.isEqual(hw.condition, this.selectedCondition)) {
            ref.filteredList.push(hw);
        }
      });
      this.pagination.currentPage = 1;
      this.pagination.totalItems = ref.filteredList.length;
      this.refreshHardwardList();
  }
}
