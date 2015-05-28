/* jshint node: true */
'use strict';

module.exports = {
  name: 'x-files',
  included: function(app) {
    this._super.included(app);

    app.import('vendor/style.css');
  }
};
