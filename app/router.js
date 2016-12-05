import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app');
  this.route('liked', function() {
    this.route('code', { path: ':family' });
  });
});

export default Router;
