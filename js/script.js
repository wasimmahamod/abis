$('.counter').counterUp({
    delay: 10,
    time: 1000
});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
$('.top-slider').slick({
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 2000,
  asNavFor: '.down-slider',
});
$('.down-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  asNavFor: '.top-slider',
  centerMode: true,
  centerPadding:0,
  prevArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
  nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(".item2").mouseenter(function(){
    $(".item2 .round").css("transform","scale(1)")
   $(".line2").css("width","37%")
   $(".text h2").css("color","pink")
   $(".gol2 .gol").css("transform","scale(1)")
   $(".gol2 h1").css("color","#806e83")

})

$(".item3").mouseenter(function(){
  $(".item2 .round").css("transform","scale(1)")
    $(".item3 .round").css("transform","scale(1)")
    $(".line2").css("width","63%")
    $(".gol2 .gol").css("transform","scale(1)")
    $(".gol3 .gol").css("transform","scale(1)")
    $(".gol2 h1").css("color","#806e83")
    $(".gol3 h1").css("color","#806e83")
   

})
$(".item4").mouseenter(function(){
  $(".item2 .round").css("transform","scale(1)")
  $(".item3 .round").css("transform","scale(1)")
  $(".item4 .round").css("transform","scale(1)")
  $(".line2").css("width","100%")
  $(".gol2 .gol").css("transform","scale(1)")
  $(".gol3 .gol").css("transform","scale(1)")
  $(".gol4 .gol").css("transform","scale(1)")
  $(".gol2 h1").css("color","#806e83")
  $(".gol3 h1").css("color","#806e83")
  $(".gol4 h1").css("color","#806e83")

})
$(".item2").mouseleave(function(){
  $(".item2 .round").css("transform","scale(.8)")
  $(".line2").css("width","11%")
  $(".gol2 .gol").css("transform","scale(.6)")
  $(".gol2 h1").css("color","black")
})
$(".item3").mouseleave(function(){
  $(".item2 .round").css("transform","scale(.8)")
  $(".item3 .round").css("transform","scale(.8)")
  $(".line2").css("width","11%")
  $(".gol2 .gol").css("transform","scale(.6)")
  $(".gol3 .gol").css("transform","scale(.6)")
  $(".gol2 h1").css("color","black")
  $(".gol3 h1").css("color","black")
})
$(".item4").mouseleave(function(){
  $(".item2 .round").css("transform","scale(.8)")
  $(".item3 .round").css("transform","scale(.8)")
  $(".item4 .round").css("transform","scale(.8)")
  $(".line2").css("width","11%")
  $(".gol2 .gol").css("transform","scale(.6)")
  $(".gol3 .gol").css("transform","scale(.6)")
  $(".gol4 .gol").css("transform","scale(.6)")
  $(".gol2 h1").css("color","black")
  $(".gol3 h1").css("color","black")
  $(".gol4 h1").css("color","black")
})
$(".testi-slider").slick({
  arrows:false,
  fade:true,
  asNavFor:".bottom-slider",
});
$(".bottom-slider").slick({
  centerMode:true,
  centerPadding:"0",
  slidesToShow:5,
  asNavFor:".testi-slider",
  prevArrow:'<a class="down">See Previous<i class="fas fa-long-arrow-alt-left prev"></i></a>',
  nextArrow:'<a class="up">See Next<i class="fas fa-long-arrow-alt-right pr next"></i></a>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 2

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});
$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();
$('#bar6').barfiller();