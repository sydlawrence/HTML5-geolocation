
var location_btn, location_div;

window.onload = function() {

	location_btn = document.querySelector("#location_btn");
	location_div = document.querySelector("#location");
		
	// listen for click on button
	location_btn.onclick = function() {
		location_btn.innerHTML = "Please wait...";
		if (navigator.geolocation) {
 	 		navigator.geolocation.getCurrentPosition(locate_success, locate_error);
		} else {
			
		
  			location_div.innerHTML = 'Your browser does not support navigator.geolocation';
		};	
	
	};
	
};


function locate_success(location) {
	
	var html = "";
	for (i in location.coords) {
		html += i+": "+location.coords[i]+"<br/>";
	}
	
	location_div.innerHTML = html;
	location_btn.innerHTML = 'Update my location';
	location_btn.enabled = true;

}

function locate_error() {
	location_div = 'There has been an error getting your location';
}