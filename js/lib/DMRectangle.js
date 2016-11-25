/**
 * Extends the DMShape class.  Returns a DMRectangle
 * @module DMRectangle
 */

define(['DMShape'], function(DMShape){
  /**
   * @constructor
   * @alias module: DMRectangle
   * @param {args} elem args to create the rectangle object This object must have the
   * following properties: beginX, beginY, width, height.
   */

  function DMRectangle(args) {
    DMShape.call(this, args);
    this._width = args.width;
    this._height = args.height;
  }

  DMRectangle.prototype = {
    /**
     * Gets the area of the rectangle.
     * @return {Integer} returns width * height.
     */
    getArea: function() {
      return this._width * this._height;
    }
  };

  return DMRectangle;
});
