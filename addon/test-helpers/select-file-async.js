import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('selectFile', function(app, selector, file) {
  return triggerEvent(
    selector,
    'change',
    { testingFiles: [file] }
  );
});
