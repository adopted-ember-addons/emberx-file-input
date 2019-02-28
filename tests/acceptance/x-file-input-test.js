/* jshint expr:true */
import { run } from '@ember/runloop';

import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import sinon from 'sinon';

var App;

describe('Acceptance: XFileInput', function() {
  beforeEach(function() {
    App = startApp();
  });

  afterEach(function() {
    run(App, 'destroy');
  });

  beforeEach(function() {
    return visit('/');
  });

  beforeEach(function() {
    this.component = getComponentById('spec-file-input');
  });

  it('renders', function() {
    expect(this.component).not.to.be.undefined;
  });

  it('has a custom class', function() {
    expect(this.component.$()).to.have.class('x-file-input');
  });

  it('has custom input class', function() {
    expect(this.component.$('input[type=file]')).to.have.class('custom-input-class');
  });

  it('has custom label class', function() {
    expect(this.component.$('label')).to.have.class('custom-label-class');
  });

  it('has 0 tab index', function() {
    expect(this.component.$('input[type=file]')).to.have.attr('tabindex', '0');
  });

  it('has contains its yielded content', function() {
    expect(this.component.$('.spec-file-input__content :contains("Shall you upload?")')).not.to.be.empty;
  });

  describe('With no block passed', function() {
    beforeEach(function() {
      this.blocklessComponent = getComponentById('spec-file-input-blockless');
    });

    it('should provide default alt text', function() {
      expect(this.blocklessComponent.$().text().trim()).to.equal('Upload');
    });

  });


  describe('Bound Attributes', function() {
    beforeEach(function(){
      this.component.setProperties({
        disabled: true,
        multiple: true,
        name: "taco-cat",
        accept: "image/jpg"
      });
    });

    it('binds disabled attribute on the native file input', function() {
      expect(this.component.$('input[type=file]')).not.to.be.enabled;
    });

    it('binds the disabled css class on the whole component', function() {
      expect(this.component.$()).to.have.class('x-file-input--disabled');
    });

    it('binds the multiple attribute on the native file input', function() {
      expect(this.component.$('input[type=file]')).to.have.attr('multiple');
    });

    it('binds the tabindex attribut on the native file input', function() {
      expect(this.component.$('input[type=file]')).to.have.attr('name', 'taco-cat');
    });

    it("binds the accept attribute on the native file input", function() {
      expect(this.component.$('input[type=file]')).to.have.attr('accept', 'image/jpg');
    });
  });

  describe("Resetting the input", function() {

    /*
     * Since testing file inputs is basically impossible due to
     * security reasons, this test just asserts that when you trigger
     * the "change" event on the input it invokes the action & sends
     * the reset function with it. In that action we invoke the
     * `reset` method. Then we spy on that method and assert that it was
     * called. That's about all we can do to test this.
     *
     */
    beforeEach(function() {
      let _this = this;
      this.resetComponent = getComponentById('spec-file-input-reset');
      // Spy on the resetInput method
      this.resetContext = null;
      // Warning, using a fat arrow function will not work. It will set
      // `this.resetContext` to the mocha test runner contect every time.
      this.resetComponent.resetInput = sinon.spy(function() {
        _this.resetContext = this;
      });

      this.resetComponent.$('.x-file--input').trigger('change');
    });

    it("calls the reset method", function() {
      expect(this.resetComponent.resetInput).to.have.been.called;
    });

    it("has the correct context sent", function() {
      expect(this.resetContext).to.deep.equal(this.resetComponent);
    });
  });
});

function getComponentById(id) {
  var registry = App.__container__.lookup('-view-registry:main');
  if (registry) {
    return registry[id];
  } else {
    return Ember.View.views[id];
  }
}
