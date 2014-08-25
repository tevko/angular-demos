window.onload = function() {
	var content = document.querySelector('.docnotes').contentWindow.document.body.textContent;
		converter = new Markdown.Converter(),
		newContent = converter.makeHtml(content);
	document.querySelector('.docnotes').contentWindow.document.body.innerHTML = newContent;
	document.querySelector('.docnotes').contentWindow.document.body.style.fontFamily = 'Sans-serif';
}

//toggle the notes section
document.querySelector('.docnotes-toggle').addEventListener('click', function() {
	toggleClass(this, '_hide');
});