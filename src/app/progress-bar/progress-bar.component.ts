import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, NgZone } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private chartId;
  @Input() private tweenEnabled;
  @Input() private tweenDuration;
  @Input() private data: Array<any>;

  progressData;
  height
  width
  computedWidth
  computedHeight
  resizeWidth
  startBarsX
  startBarsY
  widthEmptyBar
  heightBars
  emptyBarProgress
  fullBarProgress
  widthValuesFull
  widthLabelFull
  widthLabelEmpty
  widthValuesEmpty
  widthPathFull
  heightPathFull
  widthPathEmpty
  heightPathEmpty
  ratio

  element
  svg

  constructor(private ngZone: NgZone) {
  }



  ngOnInit() {


    if (this.data) {
      this.progressData = this.data
    }
    if (!this.chartId) {
      this.chartId = 'progress-' + Math.floor((Math.random() * 1000) + 1);
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
      this.height = 300;

    } else {

      this.width = parseInt(this.width, 10);
      this.height = parseInt(this.height, 10);

    }

    this.widthEmptyBar = this.width * 0.6
    this.heightBars = this.height * 0.05
    this.startBarsX = this.width * 0.2
    this.startBarsY = this.height * 0.5

    /* --- SVG --- */

    this.element = this.chartContainer.nativeElement;

    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-progress')

    /* --- EMPTY BAR LAYER --- */
    this.svg.append('g')
      .attr('class', 'emptyBarProgress');

    /* --- FULL BAR LAYER --- */
    this.svg.append('g')
      .attr('class', 'fullBarProgress');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsProgress');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsProgress');

    /* --- FULL BOX LAYER --- */
    this.svg.append('g')
      .attr('class', 'fullBox');

    /* --- EMPTY BOX LAYER --- */
    this.svg.append('g')
      .attr('class', 'emptyBox');

  }

  drawChart() {

    let element = this.element
    let svg = this.svg
    let progressData = this.progressData
    let data = this.progressData
    let height = this.height
    let width = this.width
    let computedWidth = this.computedWidth
    let computedHeight = this.computedHeight
    let resizeWidth = this.resizeWidth
    let startBarsX = this.startBarsX
    let startBarsY = this.startBarsY
    let widthEmptyBar = this.widthEmptyBar
    let heightBars = this.heightBars
    let emptyBarProgress = this.emptyBarProgress
    let fullBarProgress = this.fullBarProgress
    let widthValuesFull = this.widthValuesFull
    let widthLabelFull = this.widthLabelFull
    let widthLabelEmpty = this.widthLabelEmpty
    let widthValuesEmpty = this.widthValuesEmpty
    let widthPathFull = this.widthPathFull
    let heightPathFull = this.heightPathFull
    let widthPathEmpty = this.widthPathEmpty
    let heightPathEmpty = this.heightPathEmpty
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let loop = this.loop

    //barra vuota
    emptyBarProgress = svg.select('.emptyBarProgress')
      .append('rect')
      .attr('x', startBarsX)
      .attr('y', startBarsY)
      .attr('width', widthEmptyBar)
      .attr('height', heightBars)
      .attr('fill', progressData.color_empty)
      .attr('stroke', progressData.color_border)

    //barra piena
    var pathFullBar = svg.select(".fullBarProgress").append("path")
    pathFullBar.attr("fill", progressData.color_full)
    var x00 = startBarsX
    var y00 = startBarsY
    var x01 = x00
    var y01 = y00
    var x02 = x01
    var y02 = y01 + heightBars
    var x03 = x00
    var y03 = y02
    var d0 = "M " + x00 + " " + y00 + " L " + x01 + " " + y01 + " L " + x02 + " " + y02 + " L " + x03 + " " + y03 + " Z"
    var x10 = startBarsX
    var y10 = startBarsY
    var x11 = x10 + widthEmptyBar * (progressData.full.percent / 100)
    var y11 = y10
    var x12 = x11
    var y12 = y11 + heightBars
    var x13 = x10
    var y13 = y12
    var d1 = "M " + x10 + " " + y10 + " L " + x11 + " " + y11 + " L " + x12 + " " + y12 + " L " + x13 + " " + y13 + " Z"
    if (tweenEnabled) {
      loop(pathFullBar, d0, d1, this);
    }
    else {
      pathFullBar.attr("d", d1)
    }

    //percentuali agli estremi della barra
    svg.select(".percentsProgress").append("text")
      .text(function () {
        return formatPercent(progressData.min)
      })
      .attr("font-size", heightBars + 'px')
      .attr("x", function () {
        return startBarsX - 5;
      })
      .attr("y", function () {
        return startBarsY + (heightBars * 0.8)
      })
      .attr("font-weight", "normal")
      .attr("fill", 'black')
      .attr("text-anchor", "end")

    svg.select(".percentsProgress").append("text")
      .text(function () {
        return formatPercent(progressData.max);
      })
      .attr("font-size", heightBars + 'px')
      .attr("x", function () {
        return (startBarsX + widthEmptyBar + 5);
      })
      .attr("y", function () {
        return startBarsY + (heightBars * 0.8)
      })
      .attr("font-weight", "normal")
      .attr("fill", 'black');

    //label della barra full
    var labelFullBox = svg.select(".fullBox")
      .append('text')
      .attr('x', function () {
        if (tweenEnabled) {
          return startBarsX
        }
        else {
          return startBarsX + widthEmptyBar * (progressData.full.percent / 100)
        }
      })
      .attr('y', function () {
        widthLabelFull = this.getBBox().width
        return startBarsY - height * 0.17
      })
      .text(progressData.full.label)
      .attr('text-anchor', 'middle')

    //valori della barra full
    var valuesFullBox = svg.select(".fullBox")
      .append('text')
      .text(function () {
        return formatPercent(progressData.full.percent) + ' - ' + formatCurrency(data.full.value, 2, true)
      })
      .attr('x', function () {
        if (tweenEnabled) {
          return startBarsX
        }
        else {
          return startBarsX + widthEmptyBar * (progressData.full.percent / 100)
        }
      })
      .attr('y', function () {
        widthValuesFull = this.getBBox().width
        return startBarsY - height * 0.1
      })
      .attr('text-anchor', 'middle')

    //fumetto full
    widthPathFull = (Math.max(widthLabelFull, widthValuesFull) * 1.1)
    heightPathFull = height * 0.2

    x00 = startBarsX - (widthPathFull / 2)
    y00 = startBarsY - height * 0.25
    var x01 = x00 + widthPathFull
    var y01 = y00
    var x02 = x01
    var y02 = y01 + heightPathFull
    var x03 = x00 + widthPathFull / 2 + 10
    var y03 = y02
    var x04 = x03 - 10
    var y04 = y03 + 7
    var x05 = x04 - 10
    var y05 = y03
    var x06 = x00
    var y06 = y05
    var d00 = "M " + x00 + " " + y00 + " L " + x01 + " " + y01 + " L " + x02 + " " + y02 + " L " + x06 + " " + y06 + " Z"
    var d01 = "M " + x03 + " " + y03 + " L " + x04 + " " + y04 + " L " + x05 + " " + y05 + " Z"
    x10 = startBarsX + widthEmptyBar * (progressData.full.percent / 100) - (widthPathFull / 2)
    var y10 = y00
    var x11 = x10 + widthPathFull
    var y11 = y10
    var x12 = x11
    var y12 = y02
    var x13 = x10 + widthPathFull / 2 + 10
    var y13 = y12
    var x14 = x13 - 10
    var y14 = y13 + 7
    var x15 = x14 - 10
    var y15 = y13
    var x16 = x10
    var y16 = y15
    var d10 = "M " + x10 + " " + y10 + " L " + x11 + " " + y11 + " L " + x12 + " " + y12 + " L " + x16 + " " + y16 + " Z"
    var d11 = "M " + x13 + " " + y13 + " L " + x14 + " " + y14 + " L " + x15 + " " + y15 + " Z"
    var pathFullBox00 = svg.select(".fullBox").append('path')

    pathFullBox00.attr('stroke', progressData.full.color_border)
      .attr('d', function () {
        if (tweenEnabled) {
          return d00
        }
        else {
          return d10
        }
      })
      .attr('fill', 'none')

    var pathFullBox01 = svg.select(".fullBox").append('path')
    pathFullBox01.attr('stroke', progressData.full.color_border)
      .attr('d', function () {
        if (tweenEnabled) {
          return d01
        } else {
          return d11
        }
      })
      .attr('class', 'triangle')
      .attr('fill', data.full.color_border)

    //label della barra empty
    var labelEmptyBox = svg.select(".emptyBox")
      .append('text')
      .text(data.empty.label)
      .attr('x', function () {
        // return startBarsX + widthEmptyBar
        return startBarsX + widthEmptyBar * (data.empty.percent / 100)
      })
      .attr('y', function () {
        widthLabelEmpty = this.getBBox().width
        return (startBarsY + heightBars + this.getBBox().height * 0.5 + height * 0.1)
      })
      .attr('text-anchor', 'middle')

    //valori della barra full
    var valuesEmptyBox = svg.select(".emptyBox")
      .append('text')
      .text(function () {
        return formatPercent(data.empty.percent) + ' - ' + formatCurrency(data.empty.value, 2, true)
      })
      .attr('x', function () {
        return startBarsX + widthEmptyBar * (data.empty.percent / 100)
      })
      .attr('y', function () {
        widthValuesEmpty = this.getBBox().width
        return (startBarsY + heightBars + this.getBBox().height * 0.5 + height * 0.17)
      })
      .attr('text-anchor', 'middle')

    //fumetto full
    widthPathEmpty = (Math.max(widthLabelEmpty, widthValuesEmpty) * 1.1)
    heightPathEmpty = height * 0.2

    var x20 = startBarsX + widthEmptyBar * (data.empty.percent / 100) - (widthPathEmpty / 2)
    var y20 = startBarsY + heightBars + height * 0.25 - heightPathEmpty
    var x21 = x20 + widthPathEmpty
    var y21 = y20
    var x22 = x21
    var y22 = y21 + heightPathEmpty
    var x23 = x20 + widthPathEmpty / 2 + 10
    var y23 = y20
    var x24 = x23 - 10
    var y24 = y20 - 7
    var x25 = x24 - 10
    var y25 = y20
    var x26 = x20
    var y26 = y22
    var d20 = "M " + x20 + " " + y20 + " L " + x21 + " " + y21 + " L " + x22 + " " + y22 + " L " + x26 + " " + y26 + " Z"
    var d21 = "M " + x23 + " " + y23 + " L " + x24 + " " + y24 + " L " + x25 + " " + y25 + " Z"

    var pathEmptyBox00 = svg.select(".emptyBox").append('path')
    pathEmptyBox00.attr('stroke', data.empty.color_border)
      .attr('d', function () {
        return d20
      })
      .attr('fill', 'none')
    var pathEmptyBox01 = svg.select(".emptyBox").append('path')
    pathEmptyBox01.attr('stroke', data.empty.color_border)
      .attr('d', function () {
        return d21
      })
      .attr('fill', data.empty.color_border)

    //animazione
    if (tweenEnabled) {
      labelFullBox.transition().duration(tweenDuration).attr('x', startBarsX + widthEmptyBar * (data.full.percent / 100))
      valuesFullBox.transition().duration(tweenDuration).attr('x', startBarsX + widthEmptyBar * (data.full.percent / 100))
      pathFullBox00.transition().duration(tweenDuration).attr('d', d10)
      pathFullBox01.transition().duration(tweenDuration).attr('d', d11)
    }



    svg.attr("preserveAspectRatio", "xMidYMid meet")
      .attr("viewBox", "0 0 " + width + " " + height)

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

  loop(path, d0, d1, scope) {

    path
      .attr("d", d0)
      .transition()
      .duration(scope.tweenDuration)
      .attr("d", d1)
  }

  formatPercent(value): String {
    return value.toFixed(2).replace('.', ',') + ' %';

  }

  formatCurrency = function (value, precision, enable) {
    if (!enable) {
      return value;
    }

    var parsedValue;
    var decimalPrecision = parseInt(precision || 2, 10);

    if (typeof value == 'string') {
      value = value.replace(',', '.');
      parsedValue = parseFloat(value).toFixed(decimalPrecision);
    }

    if (typeof value == 'number') {
      parsedValue = parseFloat(value.toString()).toFixed(decimalPrecision);
    }

    if (!isNaN(parsedValue)) {

      var valueStr = parsedValue.toString();
      var valueStrDec = valueStr.slice(-decimalPrecision);
      var valueFormat = [];

      valueStr = valueStr.substring(0, valueStr.length - (decimalPrecision + 1));

      while (valueStr.length > 3) {
        valueFormat.unshift(valueStr.slice(-3));
        valueStr = valueStr.substring(0, valueStr.length - 3);
      }

      valueFormat.unshift(valueStr);

      if (valueFormat[0] !== '-') {
        return valueFormat.join('.') + ',' + valueStrDec;
      }

    } else {
      return '';
    }
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