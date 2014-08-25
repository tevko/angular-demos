//add our vanilla js tabs functionality

var tabbedElements = document.querySelectorAll('.accordian-reveal');

function toggleClass(elem, theClass) {
	elem.classList.toggle(theClass);
};

//loop through all elements
for (var i = 0; i < tabbedElements.length; i++) {
	tabbedElements[i].addEventListener('click', function() {
		toggleClass(this, '_show');
		this.classList.contains('_show') ? this.innerHTML = '-' : this.innerHTML = '+'; 
	});
};

//setting up our first controller

function FirstController($scope) {
	$scope.data = {message: "Hello World"};
}