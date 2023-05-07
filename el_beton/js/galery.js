function ShowBig(FileName){
	$('#BigDiv').fadeIn(300);
	document.getElementById('BigImg').src=FileName;
	setTimeout(function(){
		$('#BigImg').addClass('active');
	}, 400);
}

function CloseBig(){
	$('#BigImg').removeClass('active');
	setTimeout(function(){
		$('#BigDiv').fadeOut(100);
	}, 1000);
}

$(document).ready(function(){
	$('.main-galery').bxSlider({
		auto: true
	});
	$('.icon-circle-up').click(function(e){
		$('html,body').animate({scrollTop: 0}, 400);
		e.preventDefault();
	});
	$(document).scroll(function(){
		var t = $(document).scrollTop()
			a = $('.icon-circle-up');
		t > 300 ? a.fadeIn(200) : a.fadeOut(300);
	});
	$('.open-menu').click(function(e){
		$(this).parent().toggleClass('active');
		e.preventDefault();
	});
	$('.readmore').click(function(e){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next('div').slideUp(200);
			$(this).text('Показать больше');
		} else {
			$(this).addClass('active');
			$(this).next('div').slideDown(400);
			$(this).text('Скрыть');
		}
		e.preventDefault();
	});
});

			var map;
			// координаты карты
		    var oz = new google.maps.LatLng(54.008732,27.283454);
		    var MY_MAPTYPE_ID = 'custom_style';
		    function initialize() {
		     // стили 
		     var featureOpts = [ 
		          { "stylers": 
					        [
		                { "hue": "#f6b362" },
								    { "saturation": 100 },
								    { "gamma": 0.83 }
		              ]
		          } ];
		      var mapOptions = {
		        zoom: 17,
		        center: oz,
		        scrollwheel: false,
		        navigationControl: false,
		        mapTypeControl: false,
		        scaleControl: false,
		        draggable: false,
		        mapTypeControlOptions: {
		          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		        },
		        mapTypeId: MY_MAPTYPE_ID
		      };

		      map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		      var styledMapOptions = {
		        name: 'Custom Style'
		      };
		      var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
		      map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		    }
		    initialize();