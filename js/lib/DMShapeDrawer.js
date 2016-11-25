/**
 * Draws shapes on the canvas.
 * @module DMShapeDrawer
 */
define(['DMRectangle', 'DMCircle'], function(DMRectangle, DMCircle){
  /**
   * @constructor
   * @alias module: DMShapeDrawer
   * @param {CanvasRenderingContext2D} canvasContext Canvas context of the canvas that will be utilized.
   */

   function DMShapeDrawer(canvasContext) {
     this._canvasContext = canvasContext;
   }

   /**
    * Draws a rectangle based on the shape passed in.
    * @param  {DMRectangle} rect rectangle to be drawn
    * @return {Boolean} true returns true
    */
   DMShapeDrawer.prototype._drawRectangle = function(rect) {
     this._canvasContext.fillStyle = rect._color;
     this._canvasContext.fillRect(rect._beginX, rect._beginY, rect._width, rect._height);
     return true;
   };

   /**
    * Draws a rectangle based on the shape passed in.
    * @param  {DMCircle} rect rectangle to be drawn
    * @return {Boolean} true returns true
    */
  DMShapeDrawer.prototype._drawCircle = function(circle) {
      this._canvasContext.fillStyle = circle._color;
      this._canvasContext.beginPath();
      this._canvasContext.arc(circle._beginX, circle._beginY, circle._radius, 0, Math.PI*2, true);
      this._canvasContext.fill();
      return true;
  };

  /**
   * Draws all shapes on the canvas.
   * @param  {Array} shapes Array of shape objects.
   * @return {Boolean} true returns true;
   */
  DMShapeDrawer.prototype.drawAllShapes = function(shapes) {

    for(i=0; i<shapes.length; i++) {
      var shape = shapes[i];
      if( shape instanceof DMRectangle ) {

        this._drawRectangle(shape);
      } else if( shape instanceof DMCircle ) {
        this._drawCircle(shape);
      } else if( shape instanceof DMTriangle) {
        this._drawTriangle(shape);
      } else {
        this._drawRectangle(shape);
      }
    }
    return true;
  };

  return DMShapeDrawer;
});
