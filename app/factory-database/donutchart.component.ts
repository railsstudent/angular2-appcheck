import {Component, OnInit, Input } from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import * as _ from 'lodash';

import {CHART_DIRECTIVES} from 'ng2-charts';

import {DatabaseListService} from '../factory-system/service/database-list.service';
import {DatabaseService} from './service/database.service';
import {FactoryService} from '../factory/service/factory.service';

import {DatabaseInstance} from './model/database-instance';
import {DatabaseSchema} from './model/database-schema';

@Component({
  selector: 'pie-chart',
  templateUrl: 'app/factory-database/template/donut-chart.html',
  providers: [ DatabaseService, DatabaseListService, FactoryService ],
  directives: [CHART_DIRECTIVES]
})
export class DonutChartComponent implements OnInit {

  // Pie
  private pieChartLabels = []; // = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  private pieChartData = []; // = [300, 500, 100];
  private pieChartType = 'Doughnut';

  @Input()
  dbId : number;

  @Input()
  factory: string;

  ngOnInit() {
    if (this.dbId && this.factory) {
      if (this.dbId && !_.isEmpty(this.factory)) {
        let dbInstance: DatabaseInstance;
        let schemas: Array<DatabaseSchema>;

        dbInstance = this._databaseService.getDatbaseById(this.factory, this.dbId);
        schemas = dbInstance.schema;

        let dbStorage = dbInstance.storage;
        let used = 0;
        _.forEach(schemas, function(o) {
             used = used + o.memoryUsedInGB;
        });
        let unused = dbStorage - used;

        let ref = this;
        _.forEach(schemas, function(o) {
          ref.pieChartLabels.push(o.name);
          ref.pieChartData.push(o.memoryUsedInGB);
        });
        ref.pieChartLabels.push('Available');
        ref.pieChartData.push(unused);
      }
    }

  }

  constructor(private _databaseService: DatabaseService) {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
