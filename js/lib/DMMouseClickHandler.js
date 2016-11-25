/**
 * Handles mouse click on canvas.  If a shape is clicked on the canvas it will
 * return the array index of the _shapes variable on the DMCanvas object.
 * @module DMMouseClickHandler
 */
define(['DMShape', 'DMRectangle', 'DMCircle'], function(DMShape, DMRectangle, DMCircle){
  /**
   * @constructor
   * @alias module: DMMouseClickHandler
   * @param {Object} args Object that has three params: shapes, clickX and clickY.
   */

  /**
   * [DMMouseClickHandler Instantiatiates the DMMouseClickHandler
   * @param {Object} args Requires three parameters: shapes, which is an array of DMShapeObjects
   * clickX: the x coordinate of the click, clickY: the Y coordinate of the click.
   */
  function DMMouseClickHandler(args) {

    this.shapes = args.shapes;
    this.clickX = args.clickX;
    this.clickY = args.clickY;

  }

  /**
   * Determines if a shape was clicked.  If a shape was clicked, it returns the index of the shape.
   * @return {Integer} i Index of the shape that was clicked.
   */
  DMMouseClickHandler.prototype.canvasClicked = function() {

    for(i=0; i<this.shapes.length; i++) {
      var shape = this.shapes[i];
      if(shape instanceof DMRectangle) {
        if(this.rectangleClicked(i) !== undefined) {
          return i;
        }
      } else if (shape instanceof DMCircle) {
        if(this.circleClicked(i) !== undefined) {
          return i;
        }
      }
    }
  };

  /**
   * If the shape is a rectangle, this method determines if the click was inside the shape.
   * @param  {Integer} key The current array key of the shape in the shapes array.
   * @return {Integer} key If the shape was clicked return the index.
   */
  DMMouseClickHandler.prototype.rectangleClicked = function(key) {

    var shape = this.shapes[key];
    var pointX = shape._beginX;
    var pointY = shape._beginY;
    var width = shape._width;
    var height = shape._height;
    if(this.clickX > pointX && this.clickX<pointX+width && this.clickY>pointY && this.clickY<pointY+height) {
      return key;
    }
  };

  /**
   * If the shape is a circle, this method determines if the click was inside the shape.
   * @param  {Integer} key The current array key of the shape in the shapes array.
   * @return {Integer} key If the shape was clicked return the index.
   */
  DMMouseClickHandler.prototype.circleClicked = function(key) {
    var shape = this.shapes[key];
    var radius = shape._radius;
    var pointX = shape._beginX;
    var pointY = shape._beginY;
    var squareX = (pointX-this.clickX) * (pointX-this.clickX);
    var squareY = (pointY-this.clickY) * (pointY-this.clickY);
    var dist = Math.sqrt(squareX + squareY);

    if(dist <= radius ) {
      return key;
    }

  };

  return DMMouseClickHandler;
});
