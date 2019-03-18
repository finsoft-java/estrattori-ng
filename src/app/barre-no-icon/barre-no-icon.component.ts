import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as d3 from 'd3';

@Component({
  selector: 'app-barre-no-icon',
  templateUrl: './barre-no-icon.component.html',
  styleUrls: ['./barre-no-icon.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BarreNoIconComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private chartId;
  @Input() private tweenEnabled;
  @Input() private tweenDuration;
  @Input() private data: Array<any>;

  barData;
  height
  width
  computedWidth
  computedHeight
  resizeWidth;
  tachScale;
  heightImage;
  heightSingleBar;
  dist;
  pathLine;
  maxWidthBar;
  leftMargin;
  valueBar;
  percentBar;
  startBars;
  startValues;
  endLabels;
  widthImage;
  sectionHeight;
  widthTriangle;
  heightTriangle;
  n;

  heightImageDetail
  leftMarginDetail
  pathLineDetail

  tmpY
  tmpYDetail = 0

  tooltipBar

  ratio
  element
  svg

  constructor(private ngZone: NgZone) { }

  ngOnInit() {

    if (this.data) {
      this.barData = this.data
    }
    if (!this.chartId) {
      this.chartId = 'bar-' + Math.floor((Math.random() * 1000) + 1);
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

  initChart() {

    this.width = 700;
    this.leftMargin = this.width * 0.1;
    this.endLabels = this.width * 0.45;
    this.startBars = this.width * 0.55;
    this.startValues = this.width * 0.48;
    this.tachScale = 1;


    this.dist = 20;
    this.heightSingleBar = 10;
    this.maxWidthBar = this.width * 0.3;

    this.pathLine = "M " + this.leftMargin + " 1 L " + (this.width - this.leftMargin) + " 1";

    this.element = this.chartContainer.nativeElement;

    /* --- SVG --- */
    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-bar')

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'bars');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsBar');

    /* ---  VALUES LAYER --- */
    this.svg.append('g')
      .attr('class', 'valuesBar');

    /* --- LINES LAYER --- */
    this.svg.append('g')
      .attr('class', 'linesBar');


  }

  drawChart() {

    let barData = this.barData
    let data = this.barData
    let height = this.height
    let dist = this.dist
    let endLabels = this.endLabels
    let heightSingleBar = this.heightSingleBar
    let tooltipBar = this.tooltipBar
    let startBars = this.startBars
    let maxWidthBar = this.maxWidthBar
    let rightRoundedRect = this.rightRoundedRect
    let loop = this.loop
    let valueBar = this.valueBar
    let startValues = this.startValues
    let formatPercent = this.formatPercent
    let pathLine = this.pathLine
    let width = this.width

    let element = this.element
    let svg = this.svg
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    // let formatCurrency = this.formatCurrency

    //trovo il valore massimo
    var maxValue = 0;

    for (var i = 0; i < data.data.length; i++) {

      var currentData = data.data[i];

      for (var i2 = 0; i2 < currentData.subdata.data.length; i2++) {

        var currentSubdata = currentData.subdata.data[i2];

        if (Number(currentSubdata.value) > maxValue) {
          maxValue = Number(currentSubdata.value);
        }

      }

    }

    height = 0;

    for (var i = 0; i < data.data.length; i++) {

      var currentData = data.data[i];

      height = height + 2 * dist;

      var labels = svg.select('.labelsBar').attr('class', 'labelsBar linkFromJson');

      for (var i2 = 0; i2 < currentData.subdata.data.length; i2++) {

        var currentSubdata = currentData.subdata.data[i2];

        //scrivo labels
        labels
          .append('a')
          .attr('class', 'linkFromJson')
          .attr('href', function (d) {
            return currentSubdata.href ? currentSubdata.href : null
          })
          .attr('class', function (d) {
            return currentSubdata.href ? 'linkTitle' : null
          })
          .append('text')
          .text(function () {
            if (currentSubdata.label.length > 30) {
              return currentSubdata.label.slice(0, 27) + '...'
            }
            else {
              return currentSubdata.label;
            }
          })
          .attr('full-text', currentSubdata.label)
          .attr("x", function () {
            return endLabels
          })
          .attr("y", function () {
            return height
          })
          .attr("text-anchor", "end")
          .attr("fill", function () {
            if (i == 0) {
              return data.colors[i]
            } else {
              return "black"
            }
          })
          .attr("font-size", heightSingleBar + 'px')
          .attr("font-weight", "bold")
          .on("mouseover", function (d) {
            if (this.getAttribute('full-text').length <= 30) {
              return
            }
            // Define the div for the tooltip
            tooltipBar = d3.select("body").append("div")
              .attr("class", "tooltip-bar")
              .style("opacity", 0);
            tooltipBar.transition()
              .duration(200)
              .style("opacity", 1);
            tooltipBar.html(this.getAttribute('full-text'))
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 28) + "px");
          })
          .on("mouseout", function (d) {
            if (this.getAttribute('full-text').length <= 27) {
              return
            }
            tooltipBar.transition()
              .duration(500)
              .style("opacity", 0);
            tooltipBar.remove()
          })
          .on('click', function (d) {
            if (!currentSubdata.href) {
              d3.event.stopPropagation()
            }
          });

        //disegno barre
        if (Number(currentSubdata.value) > 0) {
          var pathBar = svg.select(".bars").append("path");
          pathBar.attr("fill", data.colors[i]);
          var d0 = rightRoundedRect(startBars, (height - heightSingleBar), 1, heightSingleBar, heightSingleBar / 2);
          var d1 = rightRoundedRect(startBars, (height - heightSingleBar), maxWidthBar * (Number(currentSubdata.value) / maxValue), heightSingleBar, heightSingleBar / 2);

          if (tweenEnabled) {
            loop(pathBar, d0, d1, this);
          } else {
            pathBar.attr("d", d1);
          }

        }//fine if disegno barre

        if (i2 < (currentData.subdata.data.length - 1)) {
          height = height + 2 * heightSingleBar
        }

      }//fine for subdata

    }//fine for

    //scrivo valori
    height = 0;

    valueBar = svg.select('.valuesBar')
      .selectAll('text');

    for (var n = 0; n < data.data.length; n++) {

      height = height + 2 * dist;
      valueBar.data(data.data[n].subdata.data)
        .enter()
        .append('text')
        .text(function (d) {
          if (tweenEnabled) {
            return 0
          } else {
            return d.value
          }
        })
        .attr("x", function () {
          return (startValues);
        })
        .attr("y", function (d, i) {
          var currentHeight = height
          if (i < (data.data[n].subdata.data.length - 1)) {
            height = height + 2 * heightSingleBar
          }
          return currentHeight
        })
        .attr("fill", function (i) {
          if (n == 0) {
            return data.colors[n];
          } else {
            return "black"
          }
        })
        .attr("font-size", heightSingleBar + 'px')
        .attr("font-weight", function () {
          if (n == 0) {
            return "bold"
          } else {
            return "normal"
          }
        });
    }

    //animazione dei valori
    if (tweenEnabled) {

      valueBar = svg.select('.valuesBar')
        .selectAll('text');

      valueBar.transition().duration(tweenDuration)
        .tween('text', function (d) {
          if (Number(d.value) > 0) {
            var i = d3.interpolate(0, Number(d.value));
            var label = this;
            return function (t) {
              return d3.select(label).text(formatPercent(Number(i(t))));
            };
          }
        })

    }//fine animazione

    height = height + heightSingleBar + dist;

    //disegno linee
    svg.select(".linesBar")
      .append('path')
      .attr('d', pathLine)
      .attr("stroke", "#BDBDBD")
      .attr("stroke-width", '1');

    //disegno linee
    svg.select(".linesBar")
      .append('path')
      .attr('d', pathLine)
      .attr("stroke", "#BDBDBD")
      .attr("stroke-width", '1')
      .attr("transform", 'translate(0,' + (height - 1) + ')');

    //rapporto larghezza/altezza
    ratio = width / height;

    svg.attr("preserveAspectRatio", "xMidYMid")
      .attr("viewBox", "0 0 " + width + " " + height);

    if (this.detectIE()) {
      this.svg = svg
      this.width = width
      this.ratio = ratio
      if (this.svg.node().getBBox().width <= width) {
        svg.attr('height', (this.svg.node().getBBox().width / ratio))
      }
      else {
        svg.attr('height', height)
      }
    }

  }//fine drawChartNoIcon



  rightRoundedRect(x, y, width, height, radius) {
    if (width >= radius) {
      return "M " + x + " , " + y
        + " h " + (width - radius)
        + " a " + radius + " , " + radius + " 0 0 1 " + radius + " , " + radius
        + " v " + (height - 2 * radius)
        + " a " + radius + " , " + radius + " 0 0 1 " + -radius + " , " + radius
        + " h " + (radius - width)
        + " z ";
    }
    else {
      radius = width;
      return "M " + x + " , " + y
        + " h " + (width - radius)
        + " a " + radius + " , " + radius + " 0 0 1 " + radius + " , " + radius
        + " v " + (height - 2 * radius)
        + " a " + radius + " , " + radius + " 0 0 1 " + -radius + " , " + radius
        + " h " + (radius - width)
        + " z ";
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
    return value.toFixed(2)

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
