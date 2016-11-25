/**
 * Shape class.  Provides an interface for any shapes that extend it.
 * @module DMShape
 */
define(function(){
  /**
   * @constructor
   * @alias module: DMShape
   * @param {String} elem The id of the HTML node to be updated.
   */

   /**
    * Takes an object of args
    * @param {Object} args Must contain an x coordinate, y coordinate, and a color.
    */
  function DMShape(args) {

    this._beginX = args.beginX;
    this._beginY = args.beginY;
    this._color = args.color;

  }

  /**
   * Stub method for getting object area.
   * @return {Boolean} true return true
   */
  DMShape.prototype.getArea = function() {
    /** Stub method for updating HTML node. */
    return true;
  };

  /**
   * Return the coordinate of the shape.
   * @return {Array} array returns array of coordinates.
   */
  DMShape.prototype.getCoords = function() {
    return [this._beginX, this._beginY];
  };

  /**
   * Updates coordinates of shape on canvas.
   * @param  {Integer} newX new x coordinate
   * @param  {Integer} newY new y coordinate
   * @return {Boolean} true return true
   */
  DMShape.prototype.updateCoords = function(newX, newY) {
    this._beginX = newX;
    this._beginY = newY;
  };

  /**
   * Returns the shape's color
   * @return {String} this._color returns teh shape's color code.
   */
  DMShape.prototype.getColor = function() {
    return this._color;
  };

  return DMShape;
});
