import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as d3 from 'd3';

@Component({
  selector: 'app-barre-icon',
  templateUrl: './barre-icon.component.html',
  styleUrls: ['./barre-icon.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BarreIconComponent implements OnInit {
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

    this.width = 800;
    this.leftMargin = this.width * 0.1;
    this.tachScale = 1;
    this.heightImage = 70;

    this.dist = 20;
    this.heightSingleBar = 20;
    this.maxWidthBar = this.width - ((2 * this.leftMargin) + this.heightImage + 5 + this.dist);

    this.pathLine = "M " + this.leftMargin + " 1 L " + (this.width - this.leftMargin) + " 1";

    this.element = this.chartContainer.nativeElement;

    /* --- SVG --- */
    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-bar')

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'bars');

    /* --- IMAGES LAYER --- */
    this.svg.append('g')
      .attr('class', 'imagesBar');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsBar');

    /* ---  VALUES LAYER --- */
    this.svg.append('g')
      .attr('class', 'valuesBar');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsBar');

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
    let loop = this.loop
    let valueBar = this.valueBar
    let startValues = this.startValues
    let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let pathLine = this.pathLine
    let width = this.width
    let heightImage = this.heightImage
    let leftMargin = this.leftMargin
    let percentBar = this.percentBar
    let detailFunction = this.detailFunction

    let element = this.element
    let svg = this.svg
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration

    for (var i = 0; i < data.data.length; i++) {

      var currentData = data.data[i];

      //disegno linee separatrici
      svg.select(".linesBar")
        .append('path')
        .attr('d', pathLine)
        .attr("stroke", "#BDBDBD")
        .attr("stroke-width", '1')
        .attr("transform", 'translate(0,' + i * ((2 * dist) + heightImage) + ')');

      //disegno immagini
      if (currentData.is64) {
        svg.select(".imagesBar")
          .append("image")
          .attr("xlink:xlink:href", currentData.image)
          .attr("x", leftMargin)
          .attr("y", dist + (i * (heightImage + 2 * dist)))
          .attr("width", heightImage)
          .attr("height", heightImage)
          .attr('opacity', function () {
            if (currentData.percent > 0) {
              return 1
            } else {
              return 0.2
            }
          })
      }
      else {
        svg.select(".imagesBar")
          .append("image")
          .attr("xlink:href", currentData.image)
          .attr("x", leftMargin)
          .attr("y", dist + (i * (heightImage + 2 * dist)))
          .attr("width", heightImage)
          .attr("height", heightImage)
          .attr('opacity', function () {
            if (currentData.percent > 0) {
              return 1
            } else {
              return 0.2
            }
          })
      }


      //disegno barre
      if (currentData.percent > 0) {

        var pathBar = svg.select(".bars").append("path")
        pathBar.attr("fill", data.colors[i])
        var x00 = dist + leftMargin + heightImage
        var y00 = dist + (heightImage - heightSingleBar) / 2 + i * (2 * dist + heightImage)
        var x01 = x00
        var y01 = y00
        var x02 = x01 + 5
        var y02 = y01 + heightSingleBar / 2
        var x03 = x01
        var y03 = y01 + heightSingleBar
        var x04 = x00
        var y04 = y03
        var d0 = "M " + x00 + " " + y00 + " L " + x01 + " " + y01 + " L " + x02 + " " + y02 + " L " + x03 + " " + y03 + " L " + x04 + " " + y04 + " Z"
        var x10 = dist + leftMargin + heightImage
        var y10 = dist + (heightImage - heightSingleBar) / 2 + i * (2 * dist + heightImage)
        var x11 = x10 + (currentData.percent * 0.01 * maxWidthBar)
        var y11 = y10
        var x12 = x11 + 5
        var y12 = y11 + heightSingleBar / 2
        var x13 = x11
        var y13 = y11 + heightSingleBar
        var x14 = x10
        var y14 = y13
        var d1 = "M " + x10 + " " + y10 + " L " + x11 + " " + y11 + " L " + x12 + " " + y12 + " L " + x13 + " " + y13 + " L " + x14 + " " + y14 + " Z";

        if (tweenEnabled) {
          loop(pathBar, d0, d1, this);
        } else {
          pathBar.attr("d", d1)
        }

      }//fine disegno barre

      //scrivo labels
      svg.select('.labelsBar').attr('class', 'labelsBar linkFromJson')
        .append('a')
        // .attr('class','linkFromJson')
        .attr('href', function (d) {
          console.log(currentData.href)
          return currentData.href ? currentData.href : null
        })
        .attr('class', function (d) {
          return currentData.href ? 'linkTitle' : null
        })
        .append('text')
        .text(function () {
          return currentData.label;
        })
        .attr("x", function () {
          return (leftMargin + heightImage + dist);
        })
        .attr("y", function () {
          if (currentData.percent > 0) {
            return dist + this.getBBox().height + i * (2 * dist + heightImage);
          } else {
            return dist + heightImage / 2 + i * (2 * dist + heightImage);
          }
        })
        .attr("fill", function (d) {
          return "black";
        })
        .attr("font-size", (heightImage - heightSingleBar) / 4 + 'px')
        .attr('opacity', function () {
          if (currentData.percent > 0) {
            return 1
          } else {
            return 0.2
          }
        })
        .on('click', function (d) {
          if (!currentData.href) {
            d3.event.stopPropagation()
          }
        });

    }//fine for

    valueBar = svg.select('.valuesBar')
      .selectAll('text')
      .data(data.data)
      .enter()
      .append('text')
      .text(function (d) {
        if (tweenEnabled) {
          return formatCurrency('0', 2, true) + ' €'
        } else {
          return formatCurrency(d.value, 2, true) + ' €'
        }
      })
      .attr("x", function () {
        return (leftMargin + heightImage + dist);
      })
      .attr("y", function (d, i) {
        if (d.percent > 0) {
          return dist + heightImage + i * (2 * dist + heightImage);
        } else {
          return dist + heightImage / 2 + this.getBBox().height + i * (2 * dist + heightImage);
        }
      })
      .attr("fill", "black")
      .attr("font-size", (heightImage - heightSingleBar) / 4 + 'px')
      .attr('opacity', function (d) {
        if (d.percent > 0) {
          return 1
        } else {
          return 0.2
        }
      })


    percentBar = svg.select('.percentsBar')
      .selectAll('text')
      .data(data.data)
      .enter()
      .append('text')
      .text(function (d) {
        if (d.percent > 0) {
          if (tweenEnabled) {
            return 0
          } else {
            return d.percent
          }
        }
      })
      .attr("x", function () {
        return (leftMargin + heightImage + dist + maxWidthBar);
      })
      .attr("y", function (d, i) {
        if (d.percent > 0) {
          return dist + heightImage + i * (2 * dist + heightImage);
        }
      })
      .attr("fill", function (i) {
        return data.colors[i];
      })
      .attr("font-size", (heightImage - heightSingleBar) / 4 + 'px')
      .attr("text-anchor", "end");

    //animazione di euro e percentuali
    if (tweenEnabled) {
      //euro
      valueBar
        .transition().duration(tweenDuration)
        .tween('text', function (d) {
          var i = d3.interpolate(0, d.value);
          var label = this;
          return function (t) {
            return d3.select(label).text(formatCurrency(i(t), 2, true) + ' €');
          };
        });

      //percentuali
      percentBar
        .transition().duration(tweenDuration)
        .tween('text', function (d) {
          if (d.percent > 0) {
            var i = d3.interpolate(0, d.percent);
            var label = this;
            return function (t) {
              return d3.select(label).text(formatPercent(Number(i(t))));
            };
          }
        })

    }//fine animazione di euro e percentuali

    let scope = this

    if (!barData.hideDetailButton) {
      svg.append('rect')
        .attr('x', ((width / 2) - 50))
        .attr('y', data.data.length * (2 * dist + heightImage))
        .attr('width', 100)
        .attr('height', 30)
        .attr('fill', function () {
          return 'white'
        })
        .attr('stroke', 'green')
        .attr('stroke-width', '1px')
        .on('click', function () {
          if (!barData.disableDetailButton) {
            detailFunction(scope)
          }
        })
        .attr("cursor", function () {
          if (!barData.disableDetailButton) {
            return "pointer"
          }
        })
        .attr('opacity', function () {
          if (barData.disableDetailButton) {
            return 0.5
          }
        })

      svg.append('text')
        .text(function () {
          return barData.button_string + ' +'
        })
        .attr('fill', 'green')
        .attr('font-size', '10px')
        .attr('x', width / 2)
        .attr('y', data.data.length * (2 * dist + heightImage) + 18)
        .attr('text-anchor', 'middle')
        .on('click', function () {
          if (!barData.disableDetailButton) {
            detailFunction(scope)
          }
        })
        .attr("cursor", function () {
          if (!barData.disableDetailButton) {
            return "pointer"
          }
        })
        .attr('opacity', function () {
          if (barData.disableDetailButton) {
            return 0.5
          }
        })
    }


    height = data.data.length * (2 * dist + heightImage) + 35;

    //rapporto larghezza/altezza
    ratio = width / height;

    svg.attr("preserveAspectRatio", "xMidYMin meet")
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

  }

  initChartDettaglio() {

    this.width = 800;
    this.leftMargin = this.width * 0.1;
    this.tachScale = 1;
    this.heightImage = 70;

    this.dist = 20;
    this.heightSingleBar = 20;
    this.maxWidthBar = this.width - ((2 * this.leftMargin) + this.heightImage + 5 + this.dist);


    this.leftMarginDetail = this.dist + this.leftMargin + this.heightImage
    this.heightImageDetail = this.heightImage / 2

    this.pathLine = "M " + this.leftMargin + " 1 L " + (this.width - this.leftMargin) + " 1";
    this.pathLineDetail = "M " + this.leftMarginDetail + " 1 L " + (this.width - this.leftMargin) + " 1";

    this.element = this.chartContainer.nativeElement;

    /* --- SVG --- */
    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-bar')

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'bars');

    /* --- IMAGES LAYER --- */
    this.svg.append('g')
      .attr('class', 'imagesBar');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsBar');

    /* ---  VALUES LAYER --- */
    this.svg.append('g')
      .attr('class', 'valuesBar');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsBar');

    /* --- LINES LAYER --- */
    this.svg.append('g')
      .attr('class', 'linesBar');

    /* ---  VALUES LAYER --- */
    this.svg.append('g')
      .attr('class', 'valuesBarDetail');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsBarDetail');

  }

  drawChartDettaglio() {

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
    let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let pathLine = this.pathLine
    let width = this.width
    let heightImage = this.heightImage
    let leftMargin = this.leftMargin
    let percentBar = this.percentBar
    let detailFunction = this.detailFunction
    let tmpY = this.tmpY
    let tmpYDetail = this.tmpYDetail
    let pathLineDetail = this.pathLineDetail
    let leftMarginDetail = this.leftMarginDetail
    let noDetailFunction = this.noDetailFunction

    let element = this.element
    let svg = this.svg
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration

    tmpY = 0


    for (var i = 0; i < data.data.length; i++) {

      var currentData = data.data[i];

      //disegno linee separatrici
      svg.select(".linesBar")
        .append('path')
        .attr('d', pathLine)
        .attr("stroke", "#BDBDBD")
        .attr("stroke-width", '1')
        .attr("transform", 'translate(0,' + tmpY + ')');

      //disegno immagini
      if (currentData.is64) {
        svg.select(".imagesBar")
          .append("image")
          .attr("xlink:xlink:href", currentData.image)
          .attr("x", leftMargin)
          .attr("y", dist + tmpY)
          .attr("width", heightImage)
          .attr("height", heightImage)
          .attr('opacity', function () {
            if (currentData.percent > 0) {
              return 1
            } else {
              return 0.2
            }
          })
      }
      else {
        svg.select(".imagesBar")
          .append("image")
          .attr("xlink:href", currentData.image)
          .attr("x", leftMargin)
          .attr("y", dist + tmpY)
          .attr("width", heightImage)
          .attr("height", heightImage)
          .attr('opacity', function () {
            if (currentData.percent > 0) {
              return 1
            } else {
              return 0.2
            }
          })
      }


      //disegno barre
      if (currentData.percent > 0) {

        var pathBar = svg.select(".bars").append("path")
        pathBar.attr("fill", data.colors[i])
        var x10 = dist + leftMargin + heightImage
        var y10 = dist + (heightImage - heightSingleBar) / 2 + tmpY
        var x11 = x10 + (currentData.percent * 0.01 * maxWidthBar)
        var y11 = y10
        var x12 = x11 + 5
        var y12 = y11 + heightSingleBar / 2
        var x13 = x11
        var y13 = y11 + heightSingleBar
        var x14 = x10
        var y14 = y13
        var d1 = "M " + x10 + " " + y10 + " L " + x11 + " " + y11 + " L " + x12 + " " + y12 + " L " + x13 + " " + y13 + " L " + x14 + " " + y14 + " Z";

        pathBar.attr("d", d1)

      }//fine disegno barre

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
        .attr("x", function () {
          return (leftMargin + heightImage + dist);
        })
        .attr("y", function () {
          if (currentData.percent > 0) {
            return dist + this.getBBox().height + tmpY;
          } else {
            return dist + heightImage / 2 + tmpY;
          }
        })
        .attr("fill", function (d) {
          return "black";
        })
        .attr("font-size", (heightImage - heightSingleBar) / 4 + 'px')
        .attr('opacity', function () {
          if (currentData.percent > 0) {
            return 1
          } else {
            return 0.2
          }
        })
        .on('click', function (d) {
          if (!currentData.href) {
            d3.event.stopPropagation()
          }
        });


      svg.select('.valuesBar')
        .append('text')
        .text(function () {
          return formatCurrency(currentData.value, 2, true)
        })
        .attr("x", function () {
          return (leftMargin + heightImage + dist);
        })
        .attr("y", function () {
          if (currentData.percent > 0) {
            return dist + heightImage + tmpY;
          } else {
            return dist + heightImage / 2 + this.getBBox().height + tmpY;
          }
        })
        .attr("fill", "black")
        .attr("font-size", (heightImage - heightSingleBar) / 4 + 'px')
        .attr('opacity', function () {
          if (currentData.percent > 0) {
            return 1
          } else {
            return 0.2
          }
        })


      svg.select('.percentsBar')
        .append('text')
        .text(function () {
          if (currentData.percent > 0) {
            return formatPercent(currentData.percent)
          }
        })
        .attr("x", function () {
          return (leftMargin + heightImage + dist + maxWidthBar);
        })
        .attr("y", function () {
          if (currentData.percent > 0) {
            return dist + heightImage + tmpY;
          }
        })
        .attr("fill", function (i) {
          return data.colors[i];
        })
        .attr("font-size", (heightImage - heightSingleBar) / 4 + 'px')
        .attr("text-anchor", "end");

      tmpY = tmpY + ((2 * dist) + heightImage)

      //subdata
      if (!!currentData.subdata) {
        var n = 0
        tmpYDetail = tmpY
        for (var k = 0; k < currentData.subdata.data.length; k++) {

          var currentSubdata = currentData.subdata.data[k]

          // if(currentSubdata.percent >= barData.limitValue){


          //disegno linee separatrici dei sottodati
          svg.select(".linesBar")
            .append('path')
            .attr('d', pathLineDetail)
            .attr("stroke", "#BDBDBD")
            .attr("stroke-width", '1')
            .attr("transform", 'translate(0,' + (tmpYDetail) + ')')

          //disegno immagini
          if (currentData.is64) {
            svg.select(".imagesBar")
              .append("image")
              .attr("xlink:xlink:href", currentSubdata.image)
              .attr("x", leftMarginDetail - heightImage / 2 - dist)
              .attr("y", (tmpYDetail) + dist / 2)
              .attr("width", heightImage / 2)
              .attr("height", heightImage / 2)
              .attr('opacity', function () {
                if (currentSubdata.percent > 0) {
                  return 1
                } else {
                  return 0.2
                }
              })
          }
          else {
            svg.select(".imagesBar")
              .append("image")
              .attr("xlink:href", currentSubdata.image)
              .attr("x", leftMarginDetail - heightImage / 2 - dist)
              .attr("y", (tmpYDetail) + dist / 2)
              .attr("width", heightImage / 2)
              .attr("height", heightImage / 2)
              .attr('opacity', function () {
                if (currentData.percent > 0) {
                  return 1
                } else {
                  return 0.2
                }
              })
          }

          //scrivo labels
          svg.select('.labelsBar').attr('class', 'labelsBar linkFromJson')
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
              return currentSubdata.label;
            })
            .attr("x", function () {
              return (leftMarginDetail);
            })
            .attr("y", function () {
              if (currentData.percent > 0) {
                return tmpYDetail + dist / 2 + (heightImage - heightSingleBar) / 6;
              } else {
                return tmpYDetail + dist / 2 + heightImage / 4;
              }
            })
            .attr("fill", function (d) {
              return "black";
            })
            .attr("font-size", (heightImage - heightSingleBar) / 6 + 'px')
            .attr('opacity', function () {
              if (currentData.percent > 0) {
                return 1
              } else {
                return 0.2
              }
            })
            .on('click', function (d) {
              if (!currentSubdata.href) {
                d3.event.stopPropagation()
              }
            });

          //disegno barre
          if (currentData.percent > 0) {

            var pathBar = svg.select(".bars").append("path")
            pathBar.attr("fill", currentSubdata.color)

            var x10 = leftMarginDetail
            y10 = tmpYDetail + (dist + heightImage / 2) / 2 - heightSingleBar / 6
            var x11 = x10 + (currentSubdata.percent * 0.01 * maxWidthBar)
            var y11 = y10
            var x12 = x11 + 2
            var y12 = y11 + heightSingleBar / 6
            var x13 = x11
            var y13 = y11 + heightSingleBar / 3
            var x14 = x10
            var y14 = y13
            var d1 = "M " + x10 + " " + y10 + " L " + x11 + " " + y11 + " L " + x12 + " " + y12 + " L " + x13 + " " + y13 + " L " + x14 + " " + y14 + " Z";

            pathBar.attr("d", d1)


          }//fine disegno barre

          //scrivo valore in euro
          svg.select('.valuesBarDetail')
            .append('text')
            .text(function () {
              return formatCurrency(currentSubdata.value, 2, true)
            })
            .attr("x", function () {
              return leftMarginDetail;
            })
            .attr("y", function () {
              if (currentSubdata.percent > 0) {
                return tmpYDetail + dist / 2 + heightImage / 2;
              } else {
                return tmpYDetail + dist / 2 + heightImage / 2 + this.getBBox().height;
              }
            })
            .attr("fill", "black")
            .attr("font-size", (heightImage - heightSingleBar) / 6 + 'px')
            .attr('opacity', function () {
              if (currentSubdata.percent > 0) {
                return 1
              } else {
                return 0.2
              }
            })

          //scrivo percentuali
          svg.select('.percentsBarDetail')
            .append('text')
            .text(function () {
              if (currentSubdata.percent > 0) {
                return formatPercent(currentSubdata.percent)
              }
            })
            .attr("x", function () {
              return (leftMargin + heightImage + dist + maxWidthBar);
            })
            .attr("y", function () {
              if (currentSubdata.percent > 0) {
                return tmpYDetail + dist / 2 + heightImage / 2;
              }
            })
            .attr("fill", function (i) {
              return data.colors[i];
            })
            .attr("font-size", (heightImage - heightSingleBar) / 6 + 'px')
            .attr("text-anchor", "end");

          n++;
          tmpYDetail = tmpY + n * (dist + heightImage / 2)

          // }//fine if > 5


        }//fine for subdata

        tmpY = tmpYDetail

      }//fine if subdata




    }//fine for


    let scope = this

    if (!barData.hideDetailButton) {
      svg.append('rect')
        .attr('x', ((width / 2) - 50))
        .attr('y', tmpY + 20)
        .attr('width', 100)
        .attr('height', 30)
        .attr('fill', 'white')
        .attr('stroke', 'green')
        .attr('stroke-width', '1px')
        .on('click', function () {
          if (!barData.disableDetailButton) {
            noDetailFunction(scope)
          }

        })
        .attr("cursor", function () {
          if (!barData.disableDetailButton) {
            return "pointer"
          }
        })
        .attr('opacity', function () {
          if (barData.disableDetailButton) {
            return 0.5
          }
        })

      svg.append('text')
        .text(function () {
          return barData.button_string + ' -'
        })
        .attr('fill', 'green')
        .attr('font-size', '10px')
        .attr('x', width / 2)
        .attr('y', tmpY + 20 + 18)
        .attr('text-anchor', 'middle')
        .on('click', function () {
          if (!barData.disableDetailButton) {
            noDetailFunction(scope)
          }
        })
        .attr("cursor", function () {
          if (!barData.disableDetailButton) {
            return "pointer"
          }
        })
        .attr('opacity', function () {
          if (barData.disableDetailButton) {
            return 0.5
          }
        })
    }

    height = tmpY + 60;

    //rapporto larghezza/altezza
    ratio = width / height;

    svg.attr("preserveAspectRatio", "xMidYMin meet")
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

  }

  detailFunction(scope) {

    scope.svg.remove()

    if (scope.barData) {

      scope.initChartDettaglio();
      scope.drawChartDettaglio();

    }
  }

  noDetailFunction(scope) {

    scope.svg.remove()

    if (scope.barData) {

      scope.initChart();
      scope.drawChart();

    }
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

  loop(path, d0, d1, scope) {

    path
      .attr("d", d0)
      .transition()
      .duration(scope.tweenDuration)
      .attr("d", d1)
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
