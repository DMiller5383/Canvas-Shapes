# Canvas shapes

This is a small project that is experimenting with several javascript and software design concepts.

* HTML5 Canvas and javascript
* requirejs
* Use of a factory class
* Prototypical inheritance
* Dependency Injection

This program, basically takes shapes and draws them on the canvas.  A user can use the mouse to select the different shapes, and then use the directional arrow keys to move the shape across the canvas.

The DMShape class is a parent class that basically holds the data of the shape.  The class is meant to be extended.  In the current iteration there are two child classes that make use of the DMShape prototype:

* DMRectangle
* DMCircle

While these classes can be instantiated on their own, there is a factory class called DMShapeFactory.  This is a static class.  By passing in a set of arguments to the buildShape method, the factory will determine what kind of shape should be generated.  

The shapes themselves are drawn using the DMShapeDrawer class.  This class takes an array of shapes, iterates through each of those shapes and draws them appropriately.

This programs makes use of requirejs.  This is a AMD (Asynchronous Module Definitiion) loading library.  It greatly simplifies the process of including file dependencies while improving the speed and performance of the application.  For more information go to [requirejs.org](http://www.requirejs.org).
