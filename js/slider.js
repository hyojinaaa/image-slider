// Get all the links of the images
var allImages = document.querySelectorAll('#gallery img');

var imageSources = [];

for( var i=0; i<allImages.length; i++ ) {

	imageSources.push( allImages[i].src );

}

// Delete all the images on the page
var galleryContainer = document.querySelector('#gallery');

galleryContainer.innerHTML = '';

// Create the slider container
var slider = document.createElement('div');

// Attach an ID to the slider
slider.id = 'slider';

// Add the slider to the browser
galleryContainer.appendChild( slider );

// Create some buttons
var next = document.createElement('button');
var prev = document.createElement('button');

// Add some IDs to the buttons
next.id = 'next';
prev.id = 'prev';

// Add text to the buttons
next.innerHTML = 'Next';
prev.innerHTML = 'Previous';

// Add the buttons to the slider
slider.appendChild(prev);
slider.appendChild(next);

// Show the first image to the visitor
slider.style.backgroundImage = 'url('+ imageSources[0] +')';

// Listen for clicks on the buttons
next.onclick = changePicture;
prev.onclick = changePicture;

function changePicture() {

	// Which image is in use?
	var imageInUse = slider.style.backgroundImage;

	console.log(imageInUse);

	// Extract the URL
	var bits = imageInUse.split('(');
	bits = bits[1].split(')')[0];
	console.log(bits);

	// Save the link inside a variable
	var url = bits;

	// Find out what index is in use in the image sources
	var index = imageSources.indexOf( url );

	console.log(index);

	// If the next button was clicked
	if( this.id == 'next' ){

		index++;

		// If the index is beyond the last image
		if( index == imageSources.length ){
			index = 0;
		}
	} else {
		index--;

		// If you have gond before the first image
		if( index == -1 ){
			index = imageSources.length - 1;
		}
	}

	// Get the new URL
	var newUrl = imageSources[index];

	// Change the picture in the slider
	slider.style.backgroundImage = 'url('+ newUrl +')';
}
























