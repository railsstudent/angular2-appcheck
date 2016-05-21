import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {Factory} from '../model/factory';

@Injectable()
export class FactoryService {

    factories: Array<Factory>;

    constructor() {
      this.factories = [
        new Factory('TAA', 'TAA Factory', 'China'),
        new Factory('PAP', 'PAP Factory', 'Malaysia'),
        new Factory('IG', 'IG Factory',  'Malaysia'),
        new Factory('TG1/3', 'Thai Garment 1/3',  'Thailand'),
        new Factory('TG2/4', 'Thai Garment 2/4', 'Thailand'),
        new Factory('MCL', 'MCL Factory',  'Thailand'),
        new Factory('TAV/TV2', 'TAV/TV2 Factory',  'Vietnam'),
        new Factory('VNG', 'VNG Factory', 'Vietnam'),
        new Factory('KAT', 'KAT Factory', 'Indonesia')
      ];

      this.factories = _.orderBy(this.factories, ['name'], ['asc']);
      console.log('testing');
    }

    getFactories() {
        return this.factories;
    }

    getFactory(code) {
        var factory = _.find(this.factories, function(f) {
                          return f.code === code;
                      });
        return factory;
    }
}
