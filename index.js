/* jshint node: true */
'use strict';

module.exports = {
  name: 'emberx-file-input',
  included: function(app) {
    this._super.included(app);

    this.import('vendor/style.css');
  }
};
