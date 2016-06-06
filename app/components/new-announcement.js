import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save4() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        message: this.get('message') ? this.get('message') : ""
      };
      this.sendAction('save5', params);
      this.set('name', '');
      this.set('message', '');
    }
  }
});
