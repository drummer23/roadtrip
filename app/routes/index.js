import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return [
    {name: 'Grand Canyon', state: 'Arizona', image: '/assets/images/canyon.jpg'},
    {name: 'Hoover Dam', state: 'Nevada', image: '/assets/images/hoover.jpg'},
    {name: 'Yosemite Park', state: 'California', image: '/assets/images/yosemite.jpg'}
    ];
  }
});
