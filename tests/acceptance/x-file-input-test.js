/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: XFileInput', function() {
  beforeEach(function() {
    App = startApp();
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  beforeEach(function() {
    visit('/');
    var self = this;
    return andThen(function(){
      self.component = getComponentById('spec-file-input');
    });
  });

  it('renders', function() {
    expect(this.component).not.to.be.undefined;
  });

  it('has a custom class', function() {
    expect(this.component.$()).to.have.class('x-file-input');
  });

  it('has 0 tab index', function() {
    expect(this.component.$('input[type=file]')).to.have.attr('tabindex', '0');
  });

  describe('Bound Attributes', function(){
    beforeEach(function(){
      this.component.setProperties({
        disabled: true,
        multiple: true,
        name: "taco-cat"
      });
    });

    it('binds disabled attribute on the native file input');
    it('binds the disabled css class on the whole component');
    it('binds the multiple attribute on the native file input');
    it('binds the tabindex attribut on the native file input');
  });
});

function getComponentById(id) {
  var registry = App.__container__.lookup('-view-registry:main');
  if (registry) {
    return registry[id];
  } else {
    console.log(Ember.View.views);
    return Ember.View.views[id];
  }
}