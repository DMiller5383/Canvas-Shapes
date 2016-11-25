/**
 * Extends the DMShape class.  Returns a DMCircle
 * @module DMCircle
 */

define(['DMShape'], function(DMShape){
  /**
   * @constructor
   * @alias module: DMCircle
   * @param {args} elem args to create the rectangle object This object must have the
   * following properties: beginX, beginY, radius.
   */

  function DMCircle(args) {
    DMShape.call(this, args);
    this._radius = args.radius;
  }

  DMCircle.prototype = {
    /**
     * Gets the area of the circle.
     * @return {Integer} returns radius * radius * pi
     */
    getArea: function() {
      return this._radius * this._radius * Math.PI;
    }
  };

  return DMCircle;
});
