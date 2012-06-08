(function($) {
  "use strict";

  // TODO: set suitable name:
  var pluginName = "ExamplePlugin";

  $[pluginName] = function(element, options) {

    // defaults
    var defaultOptions = {
      option: null,
      test: null
    };

    // (internal) settings
    var settings = {
      onFoo: function() { } // a callback
    };

    // scoping helper inside events eg
    var plugin = this;

    // global element reference
    var $element = $(element);

    //constructor
    var init = function() {

      settings = $.extend({}, settings, defaultOptions, options);

      // code goes here

    };

    // Public method:
    plugin.doSomething = function() {

    };

    // Een private method:
    var doPrivate = function() {

    };

    // initialize
    init();

  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if($(this).data(pluginName) === "undefined") {
        var plugin = new $[pluginName](this, options);
        $(this).data(pluginName, plugin);
      }
    });
  };

})(jQuery);
