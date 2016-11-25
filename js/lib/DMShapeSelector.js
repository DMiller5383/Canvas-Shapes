/**
 * Highlights the active shape on the canvas.
 * @module Observer
 */
define(['DMShape', 'DMRectangle', 'DMCircle'], function(DMShape, DMRectangle, DMCircle){
  /**
   * @constructor
   * @alias module: DMShapeSelector
   * @param {DMShape} elem Shape to be drawn.
   * @param {CanvasRenderingContext2D} ctx canvas context to draw the shape.
   */

  function DMShapeSelector(activeShape, ctx) {

    this._activeShape = activeShape;
    this._ctx = ctx;
    this._ctx.strokeStyle = 'red';

  }

  /**
   * Draws an outline of the active rectangle.
   * @return {Boolean} true returns true
   */
  DMShapeSelector.prototype.drawRectOutline = function() {
    var rect = this._activeShape;
    this._ctx.strokeRect(rect._beginX, rect._beginY, rect._width, rect._height);
    return true;
  };

  /**
   * Draws an outline of the active circle.
   * @return {Boolean} true returns true
   */
  DMShapeSelector.prototype.drawCircleOutline = function() {
    var circle = this._activeShape;
    this._ctx.beginPath();
    this._ctx.arc(circle._beginX, circle._beginY, circle._radius, 0, Math.PI*2, true);
    this._ctx.stroke();
  };

  /**
   * Determines what kind of shape the _activeshape is and calls the method to
   * draw it.
   * @return {Boolean} true returns true
   */
  DMShapeSelector.prototype.outlineShape = function() {
    if(this._activeShape instanceof DMRectangle) {
      this.drawRectOutline();
    } else {
      this.drawCircleOutline();
    }
    return true;
  };

  return DMShapeSelector;
});
