(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
    
    // var currentSlide = 0;
    // var bannerPic = [
    //   "img/mine-banner.png",
    //   "img/ruby-banner.png",
    //   "img/war-banner.png",
    //   "img/moissanite-banner.png",
    //   "img/child-banner.png",
    //   "img/travel-banner.png",
    //   "img/diamond-banner.png",
    //   "img/sapphire-banner.png"
    // ];
    // $(".autocomplete-reason").typed({
    //   strings: [
    //     "天然寶石的開採造成極大破壞",
    //     "通街都係鑽石，紅寶石特別 D",
    //     "我唔想人類為爭奪鑽石礦而打仗",
    //     "莫桑石仲閃過鑽石",
    //     "我唔支持童工",
    //     "我寧願留番 D 錢去旅行",
    //     "鑽石唔值咁貴，只係一個騙局",
    //     "王妃都戴藍寶石戒指"],
    //   typeSpeed: 50,
    //   showCursor: true,
    //   loop: true,
    //   cursorChar: "|",
    //   backDelay:3000,
    //   preStringTyped: function() {
    //     $("#banner").css("background-image","url("+bannerPic[currentSlide]+")");
    //     currentSlide++;
    //     if (currentSlide == bannerPic.length){
    //       currentSlide = 0;
    //     }
    //   }
    // });
  }); // end DOM ready
})(jQuery); // end jQuery