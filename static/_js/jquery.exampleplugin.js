/*jslint browser:true, sloppy:true, vars:true, indent:2 */
/*global jQuery, $ */
/* jslint devel:true, debug:true */
(function ($) {
  "use strict";

  // TODO: set suitable name:
  var pluginName = 'ExamplePlugin';

  $[pluginName] = function (element, options) {

    var plugin = this;
    var $element = $(element);

    // defaults
    var defaultOptions = {
      option: null,
      done: true
    };

    // (internal) settings
    var settings = {
      active: 'ok',
      onFoo: function () { } // a callback
    };

    /**
        Public method:
    */
    plugin.doSomething = function () {

    }; // end doSomething()

    /**
       Private method:
    */
    var doPrivate = function () {

    }; // end doPrivate()




    //constructor
    var init = function () {

      settings = $.extend({}, settings, defaultOptions, options);


      // code goes here
      console.log($element);


      // make chainable:
      return $element;

    }; // end init()

    // initialize
    init();

  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (typeof $(this).data(pluginName) === 'undefined') {
        var plugin = new $[pluginName](this, options);
        $(this).data(pluginName, plugin);
      }
    });
  };

}(jQuery));
