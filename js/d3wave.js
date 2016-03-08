import d3 from 'd3';

export default function(){

var h = 600,
    w = window.innerWidth;

var tick = 0;
var SQ_SIZE=300;
var SQ_PADDING = 20;
var path_draw_delay = 0;

var svg = d3.select('#wave-vis').append('svg:svg')
.attr('viewBox',"0 0 "+ w +" "+ h);

var gX = 0;
var gY = Math.round(h/8);
var gTransform = "translate(" + gX + " " + gY + ")";
var tY = SQ_SIZE-SQ_PADDING;
var tX = SQ_SIZE-100;
var textTransform =  "translate(" + tX + " " + tY + ")";

var x = d3.scale.linear()
    .domain([0, 4])
    .range([-w/4, 5/4*w]);

var y = d3.scale.linear()
    .domain([-1, 1])
    .range([h-200, 50]);

var line = d3.svg.line()
.interpolate('linear')
.x(function(d){return d.x;})
.y(function(d){return d.y;});

var brushStroke = d3.svg.line()
.interpolate('basis')
.x(function(d){return d.x;})
.y(function(d){return d.y;});

var clipStroke = d3.svg.line()
.interpolate('basis-closed')
.x(function(d){return d.x;})
.y(function(d){return d.y;});

var otherPoints = d3.range(0, 9, 1.5).map(function(t) {
  return {value: t, x: x(t), y: y(Math.sin(t*Math.PI/2))};
});

drawLine(otherPoints);

var rectBeforeTransform = 'translate(0,-300)scale(1,1.75)';
var rectAfterTransform = 'translate(0,0)scale(1,1.75)';
var bottomGroup = svg.append('g')
.attr('transform',gTransform);

bottomGroup.append('rect')
.attr('width',w)
.attr('height',SQ_SIZE)
.attr('fill','rgba(93,183,222,.7)')
.attr('transform',rectBeforeTransform)
.style({'transform-origin':'50% 50%','opacity':0})
.transition()
.delay(500)
.duration(800)
.style('opacity',1)
.attr('transform',rectAfterTransform);

bottomGroup.append('svg:text')
.attr('transform-origin','right top')
.attr('fill','black')
.attr('font-size',30)
.attr('transform',textTransform)
.text('mbow');

var topGroup = svg.append('g')
.attr('style','clip-path:url(#wave-clip);')
.append('g')
.attr('transform',gTransform);

topGroup.append('rect')
.attr('width',w)
.attr('height',SQ_SIZE)
.attr('fill','rgba(0,0,0,.5)')
.attr('transform',rectBeforeTransform)
.style({'transform-origin':'50% 50%','opacity':0})
.transition()
.delay(500)
.duration(800)
.style('opacity',1)
.attr('transform',rectAfterTransform);

topGroup.append('svg:text')
.attr('transform-origin','right top')
.attr('fill','white')
.attr('font-size',30)
.attr('transform',textTransform)
.text('mbow');

var points = d3.range(0, 9, 1).map(function(t) {
  return {value: t, x: x(t), y: y(Math.sin(t*Math.PI/2))};
});

drawLine(points,true);


function drawLine(data,makeClipPath){

  var force = d3.layout.force()
    .linkDistance(2)
    .linkStrength(2)
    .gravity(0)
    .charge(-100)
    .size([w, h]);

  var nodes = force.nodes(),
    links = force.links();

  data.forEach(function(d){
    var node = {};
    node.x = d.x;
    node.y = d.y;
    node.value = d.value;
    nodes.push(node);
    links.push({source: node, target: nodes[nodes.length - 1] || node});
  });
  var newPath = svg.append('path')
  .data([nodes])
  .attr('d', brushStroke);

  newPath.style('stroke-dasharray', function(d) {
    var l = d3.select(this).node().getTotalLength();
    return l + 'px, ' + l + 'px';
  })
  .style('stroke-dashoffset', function(d) {
    return d3.select(this).node().getTotalLength() + 'px';
  })
  .transition()
  .delay(path_draw_delay)
  .duration(2000)
  .style('stroke-dashoffset', '0px');

  path_draw_delay += 300;

  if(makeClipPath){
    includeClippath(nodes);
  }

  d3.timer(function(){
    tick += 1;
    nodes.forEach(function(node){
      node.y = y(Math.sin(node.value*Math.PI/2 + tick/300));
    });
    newPath.attr("d", brushStroke);
  },20);

}

function includeClippath(nodes){
  var bottomRightNode = {x:nodes[nodes.length-1].x,		//make nodes to close in bottom of path
              y:h,
              fixed:true};
  var bottomLeftNode = {x:nodes[0].x,
              y:h,
              fixed:true};

  var clipNodes = [bottomRightNode,bottomLeftNode].concat(nodes);

  var clipPath = svg.append('defs').append('clipPath')
  .attr('id',"wave-clip")
  .append('path')
  .data([clipNodes])
  .attr('d',clipStroke);

  clipPath.attr('transform','translate(0,200)')
  .transition()
  .delay(500)
  .duration(500)
  .ease('out')
  .attr('transform','translate(0,0)');

  d3.timer(function(){
    tick += 1;
    clipNodes.forEach(function(node){
      if(!node.fixed){					//only move the wave nodes
        node.y = y(Math.sin(node.value*Math.PI/2 + tick/300));
      }
    });
    clipPath.attr("d", clipStroke);
  },20);
}
};
