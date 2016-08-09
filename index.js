/* jshint node: true */
'use strict';

module.exports = {
  name: 'emberx-file-input',
  included: function(app) {
    this._super.included(app);

    var appImport;
    if (this && typeof this.import === 'function') {
      appImport = this.import.bind(this);
    } else {
      appImport = app.import.bind(app);
    }

    appImport('vendor/style.css');
  }
};
