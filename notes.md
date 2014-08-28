I'm Exploring Angular
=========

**Here are my notes**

Also be sure to check out the [resources](resources.md) page

Getting Started
-------------

1. The first thing I needed to do was to find out what Angular's dependencies are. This was annoying. Thankfully I found [this helpful link](http://fdietz.github.io/recipes-with-angular-js/introduction/including-the-angular-library-code-in-an-html-page.html) which verified that, at a minimum, all I needed was the main Angular javascript file, currently V1.2.2.

2. I continued to go along with this resource, and learned that the ``ng-app`` directive is needed make Angular start doing cool stuff. So I put that directive on the opening body tag in the HTML. It looks like this ``<body ng-app>``. I noticed that, on page load, this adds ``class="ng-scope"`` to the body tag. Not sure why that class is added, maybe we'll find out later.

3. Continuing on with the tutorial inside of the ``<body></body>`` tags is: ``<p>This is your first angular expression: {{ 1 + 2 }}</p>``. I guessed that the code inside of the double curly brackets would show up as the number 3 when I loaded the page, and I was correct. You can see the result at [/#trying-out-expressions](/#trying-out-expressions) if you've cloned the repo, or on line 18 of index.html. 

4. I'm gonna experiment with different types of expressions. I tried puting plain JS inside of the curly brackets and I broke everything. I found [this awesome resource](http://teropa.info/images/angular_expressions_cheatsheet.pdf) which documents a bunch of stuff you can do with expressions

Diving Deeper
------------

1. Okay so Angular is included, angular stuff is happening, what's next? I heard something about data binding and cat sleepwear .. Oh yeah data binding is the cats pajamas. So I guess I'll check that out. [I found this resource](https://www.youtube.com/playlist?list=PLP6DbQBkn9ymGQh2qpk9ImLHdSH5T7yw7), which I'll be using to explore data binding.

2. WOW THIS IS TOO EASY!!1! I put an input element on the page and gave it a an ng-model like so ``<input type="text" ng-model="data.message">``. Then below it I did the following: ``<p>{{data.message}}</p>``. That's it. Whatever is typed into the input element immediately shows up in the paragraph tags! I changed the name of the model to 'kittens', and it still worked, so there's that. Okay so the [angular wiki](https://github.com/angular/angular.js/wiki/Understanding-Scopes) explains why it's a best practice to always have a '.' in your ng-models. Switching back to a sensible name for this model. You can also use this to manipulate a class. I pulled in foundation's CSS file, added another input, and a corresponding div. The input value is bound to the class of the div. Type in 'label' to see what happens.

Making a Controller
-------------------

1. Next up on this series of youtube videos is controllers. So we're gonna make one. First thing we gotta do is create a space in our index.html file. So I created an empty div with an ngController attribute. It looks like this: ``<div ng-controller="FirstController">``. Then, we create a controller function in our main.js file. We pass the ``$scope`` variable into the function.  ``$scope`` refers to what we can do inside of our controller. Inside of our controller in index.html, we write another expression. ``{{data.message}}``. Then in main.js, we tell our controller to pass the "Hello World" message. It looks like this: ``$scope.data = {message: "Hello World"};``

2. I'm going to see what else I can do with a controller. Using [the following demo](http://viralpatel.net/blogs/angularjs-controller-tutorial/) as a guide, I'm going to make a controller that appends items to an unordered list. I'll start by adding a ``div`` with a new controller called "addStuff". I'll also add the ``<ul>`` tag followed by ``<li ng-repeat="thing in stuff">{{thing}}</li>``. I think the logic speaks for itself here, pretty easy to figure out what's going to happen. I'm also going to add an input element and a subbmit button so that I can add things. As for the controller logic in main.js, everything is kept very simple. All we need to do is create our controller function, declare an empty array, then define the ``add()`` function, which pushes our input value into the array and then clears the text inside of the input element. As an extra bit of functionality, I've added a bit of logic that prevents empty strings from being added to the list. Check out [the following documentation](https://docs.angularjs.org/error/ngRepeat/dupes) to see why the ng-repeat attribute contains ``track by $index``.