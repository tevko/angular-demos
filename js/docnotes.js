
window.onload = function() {
	makeHtml();
	targetIframeClicks();
}

//toggle the notes section
document.querySelector('.docnotes-toggle').addEventListener('click', function() {
	toggleClass(this, '_hide');
});

//make md html

function makeHtml() {
	var content = document.querySelector('.docnotes').contentWindow.document.body.textContent;
		converter = new Markdown.Converter(),
		newContent = converter.makeHtml(content);
	document.querySelector('.docnotes').contentWindow.document.body.innerHTML = newContent;
	document.querySelector('.docnotes').contentWindow.document.body.style.fontFamily = 'Sans-serif';
}

//if link clicked in iframe, makeHtml

function targetIframeClicks() {
	var links = document.querySelector('.docnotes').contentDocument.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(evt) {
			setTimeout(function() {
				makeHtml();
			}, 350);
		});
	};
}