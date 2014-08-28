//add our vanilla js tabs functionality

var tabbedElements = document.querySelectorAll('.accordian-reveal');

var myApp = angular.module('myApp', []);

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

//our addStuff controller
function addStuff($scope) {
	$scope.stuff = [];

	$scope.add = function() {
		if(document.querySelector('.stuff').value == '') {
			return;
		}
		$scope.stuff.push($scope.newStuff);
		$scope.newStuff = "";
	};
}

//working with methods

function methodController($scope) {
	$scope.data = {reverse: 'I\'m Backwards'};
	$scope.reversedMessage = function(reverse) {
		return reverse.split('').reverse().join('');
	}
}

//adding a filter 
myApp.filter('reverse', function() {
	return function(text) {
		return text.split('').reverse().join('');
	}
});