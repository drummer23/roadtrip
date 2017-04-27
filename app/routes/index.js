import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return [
    {name: 'Grand Canyon', state: 'Arizona'},
    {name: 'Hoover Dam', state: 'Nevada'},
    {name: 'Yosemite Park', state: 'California'}
    ];
  }
});
