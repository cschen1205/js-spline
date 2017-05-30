var expect    = require("chai").expect;
var jsspline = require("../src/jsspline");

describe("B Spline", function() {
  it("should create a interpolated b-spline", function(){
      var curve = new jsspline.BSpline({
          steps: 100
      });
      for(var i = 0; i < 100; ++i) {
         curve.addWayPoint({ x: i, y: Math.sin(Math.PI * i * 0.2), z: 0.0});
      }
      console.log("nodes: " + curve.nodes.length);
      expect(curve.nodes.length).to.equal(9700);
  });

});