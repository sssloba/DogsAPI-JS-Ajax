
var breed = document.querySelector("option").value;

var sel = document.querySelector('select');

var image = document.createElement('img');

var title = document.getElementById('title')


title.textContent = "This are images of " + breed + " dogs";


function addImg(breed) {

	var newRequest = new XMLHttpRequest();

	var url = 'https://dog.ceo/api/breed/' + breed + '/images/random';

	newRequest.open('GET', url);

	newRequest.onload = function() {

		if(newRequest.status === 200) {
			var dogImg = JSON.parse(newRequest.responseText).message;
			image.innerHTML = "";
			image.setAttribute('src', dogImg);
			document.querySelector('body').appendChild(image);
		} else {
			alert('error');
			clearInterval(repeat);
		}
	}

	newRequest.send();
}


sel.addEventListener("change", function(e) {
	
	var breeds = document.querySelectorAll("option");

	for (i = 0; i < breeds.length; i++) {
		breed = e.target.value
	}

	title.textContent = "This are images of " + breed + " dogs";

	addImg(breed);
	
	return breed;
})


addImg(breed);

var repeat = setInterval("addImg(breed)", 3000);

