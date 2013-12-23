/*jslint browser:true, sloppy:true, vars:true, indent:2 */
/* jslint devel:true, debug:true */
/*global Modernizr, jQuery, $ */







/* =============================================================================
    Doc Ready:
============================================================================= */
$(document).ready(function () {



  /**
      Skip2 links move focus to target:
  */
  $('a[href^="#"]').on('click', function () {
    $($(this).attr('href')).focus();
  });



  $(document).ExamplePlugin();



}); // end doc.ready
