import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main');
  this.route('lists', {path: '/lists/:post_id'});
});

export default Router;
