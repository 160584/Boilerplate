/**
  Example.nl - engine.js
*/
/*jslint browser:true, sloppy:true, vars:true, indent:2 */
/*global jQuery, $ */
/*#jslint devel:true, debug:true */

/**
  Base:
*/
var Example = {

  settings: {},

  defaults: {},

  init: function () {

//    console.log('init')

  },

  doSomething: function (event) {

  }

};


/**
  Document Ready:
*/
$(document).ready(function () {



/**
  Skip2 links move focus to target:
*/
  $('a[href^="#"]').on('click', function () {
    $($(this).attr('href')).focus();
  });


}); // end document.ready
