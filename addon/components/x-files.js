import Ember from 'ember';
import layout from '../templates/components/x-files';

export default Ember.Component.extend({
  classNameBindings: [':x-file'],
  tagName: 'span',
  layout: layout,

  /**
   * Listens for change events on the native file input and dispatches
   * the corresponding action up the context chain.
   *
   * @private
   * @method
   * @param {$.Event} e Native change event
   */
  change: function(e) {
    this.sendAction("action", e.target.files);
  }
});
