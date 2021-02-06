// korcnel text u het berel

// $(document).ready(function () {
// $('.ktrec').css('display','none')
// $('.tanel').css('display','none')

// $('.tanel').click(function(){
// 	$('.ktrec').fadeOut(1000)
// 	$('.tanel').css('display','none')
// 	$('.berel1').show(1000)
// })

// $('.berel1').click(function(){
// $('.ktrec').fadeIn(1000)
// $('.berel1').css('display','none')
// $('.tanel').fadeIn()
// });

// });
 
//paralaxi kod 

// $(document).ready(function () {
// $(window).scroll(function(event) {
// 	var s =$(this).scrollTop();
// 	var w =$(this).outerWidth();
// 	var h  =$('.content').outerHeight();
// 	var h_b =$('.parallax').outerHeight();
// 	var p =s/h*100;
// 	var p_b= s/h_b*100;
// 	var o =1-1/100*p_b;

// 	 var z_1=1+(w/10000*p_b);
// $('.parallax__fog').css('transform','scale('+z_1+')');
// $('.parallax__fog').css('opacity', o)

// var z_2 = 1+(w/5000000*p)
// $('.parallax__montain_1').css('transform','scale('+z_2+')');


// var hr = w/2000*p_b;
// var z_3 = 1+(w*0.000005*p_b)
// $('.parallax__montain_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');



// var hg = w/1500*p_b;
// var z_4 = 1+(w*0.000005*p_b)
// $('.parallax__montain_3').css('transform','translate3d('+hg+'px,0,0) scale('+z_4+')');
// });



// });


$(document).ready(function(){
$('.count').each(function() {
$(this).prop('counter', 0).animate({
	counter:$(this).text()
},{
duration: 50000,
easing: 'swing',
step:function(now){
  $(this).text(Math.ceil(now));
}
})
});



});
