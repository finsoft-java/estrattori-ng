import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as d3 from 'd3';

@Component({
  selector: 'app-barre-double',
  templateUrl: './barre-double.component.html',
  styleUrls: ['./barre-double.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BarreDoubleComponent implements OnInit {
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

    this.width = 700
    this.leftMargin = this.width * 0.2
    this.widthImage = this.width / 16
    this.endLabels = this.width * 0.45
    this.startBars = this.width * (3 / 8)
    this.maxWidthBar = this.width * (3 / 8)
    this.sectionHeight = this.width * 0.18
    this.dist = this.width / 32
    this.heightSingleBar = this.dist / 2
    this.widthTriangle = 12
    this.heightTriangle = 5
    // startValues = width*0.48
    this.tachScale = 1;

    this.element = this.chartContainer.nativeElement;

    /* --- SVG --- */
    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-bar')

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'bars');

    /* --- ICONS LAYER --- */
    this.svg.append('g')
      .attr('class', 'icons');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsBar');

    /* ---  VALUES LAYER --- */
    this.svg.append('g')
      .attr('class', 'valuesBar');

    /* ---  VALUES LAYER --- */
    this.svg.append('g')
      .attr('class', 'secondValuesBar');

    /* --- LINES LAYER --- */
    this.svg.append('g')
      .attr('class', 'linesBar');

    /* --- LINES LAYER --- */
    this.svg.append('g')
      .attr('class', 'triangles');

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
    let loop = this.loop
    let valueBar = this.valueBar
    let startValues = this.startValues
    // let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let pathLine = this.pathLine
    let width = this.width
    let heightImage = this.heightImage
    let leftMargin = this.leftMargin
    let percentBar = this.percentBar
    let tmpY = this.tmpY
    let tmpYDetail = this.tmpYDetail
    let pathLineDetail = this.pathLineDetail
    let leftMarginDetail = this.leftMarginDetail
    let widthImage = this.widthImage
    let rightRoundedRect = this.rightRoundedRect
    let widthTriangle = this.widthTriangle
    let heightTriangle = this.heightTriangle
    let sectionHeight = this.sectionHeight
    let computedWidth = this.computedWidth
    let computedHeight = this.computedHeight

    let element = this.element
    let svg = this.svg
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration

    var maxValue = 0;

    for (var i = 0; i < data.data.length; i++) {

      var currentData = data.data[i];

      if (parseInt(currentData.value) > maxValue) {

        maxValue = parseInt(currentData.value);

      }

      var secondCurrentData = currentData.subdata.data[0];

      if (parseInt(secondCurrentData.value) > maxValue) {
        maxValue = parseInt(secondCurrentData.value);
      }

    }

    var currentY = 0;

    for (let n = 0; n < data.data.length; n++) {

      var currentData = data.data[n];

      //disegno immagini
      // svg.select(".icons")
      //   .append("image")
      //   .attr("xlink:href", currentData.image)
      //   .attr("x", leftMargin)
      //   .attr("y", currentY)
      //   .attr("width", widthImage)
      //   .attr("height", widthImage);

      if (currentData.is64) {
        svg.select(".icons")
          .append("image")
          .attr("xlink:xlink:href", currentData.image)
          .attr("x", leftMargin)
          .attr("y", currentY)
          .attr("width", widthImage)
          .attr("height", widthImage)

      }
      else {
        svg.select(".icons")
          .append("image")
          .attr("xlink:href", currentData.image)
          .attr("x", leftMargin)
          .attr("y", currentY)
          .attr("width", widthImage)
          .attr("height", widthImage);
      }




      //disegno barre
      if (parseInt(currentData.value) > 0) {

        var pathBar = svg.select(".bars").append("path");
        pathBar.attr("fill", data.colors[0]);
        var d0 = rightRoundedRect(startBars, (currentY + 2 * dist + heightSingleBar), 1, heightSingleBar + 5, (heightSingleBar + 5) / 2);
        var d1 = rightRoundedRect(startBars, (currentY + 2 * dist + heightSingleBar), maxWidthBar * (parseInt(currentData.value) / maxValue), heightSingleBar + 5, (heightSingleBar + 5) / 2);

        if (tweenEnabled) {
          loop(pathBar, d0, d1, this);
        } else {
          pathBar.attr("d", d1);
        }

      }//fine disegno barre

      //disegno seconda barra
      var secondCurrentData = currentData.subdata.data[0];

      if (parseInt(secondCurrentData.value) > 0) {

        var pathBar = svg.select(".bars").append("path");
        pathBar.attr("fill", data.colors[1]);
        var d0 = rightRoundedRect(startBars, (currentY + 4 * dist + heightSingleBar), 1, heightSingleBar + 5, (heightSingleBar + 5) / 2);
        var d1 = rightRoundedRect(startBars, (currentY + 4 * dist + heightSingleBar), maxWidthBar * (parseInt(secondCurrentData.value) / maxValue), heightSingleBar + 5, (heightSingleBar + 5) / 2);

        if (tweenEnabled) {
          loop(pathBar, d0, d1, this);
        } else {
          pathBar.attr("d", d1);
        }

      }//fine disegno seconda barra

      var widthLine = maxWidthBar * (Math.max(parseInt(currentData.value), parseInt(secondCurrentData.value)) / maxValue);

      pathLine = "M " + startBars + " " + (currentY + dist) + " L " + (startBars + widthLine) + " " + (currentY + dist);

      //disegno linee separatrici
      svg.select(".linesBar")
        .append('path')
        .attr('d', pathLine)
        .attr("stroke", "#BDBDBD")
        .attr("stroke-width", '1')

      //scrivo labels
      svg.select('.labelsBar').attr('class', 'labelsBar linkFromJson')
        .append('a')
        .attr('class', 'linkFromJson')
        .attr('href', function (d) {
          return currentData.href ? currentData.href : null
        })
        .attr('class', function (d) {
          return currentData.href ? 'linkTitle' : null
        })
        .append('text')
        .text(function () {
          return currentData.label;
        })
        .attr("font-size", '12px')
        .attr("x", function () {
          return (leftMargin + widthImage + 10);
        })
        .attr("y", function () {
          return (currentY + dist + 3)
        })
        .attr("fill", function (d) {
          return "black";
        })
        .on('click', function (d) {
          if (!currentData.href) {
            d3.event.stopPropagation()
          }
        });



      //triangoli del primo valore
      var d0 = "M " + (startBars - (widthTriangle / 2)) + " " + (currentY + dist + 14) + " L " + (startBars + (widthTriangle / 2)) + " " + (currentY + dist + 14) + " L " + (startBars) + " " + (currentY + dist + heightTriangle + 14) + " Z"
      var d1 = "M " + (startBars + ((maxWidthBar * (parseInt(currentData.value) / maxValue) - (widthTriangle / 2)))) + " " + (currentY + dist + 14) + " L " + (startBars + ((maxWidthBar * (parseInt(currentData.value) / maxValue) + (widthTriangle / 2)))) + " " + (currentY + dist + 14) + " L " + (startBars + (maxWidthBar * (parseInt(currentData.value) / maxValue))) + " " + (currentY + dist + heightTriangle + 14) + " Z"

      var pathTriangle = svg.select('.triangles').append('path');
      pathTriangle.attr('fill', '#088A08');
      pathTriangle.attr('d', d1);

      //triangoli del secondo valore
      var d0 = "M " + (startBars - (widthTriangle / 2)) + " " + (currentY + 3 * dist + heightSingleBar + 5) + " L " + (startBars + (widthTriangle / 2)) + " " + (currentY + 3 * dist + heightSingleBar + 5) + " L " + (startBars) + " " + (currentY + 3 * dist + heightSingleBar + heightTriangle + 5) + " Z"
      var d1 = "M " + (startBars + ((maxWidthBar * (parseInt(secondCurrentData.value) / maxValue) - (widthTriangle / 2)))) + " " + (currentY + 3 * dist + heightSingleBar + 5) + " L " + (startBars + ((maxWidthBar * (parseInt(secondCurrentData.value) / maxValue) + (widthTriangle / 2)))) + " " + (currentY + 3 * dist + heightSingleBar + 5) + " L " + (startBars + (maxWidthBar * (parseInt(secondCurrentData.value) / maxValue))) + " " + (currentY + 3 * dist + heightSingleBar + heightTriangle + 5) + " Z"

      var pathTriangle = svg.select('.triangles').append('path');
      pathTriangle.attr('fill', '#088A08');
      pathTriangle.attr('d', d1);



      valueBar = svg.select('.valuesBar').append('text')
      valueBar.text(function () {
        return formatCurrency(currentData.value, 2, true)
      })
        .attr("x", function () {
          return startBars + maxWidthBar * (parseInt(currentData.value) / maxValue) - widthTriangle
        })
        .attr("y", function () {
          return (2 * dist + currentY)
        })
        .attr("fill", "black")
        .attr("font-size", heightSingleBar + 'px')
        .attr('text-anchor', 'end');

      var secondValueBar = svg.select('.secondValuesBar').append('text');

      secondValueBar.text(function () {
        return formatCurrency(secondCurrentData.value, 2, true)
      })
        .attr("x", function () {
          return startBars + maxWidthBar * (parseInt(secondCurrentData.value) / maxValue) - widthTriangle
        })
        .attr("y", function () {
          return (3 * dist + heightSingleBar + 13 + currentY)
        })
        .attr("fill", "black")
        .attr("font-size", heightSingleBar + 'px')
        .attr('text-anchor', 'end');


      currentY = currentY + sectionHeight;

    }//fine for

    pathLine = "M 0 " + (currentY + dist) + " L " + width + " " + (currentY + dist);

    //disegno linea finale
    svg.select(".linesBar")
      .append('path')
      .attr('d', pathLine)
      .attr("stroke", "#BDBDBD")
      .attr("stroke-width", '1');


    pathLine = "M " + (width * (2 / 3) - 30) + " " + (currentY + 2 * dist) + " L " + (width * (2 / 3) + 40) + " " + (currentY + 2 * dist);

    //disegno linea duration
    svg.select(".linesBar")
      .append('path')
      .attr('d', pathLine)
      .attr("stroke", data.colors[0])
      .attr("stroke-width", '3');

    svg.select('.labelsBar')
      .append('text')
      .text(function () {
        return 'Duration';
      })
      .attr("font-size", '15px')
      .attr("x", function () {
        return (width * (2 / 3) + 40)
      })
      .attr("y", function () {
        return (currentY + 2 * dist + this.getBBox().height + 2)
      })
      .attr("fill", function (d) {
        return "black";
      })
      .attr('text-anchor', 'end');

    pathLine = "M " + (width * (2 / 3) + 150) + " " + (currentY + 2 * dist) + " L " + (width * (2 / 3) + 50) + " " + (currentY + 2 * dist);

    //disegno linea vita residua
    svg.select(".linesBar")
      .append('path')
      .attr('d', pathLine)
      .attr("stroke", data.colors[1])
      .attr("stroke-width", '3');

    svg.select('.labelsBar')
      .append('text')
      .text(function () {
        return 'Vita Residua';
      })
      .attr("font-size", '15px')
      .attr("x", function () {
        return (width * (2 / 3) + 150)
      })
      .attr("y", function () {
        return (currentY + 2 * dist + this.getBBox().height + 2)
      })
      .attr("fill", function (d) {
        return "black";
      })
      .attr('text-anchor', 'end');


    computedWidth = svg.node().getBBox().width
    computedHeight = svg.node().getBBox().height

    this.height = computedHeight;
    height = this.height

    svg.attr("preserveAspectRatio", "xMidYMin meet")
      .attr("viewBox", "0 0 " + width + " " + computedHeight);


    //rapporto larghezza/altezza
    ratio = width / height;

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

  }

  rightRoundedRect(x, y, width, height, radius) {
    if(width >= radius) {
      return "M " + x + " , " + y
           + " h " + (width - radius)
           + " a " + radius + " , " + radius + " 0 0 1 " + radius + " , " + radius
           + " v " + (height - 2 * radius)
           + " a " + radius + " , " + radius + " 0 0 1 " + -radius + " , " + radius
           + " h " + (radius - width)
           + " z ";
    } else {
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

  formatPercent(value): String {
    return value.toFixed(2).replace('.', ',') + ' %';

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
