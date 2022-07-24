// Can also be used with $(document).ready()
$(window).on('load' ,function() {

  $('.flexslider').flexslider({

    animation: "slide"

  });

});

$(document).ready(function(){

  var height = $(window).height();

  $('#totalS').height(height);
});


