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
      autoplay:true,
      autoplayTimeout:10000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            300 : {
                  items:2,
                  margin:5
            },
            400 : {
                  items:2,
                  margin:40
            },
            500 : {
                  items:2,
                  margin:50
            },
            600 : {
                  items:3,
                  margin:50
            },
            800 : {
                  items:4,
                  margin:60
            },
            1000 : {
                  items:5,
                  margin:50
            },
            1200 : {
                  items:6,
                  margin:70
            }
      }
})
Best_seller.owlCarousel({
      rtl:true,
      loop:true,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            300 : {
                  items:2,
                  margin:5
            },
            400 : {
                  items:2,
                  margin:40
            },
            500 : {
                  items:2,
                  margin:50
            },
            600 : {
                  items:3,
                  margin:50
            },
            800 : {
                  items:4,
                  margin:60
            },
            1000 : {
                  items:5,
                  margin:50
            },
            1200 : {
                  items:6,
                  margin:70
            }
      }
})
End_seasen.owlCarousel({
      rtl:true,
      loop:true,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:8000,
      autoplayHoverPause:true,
      responsive : {
            200 : {
                  items:2,
                  margin:5
            },
            300 : {
                  items:2,
                  margin:5
            },
            400 : {
                  items:2,
                  margin:40
            },
            500 : {
                  items:2,
                  margin:50
            },
            600 : {
                  items:3,
                  margin:50
            },
            800 : {
                  items:4,
                  margin:60
            },
            1000 : {
                  items:5,
                  margin:50
            },
            1200 : {
                  items:6,
                  margin:70
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