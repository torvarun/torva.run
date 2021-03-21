import React, { Component } from 'react'
import * as d3 from 'd3'

type Props = { width: number }
class LeafsLines extends Component<Props> {
  componentDidMount() {
    this.draw()
  }

  render() {
    return <div id="leafsLines"></div>
  }

  draw() {
    const width = this.props.width
    const height = width / 2

    const svg = d3
      .select('#leafsLines')
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const color = d3.scaleOrdinal(d3.schemeBlues[7].reverse())

    const simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3
          .forceLink()
          .id(function (d) {
            return d.id
          })
          .distance(280))
          .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width / 2, height / 2))

    // add the tooltip area to the webpage
    const tooltip = d3
      .select('#leafsLines')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 50)

      d3.json('./data/leafs_pairings.json', function (pairings: any) {
        const link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(pairings.links)
        .enter().append('line')
        .attr('stroke-width', function (d) {
          if(d.strength > 5)
            return Math.sqrt(d.strength * 2/3)
          return 0
        })

        const node = svg
        .append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(pairings.nodes)
        .enter().append('circle')
        .attr('r', function (d) { return d.toi*d.toi/30000 })
        .attr('fill', function (d) { return color(d.group) })
        .call(d3.drag()
              .on('start', dragstarted)
              .on('drag', dragged)
              .on('end', dragended))
              .on('mousemove', function (event: any, d: any) {
                tooltip
                  .transition()
                  .duration(200)
                  .style('opacity', .9)
                tooltip.html(d.id)
                  .style('left', (event.pageX - 225) + 'px')
                  .style('top', (event.pageY - 28) + 'px')

                d3.select(this).style('fill', 'grey') 
              })
              .on('mouseout', function (d) {
                tooltip.transition()
                .duration(500)
                .style('opacity', 0)
                d3.select(this).style('fill', color(d.group)) 
              })

              node.append('title')
              .text(function (d) { return d.id })

              simulation
              .nodes(pairings.nodes)
              .on('tick', ticked)

              simulation.force('link')
              .links(pairings.links)

              function ticked() {
                link
                .attr('x1', function (d) { return d.target.x })
                .attr('y1', function (d) { return d.target.y })
                .attr('x2', function (d) { return d.source.x })
                .attr('y2', function (d) { return d.source.y })

                node
                .attr('cx', function (d) { return d.x })
                .attr('cy', function (d) { return d.y })
              }
    })

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
      d.fy = d.y
    }

    function dragged(event: any, d: any) {
      d.fx = event.x
      d.fy = event.y
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0)
        d.fx = null
      d.fy = null
    }

  }
}

export default LeafsLines
