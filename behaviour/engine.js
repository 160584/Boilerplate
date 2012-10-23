/**
  Example.nl - engine.js
*/
/*jshint asi:true */
/*global jQuery:true */

/**
  Base:
*/
var Example = {

  settings: {},

  defaults: {},

  init: function(){

//    console.log('init')

  },

  doSomething: function(event){

  }

}


/**
  Document Ready:
*/
$(document).ready(function(){



/**
  Skip2 links move focus to target:
*/
  $('a[href^="#"]').on('click', function(){
    $( $(this).attr('href') ).focus()
  })


}) // end document.ready
