/**
  Example.nl - engine.js
*/
"use strict";


/**
  Base:
*/

var Example = {

  settings: {},

  defaults: {},

  init: function () {

//    console.log('init');

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
  $("a[href^='#']").click(function(){
    $("#" + $(this).attr("href").slice(1)).focus();
  });


}); // end document.ready
