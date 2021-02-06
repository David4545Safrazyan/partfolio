$(document).ready(function () {
     $('.buttonStart1').css('display', 'none')
     $('.aj').css('display', 'none')
     $('.dzax').css('display', 'none')
     $('.nerqev').css('display', 'none')
     $('.vperyod').css('display', 'none')
     $('.vperyod11').css('display', 'none')
     



	$('.buttonStart').on('click', function () {
      $('.packmen').animate({left: "900px"}, 1000)
      $('.buttonStart1').css('display', 'block');

	});

   $('.buttonStart1').on('click', function () {
      $('.packmen').animate({top: "75px"}, 1000)
      $('.aj').css('display', 'block')
     $('.dzax').css('display', 'block')
     $('.nerqev').css('display', 'block')
     $('.buttonStart1').css('display', 'none')
	});

   $('.aj').on('click', function () {
     $('.packmen').animate({left: "1130px"}, 1000)
     $('.packmen').animate({top: "150px"}, 1000)
     $('.packmen').animate({left: "1260px"}, 1000)
     $('.aj').css('display', 'none')
     $('.dzax').css('display', 'none')
     $('.nerqev').css('display', 'none')
      $('.vperyod').css('display', 'block')
   });

   $('.dzax').on('click', function () {
     $('.packmen').animate({left: "850px"}, 1000)
     $('.aj').css('display', 'none')
     $('.dzax').css('display', 'none')
     $('.nerqev').css('display', 'none')
   });

   $('.nerqev').on('click', function () {
      $('.packmen').animate({top: "270px"}, 1000)
      $('.aj').css('display', 'none')
     $('.dzax').css('display', 'none')
     $('.nerqev').css('display', 'none')
     $('.vperyod11').css('display', 'block')
	});

    
    $('.vperyod').on('click', function () {
      $('.packmen').animate({left: '1700px'}, 1000)
    });

     $('.vperyod11').on('click', function () {
     $('.packmen').animate({left: '1260px'}, 1000)
     $('.packmen').animate({top: '100px'}, 1000)
     $('.packmen').animate({left: '1700px'}, 1000)
     $('.vperyod11').css('display', 'none')
    });


});