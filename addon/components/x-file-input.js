import Ember from 'ember';
import layout from '../templates/components/x-file-input';

export default Ember.Component.extend({
  classNameBindings: [':x-file-input'],
  tagName: 'span',
  layout: layout,
  tabindex: 0,

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
