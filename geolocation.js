// define the variables
var location_btn, location_div;

// when loaded
window.onload = function() {

	// get the elements
	location_btn = document.querySelector("#location_btn");
	location_div = document.querySelector("#location");
		
	// listen for click on button
	location_btn.onclick = function() {
	
		// add notification to button
		location_btn.innerHTML = "Please wait...";
		location_btn.enabled = false;
		
		// error checking
		if (navigator.geolocation) {
		
			// get the current position
 	 		navigator.geolocation.getCurrentPosition(locate_success, locate_error);
		
		} else {
			
			// display notice
  			location_div.innerHTML = 'Your browser does not support navigator.geolocation';
		};	
	
	};
	
};

// if successfully located
function locate_success(location) {
	
	// get the information available to us
	var html = "";
	for (i in location.coords) {
		html += i+": "+location.coords[i]+"<br/>";
	}
	
	// display found information
	location_div.innerHTML = html;
	
	// reset button
	location_btn.innerHTML = 'Update my location';
	location_btn.enabled = true;

}

// if unsuccessfully located
function locate_error() {

	// display error message
	location_div.innerHTML = 'There has been an error getting your location';
	
}