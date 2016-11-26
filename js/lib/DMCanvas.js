/**
 * This class represent the canvas element on the browser.  It takes the Id of
 * the canvas element that is getting shapes drawn on it.
 * @module DMCanvas
 */
define(['DMShapeDrawer', 'DMShapeSelector', 'DMRectangle', 'DMCircle', 'DMMouseClickHandler'], function(DMShapeDrawer, DMShapeSelector, DMRectangle, DMCircle, DMMouseClickHandler){
  /**
   * @constructor
   * @alias module: DMCanvas
   * @param {String} elem The id of the HTML node to be updated.
   */

  var _canvas = document.getElementById('shapeCanvas');
  var _ctx = _canvas.getContext('2d');
  var _shapes = [];
  var _activeShape;
  var _canvasColor = '#000';

  /**
   * Checks if user clicked on a shape.  If a shape was clicked, it sets the
   * _activeshape variable to the proper array key in _shapes.
   * @param {string} 'mousedown'  [description]
   * @param {[type]} function(evt [description]
   */
  _canvas.addEventListener('mousedown', function(evt){

    args = {
      clickX: evt.clientX,
      clickY: evt.clientY,
      shapes: _shapes
    };

    var mouseClickHandler = new DMMouseClickHandler(args);
    var shapeClicked = mouseClickHandler.canvasClicked();
    if(shapeClicked !== undefined) {
      setActiveShape(shapeClicked);
    }
    buildCanvas(new DMShapeDrawer(_ctx), new DMShapeSelector(_shapes[_activeShape], _ctx));
  });

  /**
   * Determines if the arrow keys were pressed and moves the active shape accordingly.
   * @param {[type]} 'keydown'    [description]
   * @param {[type]} function(evt [description]
   */
  window.addEventListener('keydown', function(evt){
    var keyCode = evt.keyCode;
    var shape = _shapes[_activeShape];
    //right
    if(keyCode==39) {
      shape._beginX +=1;
      _shapes[_activeShape] = shape;
    } else if(keyCode==37) {
      shape._beginX -=1;
      _shapes[_activeShape] = shape;
      //up
    } else if(keyCode==38) {
      shape._beginY -=1;
      _shapes[_activeShape] = shape;
      //down
    } else if(keyCode==40) {
      shape._beginY +=1;
      _shapes[_activeShape] = shape;
    }
    buildCanvas(new DMShapeDrawer(_ctx), new DMShapeSelector(_shapes[_activeShape], _ctx));
  }, true);

  /**
   *
   * @param  {String} canvasColor color that the canvas will be colored.
   * @return {Boolean} true returns true;
   */
  var colorCanvas = function(canvasColor) {
    _ctx.fillStyle = canvasColor;
    _ctx.fillRect(0, 0, _canvas.width, _canvas.height);

    return true;
  };
  /**
   * Add a shape to the canvas.
   * @param  {DMShape} shape Shape object to be added to the canvas.
   * @return {Boolean} true  returns true
   */
  var addShape = function(shape) {
    _shapes.push(shape);
    return true;
  };

  /**
   * Takes an array of DMShape objects and sets them to the the _shapes variable.
   * @param  {Array} shapes Array of shape objects
   * @return {Boolean} true returns true;
   */
  var setShapes = function(shapes) {
    _shapes = shapes;
    return true;
  };

  /**
   * Returns the _shapes array
   * @return {Array} _shapes returns the _shapes array
   */
  var getShapes = function() {
    return _shapes;
  };

  /**
   * Build canvas by adding a color and drawing all the shapes at their respective
   * coordinates.
   * @return {Boolean} true returns true
   */
  var buildCanvas = function(shapeDrawer, shapeSelector) {
    colorCanvas(_canvasColor);
    shapeSelector.outlineShape();
    shapeDrawer.drawAllShapes(_shapes);
    return true;
  };

  /**
   * Takes an array key and sets the _active shape variable to the respective key.
   * @param  {Integer} key the array key that the _activeshape variable is set to.
   * @return {Boolean} true returns true
   */
  var setActiveShape = function(key) {
    _activeShape = key;
  };

  var getCanvasContext = function() {
    return _ctx;
  };

  return {
    setShapes: setShapes,
    getShapes: getShapes,
    addShape: addShape,
    buildCanvas: buildCanvas,
    colorCanvas: colorCanvas,
    setActiveShape: setActiveShape,
    getCanvasContext: getCanvasContext

  };

});
