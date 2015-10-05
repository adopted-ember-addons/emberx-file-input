/* global FileReader */
import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    uploadAPhoto(fileList) {
      var controller = this.controllerFor('application');
      controller.set('photoName', fileList[0].name);

      let reader = new FileReader();

      reader.onloadend = function() {
        controller.set('photoPreviewUrl', reader.result);
      };

      reader.readAsDataURL(fileList[0]);
    }
  }
});
