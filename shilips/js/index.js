//logo
$(document).ready(function(){
//logo
$(".logo-box").mouseenter(function(){
$('.logo2').stop().animate({height:'50px'})
}).mouseleave(function(){
$('.logo2').stop().animate({height:'0'})
})
});

//banner 图高度自适应
function imgResize() {
	var DomWidth = $(window).width();
	var imgHeight = DomWidth * 700 / 2000;
	$(".banner").css("height", imgHeight + "px")
}
imgResize()
window.onresize = function() {
	imgResize()
}

//返回顶部
 $(function () {
    //当页面超出页面高度的时候，显示出来,如果小于1000，就让小火箭隐藏（否则隐藏）
    $(window).scroll(function () {
      if($(window).scrollTop() >= $(window).height() ){
        $(".backTop").stop().fadeIn();
      }else {
        $(".backTop").stop().fadeOut();
      }
    });
     $(".backTop").click(function () {
    	//animate 加的是css的属性要变成的值scrollTop是一个css属性
    	//选择器选择html、body原因是浏览器的兼容
        $("html,body").stop().animate({scrollTop:0});
      //scrollTop为0
        $(window).scrollTop(0);
    })
    
  });

//addEventListener("mousewheel", function() {
//	var scorller = document.body.scrollTop || document.documentElement.scrollTop;
//	if(scorller > 400) {
//		$(".backTop").css("display", "block")
//	} else {
//		$(".backTop").css("display", "none")
//	}
//	$(".backTop").click(function() {
//		document.body.scrollTop = document.documentElement.scrollTop = 0;
//		$(".backTop").css("display", "none")
//	})
//})
//addEventListener("DOMMouseScroll", function() {
//	var scorller = document.body.scrollTop || document.documentElement.scrollTop;
//	if(scorller > 400) {
//		$(".backTop").css("display", "block")
//	} else {
//		$(".backTop").css("display", "none")
//	}
//	$(".backTop").click(function() {
//		document.body.scrollTop = document.documentElement.scrollTop = 0;
//		$(".backTop").css("display", "none")
//	})
//})

//侧栏
$(".sideBar").click(function(){
$(this).stop().animate({right:"0px"})
}).mouseleave(function(){
$(this).stop().animate({right:"-50px"})
})



//分页
$(".paging ul li").click(function(){
$(this).addClass("active").siblings().removeClass("active")
})