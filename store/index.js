'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var FluxGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the Flux Store subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.template('store.js', 'src/js/stores/'+ this.name +'.js');
    this.template('test.js', 'src/js/stores/__tests__/'+ this.name +'-test.js');
  }
});

module.exports = FluxGenerator;
