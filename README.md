# js-spline
Package provides javascript implementation of algorithms that generate various types of splines from a set of control way points


# Usage

### BSpline

The sample code below create a b-spline curve which create 9700 nodes (i.e., interpolated points) from 100 way points

```javascript
var jsspline = require("js-spline");

var curve = new jsspline.BSpline({
    steps: 100 // number of interpolated points between 4 way points
});
for(var i = 0; i < 100; ++i) {
 curve.addWayPoint({ x: i, y: Math.sin(Math.PI * i * 0.2), z: 0.0});
}
console.log("nodes: " + curve.nodes.length);

// first node
curve.nodes[0].x;
curve.nodes[0].y;
curve.nodes[0].z;

// second node
curve.nodes[1].x;
curve.nodes[1].y;
curve.nodes[1].z;
// distance from the first node
curve.distances[1]

// third node
curve.nodes[2].x;
curve.nodes[2].y;
curve.nodes[2].z;
// distance from the first node
curve.distances[2]
```