/**
 * Factory object to return the type of "Shape" class
 * @module DMShapeFactory
 */
define(['DMShape','DMRectangle', 'DMCircle'], function(DMShape, DMRectangle, DMCircle){
  /**
   * @constructor
   * @alias module: DMShapeFactory
   */

  /**
   * [function description]
   * @param {String} shape The type of shape (either circle or square).
   * @param {Object} args The arguments of the shape to be created.
   * @return {DMShape} returnShape The created shape to be returned.
   */
  var buildShape = function(shape, args) {
    var returnShape;
    if(shape==='rectangle') {
      returnShape = new DMRectangle(args);
    } else if( shape==='circle') {
      returnShape = new DMCircle(args);
    } else {
      returnShape = 'Invalid shape';
    }

    return returnShape;
  };

  return {
    buildShape: buildShape
  };

});
