import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, NgZone } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-segmenti',
  templateUrl: './segmenti.component.html',
  styleUrls: ['./segmenti.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SegmentiComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private chartId;
  @Input() private tweenEnabled;
  @Input() private tweenDuration;
  @Input() private data: Array<any>;

  segmentsData;
  height
  width
  widthSegment
  heightImage = 30
  circles
  points
  lastX = 0
  ratio

  element
  svg

  constructor(private ngZone: NgZone) {
  }



  ngOnInit() {


    if (this.data) {
      this.segmentsData = this.data
    }
    if (!this.chartId) {
      this.chartId = 'segments-' + Math.floor((Math.random() * 1000) + 1);
    }

    if (this.tweenEnabled) {
      this.tweenEnabled = true;
    }

    if (this.tweenDuration) {
      this.tweenDuration = this.tweenDuration
    } else {
      this.tweenDuration = 1500;
    }
    if (!this.chartId) {
      this.chartId = 'progress-' + Math.floor((Math.random() * 1000) + 1);
    }



    this.initChart();
    this.drawChart();

    if (this.detectIE()) {
      window.onresize = (e) => {
        this.ngZone.run(() => {
          if (this.svg.node().getBBox().width < this.width) {
            this.svg.attr('height', (this.svg.node().getBBox().width / this.ratio))
          } else {
            this.svg.attr('height', this.height)
          }
        });
      };
    }
  }


  ngOnChanges() {
    // if (this.chart) {
    //   this.updateChart();
    // }
  }

  initChart() {

    if (!this.width && !this.height) {
      this.width = 900;
      this.height = 200;

    } else {

      this.width = parseInt(this.width, 10);
      this.height = parseInt(this.height, 10);

    }

    this.widthSegment = this.width / (this.segmentsData.data.length - 1);

    /* --- SVG --- */

    this.element = this.chartContainer.nativeElement;

    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-segments');

    /* --- SERIES LAYER --- */
    this.svg.append('g')
      .attr('class', 'series');

    /* --- CHART LAYER --- */
    this.svg.append('g')
      .attr('class', 'chart');

    /* --- POINTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'points');

    /* --- LEGEND TITLE LAYER --- */
    this.svg.append('g')
      .attr('class', 'legendTitle');

    /* --- LEGEND LABLE LAYER --- */
    this.svg.append('g')
      .attr('class', 'legendLabel');

    /* ---   ICONS LAYER --- */
    this.svg.append('g')
      .attr('class', 'iconsSegment');

  }

  drawChart() {

    let element = this.element
    let svg = this.svg
    let segmentsData = this.segmentsData.data
    let data = this.segmentsData.data
    let height = this.height
    let width = this.width
    let widthSegment = this.widthSegment
    let heightImage = this.heightImage
    let circles = this.circles
    let points = this.points
    let lastX = this.lastX

    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    let createSegments = this.createSegments
    let createCircles = this.createCircles
    let createIcons = this.createIcons
    let createLabels = this.createLabels

    for (let i = 0; i < segmentsData.length - 1; i++) {

      createSegments(segmentsData[i], segmentsData[i].color, i, this);
      createCircles(segmentsData[i], segmentsData[i].color, i, this);
      createIcons(segmentsData[i], i, this)
      createLabels(segmentsData[i], segmentsData[i].color, i, this);

    }

    // createLastSegment(segmentsData[segmentsData.length - 1].color);

    svg.attr("preserveAspectRatio", "xMidYMid meet")
      .attr('viewBox', '-50 100 ' + (width + 100) + ' ' + (height))

    //rapporto larghezza/altezza
    ratio = width / height

    //rapporto larghezza/altezza
    ratio = width / height

    if (this.detectIE()) {
      this.svg = svg
      this.width = width
      this.ratio = ratio
      if (svg.node().getBBox().width <= width) {
        svg.attr('height', (svg.node().getBBox().width / ratio))
      }
      else {
        svg.attr('height', height)
      }
    }

  }

  createSegments(data, color, i, scope) {

    scope.points = scope.svg.select('.points')
      .append("line")
      .attr("x1", scope.lastX)
      .attr("y1", 150)
      .attr("x2", function () {
        if (i == 0) {
          scope.lastX = scope.widthSegment / 2;
          return (0 + (scope.widthSegment / 2))
        } else {
          scope.lastX = scope.lastX + scope.widthSegment;
          return scope.lastX;
        }
      })
      .attr("y2", 150)
      .style("stroke", color)
      .attr("stroke-width", 4);
  }

  createCircles(data, color, i, scope) {
    scope.circles = scope.svg.select('.points')
      .append("circle")
      .attr("cx", scope.lastX - 5)
      .attr("cy", 150)
      .attr("r", 5)
      .style("fill", color);
  }

  createIcons(data, i, scope) {
    if (data.icon === 'N.A.') {
      scope.points = scope.svg.select('.points')
        .append('text')
        .text(data.icon)
        .attr("x", scope.lastX - 5)
        .attr('y', 190)
        .attr('text-anchor', 'middle')

      return
    }
    if (data.is64) {
      scope.svg.select(".points")
        .append("image")
        .attr("xlink:xlink:href", data.icon)
        .attr("x", scope.lastX - 5 - (scope.heightImage / 2))
        .attr("y", 170)
        // .attr("width", widthImage)
        .attr("height", scope.heightImage)

    }
    else {
      scope.svg.select(".points")
        .append("image")
        .attr("xlink:href", data.icon)
        .attr("x", scope.lastX - 5 - (scope.heightImage / 2))
        .attr("y", 170)
        // .attr("width", widthImage)
        .attr("height", scope.heightImage)
    }

  }

  createLabels(data, color, i, scope) {
    scope.points = scope.svg.select('.points')
      .append("text")
      .text(data.label)
      .style("fill", "#000000")
      .attr("x", scope.lastX - 5)
      .attr("y", 220)
      .call(scope.wrap, scope.widthSegment * 1.2, scope.lastX)
      .attr("font-family", "sans-serif")
      .attr("font-size", "13px")
      .attr("text-anchor", "middle");
  }

  wrap(text, width, lastX) {
    text.each(function () {
      let text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1,
        x = text.attr("x"),
        y = text.attr("y"),
        dy = 0,
        tspan = text.text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
            .attr("x", lastX - 5)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .attr("text-anchor", "middle")
            .text(word);
          var prev = d3.select(tspan.node().previousElementSibling)
            .attr("x", lastX - 5)
            .attr("text-anchor", "middle");
        }
      }

    });

  }


  detectIE(): boolean {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      return true
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      return true
    }

    return false;
  }



  // updateChart() {
  //   // update scales & axis
  //   this.xScale.domain(this.data.map(d => d[0]));
  //   this.yScale.domain([0, d3.max(this.data, d => d[1])]);
  //   this.colors.domain([0, this.data.length]);
  //   this.xAxis.transition().call(d3.axisBottom(this.xScale));
  //   this.yAxis.transition().call(d3.axisLeft(this.yScale));

  //   let update = this.chart.selectAll('.bar')
  //     .data(this.data);

  //   // remove exiting bars
  //   update.exit().remove();

  //   // update existing bars
  //   this.chart.selectAll('.bar').transition()
  //     .attr('x', d => this.xScale(d[0]))
  //     .attr('y', d => this.yScale(d[1]))
  //     .attr('width', d => this.xScale.bandwidth())
  //     .attr('height', d => this.height - this.yScale(d[1]))
  //     .style('fill', (d, i) => this.colors(i));

  //   // add new bars
  //   update
  //     .enter()
  //     .append('rect')
  //     .attr('class', 'bar')
  //     .attr('x', d => this.xScale(d[0]))
  //     .attr('y', d => this.yScale(0))
  //     .attr('width', this.xScale.bandwidth())
  //     .attr('height', 0)
  //     .style('fill', (d, i) => this.colors(i))
  //     .transition()
  //     .delay((d, i) => i * 10)
  //     .attr('y', d => this.yScale(d[1]))
  //     .attr('height', d => this.height - this.yScale(d[1]));
  // }
}