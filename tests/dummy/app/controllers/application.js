import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  multiFiles: [],
  photoName: null,
  photoPreviewUrl: null,
  photoPreview: computed('photoPreviewUrl', function(){
    let url = this.get('photoPreviewUrl');

    return htmlSafe(`background-image: url("${url}")`);
  }),

  actions: {
    doSomething(files, reset) {
      reset();
    }
  }
});
