(function($) { // Begin jQuery
  $(function() { // DOM ready
    // // If a link has a dropdown, add sub menu toggle.
    // $('nav ul li a:not(:only-child)').click(function(e) {
    //   $(this).siblings('.nav-dropdown').toggle();
    //   // Close one dropdown when selecting another
    //   $('.nav-dropdown').not($(this).siblings()).hide();
    //   e.stopPropagation();
    // });
    // // Clicking away from dropdown will remove the dropdown class
    // $('html').click(function() {
    //   $('.nav-dropdown').hide();
    // });
    // // Toggle open and close nav styles on click
    // $('#nav-toggle').click(function() {
    //   $('nav ul').slideToggle();
    // });
    // // Hamburger to X toggle
    // $('#nav-toggle').on('click', function() {
    //   this.classList.toggle('active');
    // });
    
    //TODO write something here
    var duration = 20; // duration in seconds
    var fadeAmount = 0.3; // fade duration amount relative to the time the image is visible

    $(document).ready(function (){
      var images = $("#slideshow img");
      var numImages = images.size();
      var durationMs = duration * 1000;
      var imageTime = durationMs / numImages; // time the image is visible 
      var fadeTime = imageTime * fadeAmount; // time for cross fading
      var visibleTime = imageTime  - (imageTime * fadeAmount * 2);// time the image is visible with opacity == 1
      var animDelay = visibleTime * (numImages - 1) + fadeTime * (numImages - 2); // animation delay/offset for a single image 
  
      images.each( function( index, element ){
        if(index != 0){
          $(element).css("opacity","0");
          setTimeout(function(){
            doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
          },visibleTime*index + fadeTime*(index-1));
        }else{
          setTimeout(function(){
            $(element).animate({opacity:0},fadeTime, function(){
              setTimeout(function(){
                doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
              },animDelay )
            });
          },visibleTime);
        }
      });
    });

    // creates a animation loop
    function doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime){
      fadeInOut(element,fadeInTime, visibleTime, fadeOutTime ,function(){
        setTimeout(function(){
          doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime);
        },pauseTime);
      });
    }

    // shorthand for in- and out-fading
    function fadeInOut( element, fadeIn, visible, fadeOut, onComplete){
      return $(element).animate( {opacity:1}, fadeIn ).delay( visible ).animate( {opacity:0}, fadeOut, onComplete);
    }
    
  }); // end DOM ready
})(jQuery); // end jQuery