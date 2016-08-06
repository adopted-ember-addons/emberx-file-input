/* jshint node: true */
'use strict';

module.exports = {
  name: 'emberx-file-input',
  included: function(app) {
    this._super.included(app);

    app.import('vendor/style.css');
  }
};
