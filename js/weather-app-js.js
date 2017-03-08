$(document).ready(function() {
	var apiUrl = '';
	var apiid = "&APPID= API key goes here";
	var city='';
	var tempK = 0;
	var currentWeatherCode = '';
	var currentWeatherDesc = '';
	var currentWeatherPic = '';
	var tempC = 0;
	var tempF = 0;
	
	$.getJSON('http://ipinfo.io', function(data){
		city = data.city;
		country = data.country;
		apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+apiid+"&callback=?";
		$.getJSON(apiUrl, function(data) {
			tempK = data.main.temp;
			currentWeatherCode = data.weather[0].id;
			currentWeatherDesc = data.weather[0].description;
			currentWeatherPic = data.weather[0].icon;
			switch (currentWeatherPic) {
				case "01d":
					$('#container').css('background-image', 'url(./img/clear-sky.jpg)');
					break;
				case '01n':
					$('#container').css('background-image', 'url(./img/clear-sky-night.jpg)');
					break;
				case '02d':
				case '02n':
					$('#container').css('background-image', 'url(./img/light-clouds.jpg)');
					break;
				case '03d':
				case '03n':
					$('#container').css('background-image', 'url(./img/cloudy.jpg)');
					break;
				case '04d':
				case '04n':
					$('#container').css('background-image', 'url(./img/heavy-clouds.jpg)');
					break;
				case '09d':
				case '09n':
					$('#container').css('background-image', 'url(./img/light-rain.jpg)');
					break;
				case '10d':
				case '10n':
					$('#container').css('background-image', 'url(./img/rain.jpg)');
					break;
				case '11d':
				case '11n':
					$('#container').css('background-image', 'url(./img/storm.jpg)');
					break;
				case '13d':
				case '13n':
					$('#container').css('background-image', 'url(./img/snow.jpg)');
					break;
				case '50d':
				case '50n':
					$('#container').css('background-image', 'url(./img/fog.jpg)');
					break;
				default:
				break;
			}
			//Convert Kelvin to Celcius
			tempC = Math.round(tempK - 273.15);	
			$('#temp-value').text(tempC);
			$('#weather-desc').text(currentWeatherDesc);
			var currentWeatherPicUrl = 'http://openweathermap.org/img/w/'+currentWeatherPic+'.png';
			$('#weather-icon').html("<img src='"+currentWeatherPicUrl+"'>");
			$('#location').text(city+', '+country);
		})
		.fail(function(error) {
			alert(JSON.stringify(error));
		});	
	});
	
	$('#cel-toggle').click(function() {
		if ($(this).hasClass('inactive')) {
			$('#cel-toggle').removeClass('inactive');
			$('#cel-toggle').addClass('active');
			$('#far-toggle').removeClass('active');
			$('#far-toggle').addClass('inactive');
			$('#temp-value').text(tempC);
		}
	});
	$('#far-toggle').click(function() {
		if ($(this).hasClass('inactive')) {
			$('#far-toggle').removeClass('inactive');
			$('#far-toggle').addClass('active');
			$('#cel-toggle').removeClass('active');
			$('#cel-toggle').addClass('inactive');
			tempC = $('#temp-value').text();
			$('#temp-value').text(eval(Math.round($('#temp-value').text()*1.8+35)));
		}
	});
	
});
