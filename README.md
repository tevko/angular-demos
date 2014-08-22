I'm Exploring Angular
=========

**Here are my notes**

Also be sure to check out the resources page

Getting Started
-------------

1. The first thing I needed to do was to find out what Angular's dependencies are. This was annoying. Thankfully I found [this helpful link](http://fdietz.github.io/recipes-with-angular-js/introduction/including-the-angular-library-code-in-an-html-page.html) which verified that, at a minimum, all I needed was the main Angular javascript file, currently V1.2.2.

2. I continued to go along with this resource, and learned that the ``ng-app`` directive is needed make Angular start doing cool stuff. So I put that directive on the opening body tag in the HTML. It looks like this ``<body ng-app="exploreAngular">``. I noticed that, on page load, this adds ``class="ng-scope"`` to the body tag. Not sure why that class is added, maybe we'll find out later.

3. Continuing on with the tutorial inside of the ``<body></body>`` tags is: ``<p>This is your first angular expression: {{ 1 + 2 }}</p>``. I guessed that the code inside of the double curly brackets would show up as the number 3 when I loaded the page, and I was correct. You can see the result at [/#trying-out-expressions](/#trying-out-expressions) if you've cloned the repo, or on line 18 of index.html. 

4. I'm gonna experiment with different types of expressions. I tried puting plain JS inside of the curly brackets and I broke everything. I found [this awesome resource](http://teropa.info/images/angular_expressions_cheatsheet.pdf) which documents a bunch of stuff you can do with expressions

Diving Deeper
------------

1. Okay so Angular is included, angular stuff is happening, what's next? I heard something about data binding and cat sleepwear .. Oh yeah data binding is the cats pajamas. So I guess I'll check that out. [I found this resource](https://www.youtube.com/playlist?list=PLP6DbQBkn9ymGQh2qpk9ImLHdSH5T7yw7), which I'll be using to explore data binding.

2. WOW THIS IS TOO EASY!!1! I put an input element on the page and gave it a an ng-model like so ``<input type="text" ng-model="data.message">``. Then below it I did the following: ``<p>{{data.message}}</p>``. That's it. Whatever is typed into the input element immediately shows up in the paragraph tags! I changed the name of the model to 'kittens', and it still worked, so there's that. Okay so the [angular wiki](https://github.com/angular/angular.js/wiki/Understanding-Scopes) explains why it's a best practice to always have a '.' in your ng-models. Switching back to a sensible name for this model. You can also use this to manipulate a class. I pulled in foundation's CSS file, added another input, and a corresponding div. The input value is bound to the class of the div. Type in 'label' to see what happens.

3. Next I wanted to make this index.html page to look better, so I implimented tabs. BUT WAIT! I can do that with angular! So I wrapped my content in accordian appropriate html. Then I added the class ``ng-hide`` to the content that was supposed to be hidden. I refreshed the page and wouldn't you know it, the hidden content was hidden. But how to get it to show when I clicked the show button? Well, I know that's ngModel territory, so I added an ng-model attribute to my button: ``ng-model="accordians"``. Then I added an ngShow attribute to my hidden content div. I now somehow need to create a model that would toggle the ng-hide class when the button is clicked. Looks like I'll follow [this tutorial](http://odetocode.com/blogs/scott/archive/2013/08/14/dynamic-tabs-with-angularjs-and-ui-bootstrap.aspx) to do that. Okay, looks like I need a controller for my tabs widget. Gonna set that up in main.js on line 2. I've also added ``ng-controller="tabs"`` to my accordian widget in my html. I followed the tutorial, but I have more than one item to toggle, so I need some sort of foreach function.