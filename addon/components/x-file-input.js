import Ember from 'ember';
import layout from '../templates/components/x-file-input';

export default Ember.Component.extend({
  classNameBindings: [':x-file-input', 'disabled:x-file-input--disabled'],
  attributeBindings: ['accept'],
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
  change(e) {
    /**
     * Allows user to use a closure action that returns a promise.
     * This way, we don't reset the input until after the work
     * in the initial action is complete.
     */
    let action = this.get('action');
    if (typeof action === 'string' || action instanceof String) {
      this.sendAction('action', e.target.files);
    } else {
      let promise = action(e.target.files);
      if (promise && typeof promise.then === 'function') {
        promise.then(() => {
          if (this.get('resetInput')) {
            this.$('.x-file--input').val('');
          }
        });
      }
    }
  },

  randomId: Ember.computed(function() {
    return Math.random().toString(36).substring(7);
  })
});
