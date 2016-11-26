/**
 * @file main.js
 * @author Daniel Miller
 */

requirejs.config({
  baseUrl: 'js/lib'
});

require(['DMCanvas', 'DMShapeFactory', 'DMShapeDrawer', 'DMShapeSelector'], function(DMCanvas, DMShapeFactory, DMShapeDrawer, DMShapeSelector){

  args = {beginX: 35, beginY: 400, width: 100, color: '#123456'};
  var rect = DMShapeFactory.buildShape(args);
  args = {beginX: 260, beginY: 200, width: 150, height: 150, color: '#135235'};
  var rect2 = DMShapeFactory.buildShape(args);
  args = {beginX: 100, beginY: 120, radius: 100};
  var circle = DMShapeFactory.buildShape(args);
  DMCanvas.setShapes([rect, rect2, circle]);
  DMCanvas.setActiveShape(0);
  var ctx = DMCanvas.getCanvasContext();
  var shapeDrawer = new DMShapeDrawer(ctx);
  var shapes = DMCanvas.getShapes();
  var activeShape = shapes[0];
  var shapeSelector = new DMShapeSelector(activeShape, ctx);
  DMCanvas.buildCanvas(shapeDrawer, shapeSelector);

});
