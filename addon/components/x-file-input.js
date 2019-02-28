import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/x-file-input';

export default Component.extend({
  classNameBindings: [':x-file-input', 'disabled:x-file-input--disabled'],
  attributeBindings: ['accept'],
  tagName: 'span',
  layout: layout,
  tabindex: 0,

  /**
   * The class given to the label.
   *
   * @property labelClassName
   * @default null
   */
  labelClassName: null,

  /**
   * The text displayed when no block is passed.
   *
   * @property alt
   * @default "Upload"
   */
  alt: "Upload",

  /**
   * Listens for change events on the native file input and dispatches
   * the corresponding action up the context chain.
   *
   * @private
   * @method
   * @param {$.Event} e Native change event
   */
  change(e) {
    this.sendAction("action", this.files(e), this.resetInput.bind(this));
  },

  /**
   * Resets the value of the input so you can select the same file
   * multiple times.
   *
   * @method
   */
  resetInput() {
    this.$('.x-file--input').val('');
  },

  /**
   * Generates a random ID to relate the label to the input.
   *
   * @method
   * @private
   */
  randomId: computed(function() {
    return Math.random().toString(36).substring(7);
  }),

  /**
   * Allow additiobnal classnames to be passed to the input.
   *
   * @computedProperty
   * @private
   */
  inputClassNames: computed('inputClassName', function() {
    const inputClassName = this.get('inputClassName');
    return inputClassName ? `x-file--input ${this.get('inputClassName')}` : 'x-file--input';
  }),

  /**
   * Gets files from event object.
   *
   * @method
   * @private
   * @param {$.Event || Event}
   */
  files(e) {
    if (e.target.files) {
      return e.target.files;
    } else if (e.testingFiles) {
      return e.testingFiles;
    } else {
      // testingFiles will not exist on e
      // when it is a JQuery.Event
      return e.originalEvent.testingFiles;
    }
  }
});
