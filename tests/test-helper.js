import Ember from 'ember';
import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import { beforeEach as basicBeforeEach, afterEach as basicAfterEach} from 'mocha';

setResolver(resolver);

export function beforeEach(fn){
  basicBeforeEach(function(){
    var test = this;
    Ember.run(function() {
      fn.call(test);
    });
  });
}

export function afterEach(fn){
  basicAfterEach(function(){
    var test = this;
    Ember.run(function() {
      fn.call(test);
    });
  });
}
