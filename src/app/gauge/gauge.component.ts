import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as d3 from 'd3';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.less'],
  encapsulation: ViewEncapsulation.None
  
})
export class GaugeComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private chartId;
  @Input() private tweenEnabled;
  @Input() private tweenDuration;
  @Input() private data: Array<any>;

  // Vars
  tachometerData;
  tachHeight
  height
  width
  computedWidth
  computedHeight
  resizeWidth
  heightScroll
  widthScroll
  computedWidthScroll
  computedHeightScroll
  isBar = false
  lastScrollTop = 0
  timeout = false
  delay = 250
  tachScale = 1
  xRight;

  radius;
  startAngle;
  endAngle;
  pi;

  pie;
  slice;
  arc;

  //variabili lancetta
  pathLancetta;
  pathLancettaSim;
  indicator;
  indicatorSim;
  pathLancettaScroll;
  pathLancettaSimScroll;
  indicatorScroll;
  indicatorSimScroll;
  color;

  //labels
  arcMinLabels;
  arcMaxLabels;

  //titoli
  titleValue;
  subtitle;
  info;
  titleLinePath = 'M0 0 L30 0 L38 6 L46 0 L72 0 L46 0 L38 6 L30 0 z';
  titleLine;
  bar;
  titleValueScroll;
  labelValue;
  tooltipSelected;

  //shadow
  shadow;
  filter;

  //paths icona
  pathGroup;
  pathRound = 'M1.8988834619522312,54.500003933906555 ' +
  'C1.8988834619522312,25.4944790720281 25.393358600073782,2.000003933906556 54.39888346195224,2.000003933906556 ' +
  'C83.40440832383064,2.000003933906556 106.89888346195221,25.4944790720281 106.89888346195221,54.500003933906555 ' +
  'C106.89888346195221,83.50552879578501 83.40440832383064,107.00000393390656 54.39888346195224,107.00000393390656 ' +
  'C25.393358600073782,107.00000393390656 1.8988834619522312,83.50552879578501 1.8988834619522312,54.500003933906555 z';

  pathLine1 = 'M97.62697979270365,84.96629435908324 L108.30113726764182,109.123598118154';
  pathLine2 = 'M77.96405812834371,102.38202497608773 L106.61574398212531,108.00000259447631 ';
  maxChildWidth = 351.00;
  isEuro;
  isString;
  // isIE = /*@cc_on!@*/false || !!document.documentMode;
  // isFirefox = typeof InstallTrigger !== 'undefined';
  // isEdge = !isIE && !!window.StyleMedia;
  leftMargin = 20;
  lenghtBar = 300;
  dist = 2;
  heightBar = 15;
  ratio

  element
  svg


  constructor(private ngZone: NgZone) {
  }



  ngOnInit() {


    if (this.data) {
      this.tachometerData = this.data
    }
    if (!this.chartId) {
      this.chartId = 'tachometer-' + Math.floor((Math.random() * 1000) + 1);
    }

    if (this.tweenEnabled) {
      this.tweenEnabled = true;
    }

    if (this.tweenDuration) {
      this.tweenDuration = this.tweenDuration
    } else {
      this.tweenDuration = 1500;
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

    this.tachScale = 1;
    this.pi = Math.PI;
    this.startAngle = -90 * (this.pi / 180);
    this.endAngle = 90 * (this.pi / 180);

    this.element = this.chartContainer.nativeElement;

    /* --- SVG --- */
    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-tachometer')
    // .append('g')
    // .attr('class', 'chart-container-child');

    /* --- SLICES LAYER --- */
    this.svg.append('g')
      .attr('class', 'slices');

    /* --- INDICATOR LAYER --- */
    this.svg.append('g')
      .attr('class', 'indicator');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsTachometer');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'titlesTachometer');

    /* --- ICON LAYER --- */
    this.svg.append('g')
      .attr('class', 'icon');

    /* --- ICON INFO LAYER --- */
    this.svg.append('g')
      .attr('class', 'iconInfo');

    /* --- TITLE LINE LAYER --- */
    this.svg.append('g')
      .attr('class', 'titleLine');

    /* --- TOOLTIP LAYER --- */
    this.svg.append('g')
      .attr('class', 'tooltipTachometer');

    /* --- SIZE --- */
    if (!this.width && !this.height) {

      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      // this.width = 200
      // this.height = 200


    } else {

      this.width = parseInt(this.width, 10);
      this.height = parseInt(this.height, 10);

    }



    this.radius = 100;

    this.xRight = this.radius;
    if (!this.resizeWidth) {
      this.resizeWidth = window.innerWidth;

    }

    this.pathLancetta = 'M 0 -5 A 5 5 0 0 1 0 5 L ' + (-this.radius - 3) + ' 0 z';
    this.pathLancettaSim = this.pathLancetta;



  }

  drawChart() {

    let element = this.element
    let svg = this.svg
    let tachometerData = this.tachometerData.data
    let data = this.tachometerData.data
    let height = this.height
    let width = this.width

    let coordFromAngle = this.coordFromAngle
    let pi = this.pi
    let radius = this.radius
    let startAngle = this.startAngle
    let endAngle = this.endAngle
    let pie = this.pie
    let arc = this.arc
    let pathLancetta = this.pathLancetta
    let pathLancettaSim = this.pathLancettaSim
    let showTooltip = this.showTooltip

    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    let formatCurrency = this.formatCurrency



    data.range = this.convertPercent(data);

    this.arc = d3.svg.arc()
      .innerRadius(radius - (radius * 0.35))
      .outerRadius(radius)
      .padAngle(0.02);

    this.pie = d3.layout.pie()
      .sort(null)
      .value(function (d) {
        return d.percentValue;
      })
      .startAngle(startAngle)
      .endAngle(endAngle)(data.range);



    this.slice = svg.select('.slices')
      .selectAll('path.slice')
      .data(this.pie)
      .enter()
      .append('g')
      .attr('class', 'slice')
      .attr('id', 'archi')

    let scope = this
    this.slice.append('path')
      .attr('d', this.arc)
      .attr('fill', function (d) {
        return d.data.color;
      })
      .on('click', function (d) {
        showTooltip(d, scope)
      })
      .style("cursor", "pointer")
      .each(function (d, i) {

        this._current = d;
      });

    var svgDefs = svg.append('defs');
    var mainGradient = svgDefs.append('linearGradient')
      .attr('id', 'gradienteLancetta');

    mainGradient.append('stop')
      .attr('stop-color', '#474757')
      .attr('offset', '0');
    mainGradient.append('stop')
      .attr('stop-color', '#7e7e7e')
      .attr('offset', '1');

    //indicator
    this.indicator = svg.select('.indicator')
      .append('path')
      .attr('d', pathLancetta)
      .attr('transform', function () {

        if (tweenEnabled) {
          return 'rotate(0)';
        }
        return 'rotate(' + (180 * data.actualValuePercent) / 100 + ')'

      })
      //  .style('fill', 'url(#gradienteLancetta)')
      .attr('fill', 'gray')
      .style('stroke', 'gray')
      .style('stroke-width', '1')

    if (data.simulationPresence) {

      this.indicatorSim = svg.select('.indicator')
        .append('path')
        .attr('class', 'sim')
        .attr('d', pathLancettaSim)
        .attr('transform', function () {

          if (tweenEnabled) {
            return 'rotate(0)';
          }
          return 'rotate(' + (180 * data.simulationValuePercent) / 100 + ')'

        })
        .style('fill-opacity', '0')
        .style('stroke', 'gray')
        .style('stroke-width', '1')
    }



    //Draw LAbels
    this.arcMinLabels = svg.select('.labelsTachometer')
      .selectAll('text')
      .attr('class', 'labelsTachometer')
      .data(data.range)
      .enter()
      .append('text')
      .text(function (d) {

        if (d.showMinLabel) {
          // minLabels.push(Number(d.min))
          if (this.isEuro) {
            return formatCurrency(d.min, 2, true)
          }
          else {
            if (this.isString) {
              return d.minLabel;
            }
            else {
              // return formatPercent(d.min)
              return d.minLabel
            }

          }
          // return d.min > 100 ? formatCurrency(d.min):d.min;
        }

      })

      .attr('x', function (d, i) {
        var angle = (180 * d.minPercentValue) / 100
        var coord = coordFromAngle(-(angle * pi) / 180, radius);
        if (d.minPercentValue < 40) {
          return coord.x - 5
        }
        else if (d.minPercentValue > 60) {
          return coord.x + 5
        }
        else {
          return coord.x
        }

      })
      .attr('y', function (d, i) {
        var angle = (180 * d.minPercentValue) / 100
        var coord = coordFromAngle(-(angle * pi) / 180, radius);
        if (d.minPercentValue > 40 && d.minPercentValue < 60) {
          return coord.y - 7
        }
        return coord.y
      })
      .attr('text-anchor', function (d) {
        if (d.minPercentValue < 40) {
          return 'end'
        }
        else if (d.minPercentValue > 60) {
          return 'start'
        }
        else {
          return 'middle'
        }
      })

    this.arcMaxLabels = svg.select('.labelsTachometer')
      .selectAll('labelsTachometer.text')
      .attr('class', 'labels')
      .data(data.range)
      .enter()
      .append('text')
      .text(function (d) {
        if (d.showMaxLabel) {
          if (this.isEuro) {
            return formatCurrency(d.max, 2, true)
          }
          else {
            if (this.isString) {
              return d.maxLabel
            }
            else {
              // return formatPercent(d.max)
              return d.maxLabel
            }

          }
        }
      })

      .attr('x', function (d, i) {
        var angle = (180 * d.maxPercentValue) / 100
        var coord = coordFromAngle(-(angle * pi) / 180, radius);
        if (d.maxPercentValue < 40) {
          return coord.x - 5
        }
        else if (d.maxPercentValue > 60) {
          return coord.x + 5
        }
        else {
          return coord.x
        }

      })
      .attr('y', function (d, i) {
        var angle = (180 * d.maxPercentValue) / 100
        var coord = coordFromAngle(-(angle * pi) / 180, radius);
        if (d.maxPercentValue > 40 && d.maxPercentValue < 60) {
          return coord.y - 7
        }
        return coord.y
      })
      .attr('text-anchor', function (d) {
        if (d.maxPercentValue < 40) {
          return 'end'
        }
        else if (d.maxPercentValue > 60) {
          return 'start'
        }
        else {
          return 'middle'
        }
      })


    //shadow
    this.filter = svg.select('.indicator')
      .append("filter")
      .attr("id", "drop-shadow")
      .append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", 2)


    this.shadow = svg.select('.indicator')
      .append('ellipse')
      .attr('cx', 0)
      .attr('cy', 10)
      .attr('rx', 35)
      .attr('ry', 2)
      .attr('fill', 'lightgray')
      .style("filter", "url(#drop-shadow)");








    if (tweenEnabled) {
      this.tween(this.indicator, data.actualValuePercent);
      if (data.simulationPresence) {
        this.tween(this.indicatorSim, data.simulationValuePercent);
      }

    }




    /* --- RE-ALIGNMENT --- */
    this.computedWidth = element.getElementsByClassName('chart-container-tachometer')[0].getBBox().width
    var x = element.getElementsByClassName('chart-container-tachometer')[0].getBBox().x

    this.computedHeight = element.getElementsByClassName('chart-container-tachometer')[0].getBBox().height;
    var y = element.getElementsByClassName('chart-container-tachometer')[0].getBBox().y


    svg.attr("preserveAspectRatio", "xMidYMin meet")
      .attr("viewBox", (-radius - 100) + ' ' + (y - 20) + ' ' + (2 * radius + 200) + ' ' + (this.computedHeight + 40))


    ratio = this.computedWidth / this.computedHeight


    if (this.detectIE()) {
      this.svg = svg
      this.width = width
      this.ratio = ratio
      if (svg.node().getBBox().width <= this.computedWidth) {
        svg.attr('height', (svg.node().getBBox().width / ratio))
      }
      else {
        svg.attr('height', this.computedHeight)
      }
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

  coordFromAngle(angle, radius) {

    var coordObj = {

      'x': (-Math.cos(angle) * radius),
      'y': (Math.sin(angle) * radius)

    }

    return coordObj;

  }

  convertPercent(chartData) {

    var range = chartData.range;
    var minValue, maxValue;
    minValue = range[0].min;
    maxValue = range[range.length - 1].max;
    if (maxValue > 100) {
      this.isEuro = true;
    }
    else {
      this.isEuro = false;

      //se labelvalue non
      if (!range[0].minLabel.match(/^\d+$/) && !range[0].minLabel.match(/^\d+\.\d+$/)) {
        this.isString = true;
      }
      else {
        this.isString = false;
      }
    }
    chartData.actualValuePercent = (chartData.actualValue * 100) / (maxValue - minValue);
    if (chartData.simulationPresence) {
      chartData.simulationValuePercent = (chartData.simulationValue * 100) / (maxValue - minValue);
    }
    for (var i = 0; i < range.length; i++) {
      var percentValue;
      var rangeValue = range[i].max - range[i].min;
      range[i].percentValue = (rangeValue * 100) / (maxValue - minValue);
      range[i].minPercentValue = (range[i].min * 100) / (maxValue - minValue);
      range[i].maxPercentValue = (range[i].max * 100) / (maxValue - minValue);
    }

    return range;

  }

  tween(svgElement, rotationValue) {


    svgElement.transition()
      .duration(this.tweenDuration)
      .attrTween("transform", this.tween)
      .attr('transform', function () {
        if ((180 * rotationValue) / 100 < 180) {
          return 'rotate(' + (180 * rotationValue) / 100 + ')'
        }
        else {
          return 'rotate(179.999)'
        }
      })

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

  showTooltip(item, scope) {
    scope.svg.select('.tooltipTachometer').selectAll("*").remove()
    if (scope.tooltipSelected === item) {
      scope.tooltipSelected = 0
      return
    }
    var centroid = scope.arc.centroid(item)
    var label = item.data.tooltipLabel
    scope.svg.select('.tooltipTachometer').append('path')
    // var tooltipPath =
    // var tooltip = slice.append('g')
    //   .attr('class','tooltip')
    var testo = scope.svg.select('.tooltipTachometer').append('text')
      .attr('x', centroid[0])
      .attr('y', function () {
        return centroid[1] - 17
      })
      .text(label)
      .attr('font-size', '14')
      .attr('altezza', 14)
      .attr('text-anchor', 'middle')
      .attr('fill', scope.tachometerData.colorTooltipText)
      .attr('width', function () {
        return this.getBBox().width
      })

    // var g = svg.append('g').attr('id','tooltip')
    // g.append('path')


    var x0 = centroid[0]
    var y0 = centroid[1]
    var x1 = x0 - 5
    var y1 = y0 - 5
    var x2 = x1 - (Number(testo.attr('width'))) / 2 - 20
    var y2 = y1
    var x3 = x2
    var y3 = y2 - (Number(testo.attr('altezza'))) - 20
    var x4 = x3 + Number(testo.attr('width')) + 10 + 40
    var y4 = y3
    var x5 = x4
    var y5 = y1
    var x6 = x0 + 5
    var y6 = y5
    var pathTooltip = 'M ' + x0 + ' ' + y0 + ' L ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2 + ' L ' + x3 + ' ' + y3 + ' L ' + x4 + ' ' + y4 + ' L ' + x5 + ' ' + y5 + ' L ' + x6 + ' ' + y6 + ' Z'
    scope.svg.select('.tooltipTachometer').select('path')
      .attr('d', pathTooltip)
      .attr('fill', scope.tachometerData.colorTooltip)

    scope.tooltipSelected = item
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
}