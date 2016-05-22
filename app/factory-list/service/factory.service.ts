import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {Factory} from '../model/factory';

@Injectable()
export class FactoryService {

    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    factories: Array<Factory>;
    chance : any;

    constructor() {
       console.log('Factory Service constructor');
       this.chance = new Chance();
       this.factories = [];
       let numFty = this.chance.integer({min: 5, max: 15});
       for (let i = 0; i < numFty; i++) {
         this.factories.push(new Factory(
               this.chance.string({length: 3, pool: this.alphabet }),
               this.chance.sentence({words: 3}),
               this.chance.country()));
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
