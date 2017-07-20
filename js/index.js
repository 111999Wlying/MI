//侧导航li
$(".banner-ul>a>li").hover(function(){
	$(this).children("div").stop().show()
	$(this).css("background","#FF6700")
},function(){
	$(this).children("div").stop().hide()
	$(this).css({"background":" rgba(0,0,0,0)",})
})


//轮播

var i=0;
$(function(){
	setInterval(move,2000)
	function move(){
		i++
		if(i>$('.box-banner>ul>li').length){
			i=0
		}
		$('.box-banner>ul>li').eq(i).fadeIn().siblings().fadeOut()
		
	}
})

//上导航
$(".daohang-2-ul>a>li").hover(function(){
	$(this).find(".daohang2-none").stop().slideDown()
},function(){
	$(this).find(".daohang2-none").stop().slideUp()
})
//$(".daohang-2-ul>a>li").hover(function(){
//	var index=$(this).index()
//	$(this).find(".daohang2-none").eq(index).css("display","block")
//},function(){
//	$(this).find(".daohang2-none").eq(index).siblings().css("display","none")
//})
$("#huaL").click(function(){
	var l=$('.danpin').offset().left
	var w=$('.daninn').width()
//	console.log($(window).width())
	$('.danpin').animate({"left":l-w+'px'},{duration:2000})
	
})
$("#huaR").click(function(){
	var l=$('.danpin').offset().left
	var w=$('.daninn').width()
//	console.log($('.danpin').width())
	$('.danpin').animate({"left":l+w+'px'},{duration:2000})
	
})
