import { registerAsyncHelper } from '@ember/test';

export default registerAsyncHelper('selectFile', function(app, selector, file) {
  return triggerEvent(
    selector,
    'change',
    { testingFiles: [file] }
  );
});
