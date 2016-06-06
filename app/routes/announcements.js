import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },

  actions: {
    save6(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcements');
      
    },
    delete(announcement) {
      if (confirm('are you sure you want to delete this announcement?')) {
        announcement.destroyRecord();
        this.transitionTo('announcements');
      }
    }
  }
});
