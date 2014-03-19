/*jslint browser:true, sloppy:true, vars:true, indent:2 */
/* jslint devel:true, debug:true */
/*global Modernizr, jQuery, $ */




/*
    Skip2 links and internal-links move focus to target:
    Fix the behaviour of (mainly) Webkit-bowsers, to be more accessible.
*/
$(window).on('hashchange', function (event) {
  var element = document.getElementById(location.hash.substring(1));
  if (element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.tabIndex = -1;
    }
    element.focus();
  }
});


/*
    Enable focus/active styles on iOS
*/
$(document).on('touchstart', function () {});






/* =============================================================================
    Doc Ready:
============================================================================= */
$(document).ready(function () {


//  $(document).ExamplePlugin();



}); // end doc.ready
