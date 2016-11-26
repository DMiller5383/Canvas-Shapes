/**
 * Factory object to return the type of "Shape" class
 * @module DMShapeFactory
 */
define(['DMShape','DMRectangle', 'DMCircle'], function(DMShape, DMRectangle, DMCircle){
  /**
   * @constructor
   * @alias module: DMShapeFactory
   */

   var _defaultShapeColor = '#fff';
  /**
   * Builds a shape based on arguments passed in.
   * @param {Object} args The arguments of the shape to be created.
   * @return {DMShape} returnShape The created shape to be returned.
   */
  var buildShape = function(args) {
    args = _setDefaultShapeColor(args);
    var returnShape;
    if(args.hasOwnProperty('radius')) {
      returnShape = new DMCircle(args);
    } else if( args.hasOwnProperty('width') || args.hasOwnProperty('height')) {
      args = _sanitizeRectParams(args);
      returnShape = new DMRectangle(args);
    } else {
      returnShape = 'Invalid shape';
    }

    return returnShape;
  };

  /**
   * Makes sure that both a width and height were specified. If not, it uses the value
   * for either height or width depending on which one was specified.
   * @param  {Object} args Shape args passed into the factory.
   * @return {Object} args Returns the new shape arguments.
   */
  var _sanitizeRectParams = function(args) {
    if(!args.hasOwnProperty('width')) {
      args.width = args.height;
    } else if(!args.hasOwnProperty('height')) {
      args.height = args.width;
    }

    return args;
  };

  /**
   * Makes sure that a color is set for the shape.
   * @param  {Object} args Shape args passed into the factory
   * @return {Object} args Returns a new set of args.  If no color was specified,
   * it will use the _defaultShapeColor.
   */
  var _setDefaultShapeColor = function(args) {
    if(!args.hasOwnProperty('color')) {
      args.color = _defaultShapeColor;
    }

    return args;
  };

  return {
    buildShape: buildShape
  };

});
