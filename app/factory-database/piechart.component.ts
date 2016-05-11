import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

import {CHART_DIRECTIVES} from 'ng2-charts';

@Component({
  selector: 'pie-chart',
  template: '<h1>Pie Chart</h1>',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PieChartComponent {

  constructor() {
    console.log('pie demo');
  }

  // Pie
  private pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  private pieChartData = [300, 500, 100];
  private pieChartType = 'Pie';
}
