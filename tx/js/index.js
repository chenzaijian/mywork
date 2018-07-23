$(function  () {
	
	// var startStyle={transform:scale(1.2),transition:all .5s};
	// $(".box .box_header .title p").animate({
	// 	"fontSize":"56px"
	// },1500)

	$(".box .box_header .start").mouseover(function(){
		$(".box .box_header .start").css({"transform":"scale(1.2)","transition":"all .5s"});

	     })
	$(".box .box_header .start").mouseout(function(){
		$(".box .box_header .start").css({"transform":"scale(1)","transition":"all .5s"});
	     })
	$(".box .box_header .stop").mouseover(function(){
		$(".box .box_header .stop").css({"transform":"scale(1.2)","transition":"all .5s"});

	     })
	$(".box .box_header .stop").mouseout(function(){
		$(".box .box_header .stop").css({"transform":"scale(0)","transition":"all .5s"});
	     })
	$(".box .box_header .start").click(function(){
		$(".box .box_header .stop").show()
		// $(".box .box_header .start").toggle();
		$(".box .box_header .title p").slideDown(2000).slideUp(2000).fadeIn(2000)
		$(".box .box_header .start").fadeOut("slow");
		$(".box .box_header .text").slideToggle(2000);
		// $(".box .box_header .start").css({"transform":"scale(0)","transition":"all .5s"});
	})
	// $(".box .box_header .stop").click(function(){
	// 	$(".box .box_header .stop").hide();
	// 	$(".box .box_header .start").show();
	// })
	// $(".box .box_header ").click(function(){
 //        if ($(".box .box_header .start").attr("display")=='block' ){
 //        	$(".box .box_header .start").hide(500);
 //        }
 //        else{
 //        	$(".box .box_header .start").show(500);
 //        }
 //        // $(".box .box_header .start").toggle(500);
	// })
})