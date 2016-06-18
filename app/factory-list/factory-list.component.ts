import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {FactoryService} from './service/factory.service';
import {Factory} from './model/factory';

// http://stackoverflow.com/questions/35685801/angular-2-event-catching-between-sibling-components
@Component({
  selector: 'factory-list',
  templateUrl: 'app/factory-list/template/factory-list.html'
})
export class FactoryListComponent implements OnInit {

  factories: Array<Factory>;

  ngOnInit() {
      this.factories = this._factoryService.getFactories();
  }

  //  factory
  constructor(private _router: Router, private _factoryService: FactoryService) {
  }

  onSelectFactory(factory: Factory) {
     console.log('Selected factory code: ' + factory.code + ', factory name: ' + factory.name);
     this._router.navigate(['FactorySummary',  { code: factory.code } ]);
  }
}
