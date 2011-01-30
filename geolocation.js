var result, article, map;

window.onload = function() {
	article = document.querySelector('article');
	
	map = document.createElement('div');
	map.id = 'map';
  	map.style.height = '400px';
  	map.style.width = '500px';
  	
  	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(success, error);
	} else {
	  alert('navigator.geolocation not supported on your browser.');
	}
}


function success(position) {
  

  article.appendChild(map);
  
  var ll = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: ll,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
  
  var marker = new google.maps.Marker({
      position: ll, 
      map: map, 
      title:"here you are"
  });
}

function error(msg) {
	article.innerHTML = "We could not find you, sorry.";
}

