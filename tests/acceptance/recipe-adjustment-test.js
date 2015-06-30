import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'recipe-app/tests/helpers/start-app';

var application;

module('Acceptance | recipe adjustment', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /recipe-adjustment', function(assert) {
  visit('/recipe-adjustment');

  andThen(function() {
    assert.equal(currentURL(), '/recipe-adjustment');
  });
});
