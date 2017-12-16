/* global FileReader, alert */
import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    uploadAPhoto(fileList) {
      let re = new RegExp('image/*');

      if(re.test(fileList[0].type)) {
        let controller = this.controllerFor('application');
        controller.set('photoName', fileList[0].name);

        let reader = new FileReader();

        reader.onloadend = function() {
          controller.set('photoPreviewUrl', reader.result);
        };

        reader.readAsDataURL(fileList[0]);
      } else {
        alert(`File must be an image. You tried to upload: ${fileList[0].type}`);
      }
    },

    uploadManyFiles(fileList) {
      let controller = this.controllerFor('application');

      controller.set('multiFiles', fileList);
    }
  }
});
