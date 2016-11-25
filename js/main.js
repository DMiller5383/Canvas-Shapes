/**
 * @file main.js
 * @author Daniel Miller
 */

requirejs.config({
  baseUrl: 'js/lib'
});

require(['DMCanvas', 'DMShapeFactory'], function(DMCanvas, DMShapeFactory){

  args = {beginX: 35, beginY: 400, width: 100, height: 100, color: '#123456'};
  var rect = DMShapeFactory.buildShape('rectangle', args);
  args = {beginX: 260, beginY: 200, width: 150, height: 150, color: '#135235'};
  var rect2 = DMShapeFactory.buildShape('rectangle', args);
  args = {beginX: 100, beginY: 120, radius: 100, color: '#246813'};
  var circle = DMShapeFactory.buildShape('circle', args);
  DMCanvas.setShapes([rect, rect2, circle]);
  DMCanvas.setActiveShape(0);
  DMCanvas.buildCanvas();

});
