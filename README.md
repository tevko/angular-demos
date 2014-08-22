I'm Exploring Angular
=========

**Here are my notes**

Getting Started
-------------

1. The first thing I needed to do was to find out what Angular's dependencies are. This was annoying. Thankfully I found [this helpful link](http://fdietz.github.io/recipes-with-angular-js/introduction/including-the-angular-library-code-in-an-html-page.html) which verified that, at a minimum, all I needed was the main Angular javascript file, currently V1.2.2.

2. I continued to go along with this resource, and learned that the ``ng-app`` directive is needed make Angular start doing cool stuff. So I put that directive on the opening body tag in the HTML. It looks like this ``<body ng-app>``. I noticed that, on page load, this adds ``class="ng-scope"`` to the body tag. Not sure why that class is added, maybe we'll find out later.

3. Continuing on with the tutorial inside of the ``<body></body>`` tags is: ``<p>This is your first angular expression: {{ 1 + 2 }}</p>``. I guessed that the code inside of the double curly brackets would show up as the number 3 when I loaded the page, and I was correct. You can see the result at [/#trying-out-expressions](/#trying-out-expressions) if you've cloned the repo, or on line 18 of index.html. 

4. I'm gonna experiment with different types of expressions. I tried puting plain JS inside of the curly brackets and I broke everything. I found [this awesome resource](http://teropa.info/images/angular_expressions_cheatsheet.pdf) which documents a bunch of stuff you can do with expressions

Diving Deeper
------------

1. Okay so Angular is included, angular stuff is happening, what's next? I heard something about data binding and cat sleepwear .. Oh yeah data binding is the cats pajamas. So I guess I'll check that out. (I found this resource)[https://www.youtube.com/playlist?list=PLP6DbQBkn9ymGQh2qpk9ImLHdSH5T7yw7], which I'll be using to explore data binding.

2. WOW THIS IS TOO EASY!!1! I put an input element on the page and gave it a an ng-model like so ``<input type="text" ng-model="data.message">``. Then below it I did the following: ``<p>{{data.message}}</p>``. That's it. Whatever is typed into the input element immediately shows up in the paragraph tags!