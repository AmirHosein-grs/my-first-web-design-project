var Slider_ss = $('#slider-ss');
var Special_suggest = $('#product-special-suggest');
var Best_seller = $('#product-special-suggest-second');
var End_seasen = $('#product-special-suggest-third')
Slider_ss.owlCarousel({
      items:1,
      rtl:true,
      loop:true,
      nav:true,
      margin:2,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true, 
})
Special_suggest.owlCarousel({
      rtl:true,
      loop:true,
      dots:false,
      nav:false,
      center:true,
      freeDrag:true,
      autoWidth:true,
      autoplay:true,
      autoplayTimeout:10000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            600 : {
                  items:3,
                  margin:10
            },
            800 : {
                  items:4,
            },
            1000 : {
                  items:5,
            },
            1200 : {
                  items:6,
                  margin:30
            }
      }
})
Best_seller.owlCarousel({
      rtl:true,
      loop:true,
      dots:false,
      nav:false,
      center:true,
      freeDrag:true,
      autoWidth:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            600 : {
                  items:3,
                  margin:10
            },
            800 : {
                  items:4,
            },
            1000 : {
                  items:5,
            },
            1200 : {
                  items:6,
                  margin:30
            }
      }
})
End_seasen.owlCarousel({
      rtl:true,
      loop:true,
      dots:false,
      autoWidth:true,
      nav:false,
      center:true,
      freeDrag:true,
      autoplay:true,
      autoplayTimeout:8000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            600 : {
                  items:3,
                  margin:10
            },
            800 : {
                  items:4,
            },
            1000 : {
                  items:5,
            },
            1200 : {
                  items:6,
                  margin:30
            }
      }
})
$('#best-seller-next').click(function(){
      Best_seller.trigger('next.owl.carousel')
})
$('#best-seller-prev').click(function(){
      Best_seller.trigger('prev.owl.carousel')
})
$('#best-seller-next-third').click(function(){
      End_seasen.trigger('next.owl.carousel')
})
$('#best-seller-prev-third').click(function(){
      End_seasen.trigger('prev.owl.carousel')
})