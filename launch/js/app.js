$(document).ready(function(){
  	$(".owl-carousel").owlCarousel({
    items: 8,
    loop:false,
    autoplay: false,
    navigation: true,
    navigationText: ["<img src='img/prev.png'>", "<img src=img/next.png'>"],
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 8
        }
    }
});
  	

  	$(".year-top" ).each(function( index ) {
  		console.log( index + ": " + $( this ).innerWidth() );
  		$(this).css({"transform": "translate("+(($(this).innerWidth()/2)-10)+"px)"});
 
});

  	$(".year-bottom" ).each(function( index ) {
  		console.log( index + ": " + $( this ).innerWidth() );
  		$(this).css({"transform": "translate("+(($(this).innerWidth()/2)-10)+"px)"});
 
});
  	var div =$('#div1,#div2,#div3,#div5,#div6,#div7,#div8,#div9,#div10,#div11,#div12,#div13,#div14,#div15');
  	var divs =$('#div1,#div2,#div3,#div4,#div5,#div6,#div7,#div8,#div9,#div10,#div11,#div12,#div13,#div14,#div15');
  	div.hide();
  	
   	$( ".owl-prev").html('<img src="img/prev.png" class="prev-slide nav-btn">');
 	$( ".owl-next").html('<img src="img/next.png" class="next-slide nav-btn">');
 	$( ".owl-stage").css('{"height":"100px","display":"flex","align-items":"center"}');
 	$( ".cercle-carousel").click(function(){
 		$(".cercle-carousel").removeClass("cercle-carousel-active")
 		$(this).addClass("cercle-carousel-active");
 	})

 		$(".div1").click(function(){
 			
 			divs.hide();
 			$("#div1").fadeIn("slow")();
 		})
 		$(".div2").click(function(){	
 			
 			divs.hide();
 			$("#div2").fadeIn("slow")();
 		})
 		$(".div3").click(function(){
 			
 			divs.hide();
 			$("#div3").fadeIn("slow")();
 		})
 		$(".div4").click(function(){
 			
 			divs.hide();
 			$("#div4").fadeIn("slow")();
 		})
 		$(".div5").click(function(){
 			
 			divs.hide();
 			$("#div5").fadeIn("slow")();
 		})
 		
 		$(".div6").click(function(){
 			
 			divs.hide();
 			$("#div6").fadeIn("slow")();
 		})
 		$(".div7").click(function(){
 			
 			divs.hide();
 			$("#div7").fadeIn("slow")();
 		})
 		$(".div8").click(function(){
 			divs.hide();
 			$("#div8").fadeIn("slow")();
 		})
 		$(".div9").click(function(){
 			divs.hide();
 			$("#div9").fadeIn("slow")();
 		})
 		$(".div10").click(function(){
 			divs.hide();
 			$("#div10").fadeIn("slow")();
 		})
 		$(".div11").click(function(){
 			divs.hide();
 			$("#div11").fadeIn("slow")();
 		})
 		$(".div12").click(function(){
 			divs.hide();
 			$("#div12").fadeIn("slow")();
 		})
 		$(".div13").click(function(){
 			divs.hide();
 			$("#div13").fadeIn("slow")();
 		})
 		$(".div14").click(function(){
 			divs.hide();
 			$("#div14").fadeIn("slow")();
 		})
 		$(".div15").click(function(){
 			divs.hide();
 			$("#div15").fadeIn("slow")();
 		})
 	
});