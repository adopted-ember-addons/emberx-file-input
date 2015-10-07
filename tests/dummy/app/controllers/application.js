import Ember from 'ember';

export default Ember.Controller.extend({
  photoName: null,
  photoPreviewUrl: null,
  photoPreview: Ember.computed('photoPreviewUrl', function(){
    let url = this.get('photoPreviewUrl');
    return Ember.String.htmlSafe('background-image: url("'+ url + '")');
  })
});
