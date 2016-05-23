import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {Factory} from '../model/factory';

@Injectable()
export class FactoryService {

    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    factories: Array<Factory>;

    constructor() {
       console.log('Factory Service constructor');
       let chance = new Chance();
       this.factories = [];
       let numFty = chance.integer({min: 5, max: 15});
       for (let i = 0; i < numFty; i++) {
         this.factories.push(new Factory(
               chance.string({length: 3, pool: this.alphabet }),
               chance.sentence({words: 3}),
               chance.country({full: true})));
       }
       this.factories = _.orderBy(this.factories, ['name'], ['asc']);
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
