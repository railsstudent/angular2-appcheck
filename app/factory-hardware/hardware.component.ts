import {Component, OnInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import {Hardware} from './model/hardware';

@Component({
    selector: 'hardware',
    directives: [MATERIAL_DIRECTIVES],
    templateUrl: 'app/factory-hardware/template/hardware.html'
})
export class HardwareComponent implements OnInit {

  hardware: Hardware;

  ngOnInit() {
    
  }

  constructor(private _router: Router,
    private _routeParams: RouteParams) {
  }

  onReturn(hardware: Hardware) {

  }



}
