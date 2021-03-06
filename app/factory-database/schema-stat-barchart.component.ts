import {Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import * as _ from 'lodash';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {DatabaseService} from './service/database.service';
import {DatabaseInstance} from './model/database-instance';
import {DatabaseSchema} from './model/database-schema';

@Component({
  selector: 'schema-stat-chart',
  templateUrl: 'app/factory-database/template/schema-stat-chart.html',
  providers: [ DatabaseService ],
  directives: [CHART_DIRECTIVES,CORE_DIRECTIVES,FORM_DIRECTIVES, NgClass]
})
export class SchemaStatChartComponent implements OnInit {

    // Bar
    private barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
    };

    private barChartLabels = [];
    private barChartSeries = ['# Tables', '# Stored Procedures', '# Functions', '# Indexes'];
    // tables, stored procedure, functions, indexes
    private barChartData : any[] = [];
    public barChartType = 'bar';
    private barChartLegend : boolean = true;

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

        let ref = this;
        let numTables = [];
        let numSP = [];
        let numFunc = [];
        let numIndexes = [];

        _.forEach(schemas, function(schema) {
              ref.barChartLabels.push(schema.name);
              numTables.push(schema.numTables);
              numSP.push(schema.numStoredProcedures);
              numFunc.push(schema.numFunctions);
              numIndexes.push(schema.numIndexes);
         });
         ref.barChartData = [{ data: numTables, label: '# Tables' },
                             { data: numSP, label: '# Stored Procedures' },
                             { data: numFunc, label: '# Functions' },
                             { data: numIndexes, label: '# Indexes' }
                            ];
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
