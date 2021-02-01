import React, { Component } from 'react'
import * as d3 from 'd3'

function  calculateFill(d){
  if(d.correlation === "TRUE")
    return "red";
  return "green"; //CHANGE TO RED
}

class GravityChart extends Component {

  componentDidMount() {
    this.draw();
  }

  render() {
    return <div id="gravityChart"></div>
  }

  draw() {

    const margin = { top: 40, right: 20, bottom: 30, left: 40 }
    const width = this.props.width - margin.left - margin.right
    const height = 480 - margin.top - margin.bottom

    /* 
     * value accessor - returns the value to encode for a given data object.
     * scale - maps value to a visual display encoding, such as a pixel position.
     * map function - maps from data value to display value
     * axis - sets up axis
     */ 

    // setup x 
    var xFrom = function(d) { return d.usg_with;}, // data -> value
    xScale = d3.scaleLinear().range([0, width]), // value -> display
    xMapFrom = function(d) { return xScale(xFrom(d));}, // data -> display
    xAxis = d3.axisBottom().scale(xScale),
    xTo = function(d) { return d.usg_without;}, // data -> value
    xMapTo = function(d) { return xScale(xTo(d));}, // data -> display
    xVals = []; //Array for x-values

    // setup y
    var yFrom = function(d) { return d.efg_with;}, // data -> value
    yScale = d3.scaleLinear().range([height, 0]), // value -> display
    yMapFrom = function(d) { return yScale(yFrom(d));}, // data -> display
    yAxis = d3.axisLeft().scale(yScale),
    yTo = function(d) { return d.efg_without;}, // data -> value
    yMapTo = function(d) { return yScale(yTo(d));}, // data -> display
    yVals = []; //Array for y-values

    // setup fill color
    var cValue = function(d) { return d.correlation;},
    color = d3.scaleOrdinal(d3.schemeCategory10);;

    // add the graph canvas to the body of the webpage
    var svg = d3.select("#gravityChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 100)
    .append("g")
    .attr("class", "g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("image")
    .attr("x", 5)
    .attr("y", -40)
    .attr("xlink:href","./assets/golden_state_warriors.svg")
    .attr("width", 30)
    .attr("height", 30);

    svg.append("text")
    .attr("x", 40)
    .attr("y", -20)
    .attr("class", "chart-title")
    .text("Warriors With and Without Curry");

    // add the tooltip area to the webpage
    var tooltip = d3.select('#gravityChart').append("div")
    .attr("class", "tooltip")
    .style("opacity", 50);

    // load data
    d3.csv("./data/curry.csv").then(function(data) {
      //console.log(data)
      // change string (from CSV) into number format
      data.forEach(function(d, i) {
        d.usg_with = +d.usg_with;
        d.usg_without = +d.usg_without;
        d.efg_with = +d.efg_with;
        d.efg_without = +d.efg_without;
      });

      // don't want dots overlapping axis, add in buffer to data domain
      xScale.domain([d3.min(data, xFrom)-1, d3.max(data, xTo)+5/2]);
      yScale.domain([d3.min(data, yFrom)-1, d3.max(data, yTo)+2]);

      // x-axis
      svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
      svg.append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", height - 6)
      .style("text-anchor", "end")
      .text("Usage Rate");

      // y-axis
      svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
      svg.append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Effective Field Goal Percentage");

      // Draw lines
      svg.selectAll('.line')
      .data(data)
      .enter()
      .append("line")
      .attr("x1",xMapFrom)
      .attr("x2",xMapTo)
      .attr("y1",yMapFrom)
      .attr("y2",yMapTo)
      .attr("stroke", "#000")
      .attr('stroke-width', "1.5px");

      // draw dots
      svg.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 5)
      .attr("cx", xMapTo)
      .attr("cy", yMapTo)
      .style("fill", function(d){return calculateFill(d);})
      .on("mousemove", function(event, d) {
        tooltip.transition()
        .duration(200)
        .style("opacity", .9);

        console.log(event.pageX, event.pageY);

        tooltip.html(d.player)
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 30) + "px");

        d3.select(this).style("fill", "orange"); 
      })
      .on("mouseout", function(event, d) {
        tooltip.transition()
        .duration(500)
        .style("opacity", 0);
        d3.select(this).style("fill", calculateFill(d)); 
      });

      svg.append("text")
      .attr("class", "label")
      .attr("x", width - 25)
      .attr("y", 14)
      .style("text-anchor", "end")
      .text("Better Without Curry");

      svg.append("rect")
      .attr("x", width - 20)
      .attr("y", 0)
      .attr("width", 20)
      .attr("height", 20)
      .style("text-anchor", "end")
      .style("fill", "green");

      svg.append("text")
      .attr("class", "label")
      .attr("x", width - 25)
      .attr("y", 44)
      .style("text-anchor", "end")
      .text("Worse Without Curry");

      svg.append("rect")
      .attr("x", width - 20)
      .attr("y", 30)
      .attr("width", 20)
      .attr("height", 20)
      .style("text-anchor", "end")
      .style("fill", "red");
    });
  }

}

export default GravityChart
