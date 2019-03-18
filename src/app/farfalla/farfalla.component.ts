import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, NgZone } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-farfalla',
  templateUrl: './farfalla.component.html',
  styleUrls: ['./farfalla.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class FarfallaComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private chartId;
  @Input() private tweenEnabled;
  @Input() private tweenDuration;
  @Input() private data: Array<any>;

  tornadoData
  height
  width
  computedWidth
  resizeWidth;
  centralAxis;
  pathCentralAxis;
  titleTornadoLeft;
  titleTornadoRight;
  title_height;
  heightCentralAxis;
  page = 0;
  totalHeightBars;
  heightSingleBar;
  yBars;
  maxHeightBar;
  currentWidth;
  tachScale = 1;
  pageButtons;
  more;
  showAll;
  showLess;
  dettaglioButton;
  showAllClicked = false;
  ratio
  isDettaglio = false
  isRischio
  tooltipTornado
  isExpanded

  element
  svg

  constructor(private ngZone: NgZone) {
  }



  ngOnInit() {


    if (this.data) {
      this.tornadoData = this.data
    }
    if (!this.chartId) {
      this.chartId = 'tornado-' + Math.floor((Math.random() * 1000) + 1);
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
      this.chartId = 'tornado-' + Math.floor((Math.random() * 1000) + 1);
    }

    for (var i = 0; i < this.tornadoData.data.length; i++) {
      var currentData = this.tornadoData.data[i]
      if (!!currentData.rischio) {
        this.isRischio = true
        break
      }
      this.isRischio = false
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

    this.isExpanded = false;
    this.tachScale = 1;

    if (!this.width && !this.height) {
      this.width = 1200;

    } else {

      this.width = parseInt(this.width, 10);
      this.height = parseInt(this.height, 10);

    }

    /* --- SVG --- */

    this.element = this.chartContainer.nativeElement;

    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-tornado')

    /* --- TITLES LAYER --- */

    this.svg.append('g')
      .attr('class', 'titlesTornado');

    /* --- FULL BARS LAYER --- */

    this.svg.append('g')
      .attr('class', 'fullBarsTornado');

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'barsTornado');


    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsTornado');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsTornado');

    /* --- CENTRAL AXIS LAYER --- */
    this.svg.append('g')
      .attr('class', 'centralAxis');

    /* --- BUTTONS LAYER --- */
    this.svg.append('g')
      .attr('class', 'pageButtons')

    /* --- MORE LAYER --- */
    this.svg.append('g')
      .attr('class', 'more')

    /* --- SHOW ALL LAYER --- */
    this.svg.append('g')
      .attr('class', 'showAllButton')

    /* --- DETTAGLIO BUTTON LAYER --- */
    this.svg.append('g')
      .attr('class', 'dettaglioButton')


  }

  drawChart() {

    let element = this.element
    let svg = this.svg
    let tornadoData = this.tornadoData
    let data = this.tornadoData
    let titleTornadoLeft = this.titleTornadoLeft
    let titleTornadoRight = this.titleTornadoRight
    let title_height = this.title_height
    let yBars = this.yBars
    let totalHeightBars = this.totalHeightBars
    let heightSingleBar = this.heightSingleBar
    let tooltipTornado = this.tooltipTornado
    let page = this.page
    let leftRoundedRect = this.leftRoundedRect
    let rightRoundedRect = this.rightRoundedRect
    let heightCentralAxis = this.heightCentralAxis
    let pathCentralAxis = this.pathCentralAxis
    let centralAxis = this.centralAxis
    let pageButtons = this.pageButtons
    let more = this.more
    let showAll = this.showAll
    let showAllClicked = this.showAllClicked
    let dettaglioButton = this.dettaglioButton
    let changePage = this.changePage
    let piuDettaglio = this.piuDettaglio
    let showAllFunction = this.showAllFunction
    let height = this.height
    let width = this.width
    let computedWidth = this.computedWidth
    let resizeWidth = this.resizeWidth
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let loop = this.loop


    titleTornadoLeft = svg.select('.titlesTornado')
      .selectAll('text')
      .attr('class', 'titlesTornado')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_sx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 5) - this.getBBox().width / 2 - 10);
      })
      .attr("y", function () {
        title_height = this.getBBox().height
        return title_height;
      })
      .attr("text-anchor", "middle")
      .attr("fill", function (d) {
        return d.graph_sx.color;
      })
      .attr("font-weight", "bold");


    titleTornadoRight = svg.select('.titlesTornado')
      .selectAll('titlesTornado.text')
      .attr('class', 'titles')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_dx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 5) + this.getBBox().width / 2 + 10);
      })
      .attr("y", function () {
        return this.getBBox().height;
      })
      .attr("text-anchor", "middle")
      .attr("fill", function (d) {
        return d.graph_dx.color;
      })
      .attr("font-weight", "bold");

    //setto la y da cui parte il blocco barre.
    yBars = title_height * 3;

    //setto l'altezza totale del blocco barre a tre quarti dell'altezza dell'asse centrale.
    totalHeightBars = title_height * (2 * data.num_of_elements_displayed);
    //setto l'altezza di una singola barra, dividendo l'altezza del blocco barre per il numero di elementi fratto 2.
    heightSingleBar = title_height;

    //disegno i rettangoli pieni.
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]
      if (currentData) {
        svg.select(".fullBarsTornado").append("rect")
          .attr("x", width * (2 / 5))
          .attr("y", yBars + (heightSingleBar * (2 * i)))
          .attr("width", width * (2 / 5))
          .attr("height", heightSingleBar)
          .attr("fill", '#F2F2F2')
          .attr("rx", heightSingleBar / 2)
          .attr("ry", heightSingleBar / 2)
          .attr('stroke', '#D8D8D8')
      }
    }

    //scrivo le label a sx.
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]
      if (currentData) {
        svg.select(".labelsTornado").append("text")
          .text(function () {
            if (currentData.label.length > 27) {
              return currentData.label.slice(0, 24) + '...'
            }
            else {
              return currentData.label;
            }
          })
          .attr('full-text', currentData.label)
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            return (width / 4);
          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr('text-anchor', 'end')
          .attr("font-weight", "bold")
          .on("mouseover", function (d) {
            if (this.getAttribute('full-text').length <= 27) {
              return
            }
            // Define the div for the tooltip
            tooltipTornado = d3.select("body").append("div")
              .attr("class", "tooltip-tornado");
            tooltipTornado.transition()
              .duration(200)
              .style("opacity", 1);

            tooltipTornado.html(this.getAttribute('full-text'))
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 28) + "px");
          })
          .on("mouseout", function (d) {
            if (this.getAttribute('full-text').length <= 27) {
              return
            }
            tooltipTornado.transition()
              .duration(500)
              .style("opacity", 0);
            tooltipTornado.remove()
          });
      }
    }

    //scrivo le percentuali
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]
      if (currentData) {

        svg.select(".percentsTornado").append("text")
          .text(function () {
            return currentData.percent_sx + "%";
          })
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            return (width * (2 / 5) - 50);
          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr("font-weight", "bold")
          .attr("fill", data.graph_sx.color);

        svg.select(".percentsTornado").append("text")
          .text(function () {
            return currentData.percent_dx + "%";
          })
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            return (width * (4 / 5) + 50);
          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr("font-weight", "bold")
          .attr('text-anchor', 'end')
          .attr("fill", data.graph_dx.color);
      }
    }

    //disegno i rettangoli percentuali
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]

      if (currentData) {

        //percentuale sinistra
        if (currentData.percent_sx > 0) {
          var pathBar = svg.select(".barsTornado").append("path")
          pathBar.attr("fill", data.graph_sx.color)
          var d0 = leftRoundedRect(width * (3 / 5), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
          var d1 = leftRoundedRect(width * (3 / 5) - width * (1 / 5) * (currentData.percent_sx * 0.01), yBars + (heightSingleBar * (2 * i)), width * (1 / 5) * (currentData.percent_sx * 0.01), heightSingleBar, heightSingleBar / 2)
          if (tweenEnabled) {
            loop(pathBar, d0, d1, this);
          }
          else {
            pathBar.attr("d", d1)
          }
        }//fine percentuale sinistra

        //percentuale destra
        if (currentData.percent_dx > 0) {
          var pathBar = svg.select(".barsTornado").append("path")
          pathBar.attr("fill", data.graph_dx.color)
          var d0 = rightRoundedRect(width * (3 / 5), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
          var d1 = rightRoundedRect(width * (3 / 5), yBars + (heightSingleBar * (2 * i)), width * (1 / 5) * (currentData.percent_dx * 0.01), heightSingleBar, heightSingleBar / 2)
          if (tweenEnabled) {
            loop(pathBar, d0, d1, this);
          }
          else {
            pathBar.attr("d", d1)
          }
        }//fine percentuale destra

      }//fine currentData
    }//fine for

    //disegno l'asse centrale.
    heightCentralAxis = yBars + totalHeightBars
    pathCentralAxis = 'M 0 0 L 0 ' + heightCentralAxis;
    centralAxis = svg.select('.centralAxis')
      .append('path')
      .attr('d', pathCentralAxis)
      .attr("stroke", "#BDBDBD")
      .attr("stroke-width", '1')
      .attr("transform", 'translate(' + width * (3 / 5) + ',0)')


    //disegno i bottoni
    pageButtons = svg.select('.pageButtons')
    var num_buttons = 0;
    if (data.num_of_elements_displayed > 0) {
      num_buttons = Math.ceil(data.data.length / data.num_of_elements_displayed);
    }
    // console.log(num_buttons);

    var firstCx
    var radius = heightSingleBar / 3
    if (num_buttons % 2 == 0) {
      firstCx = (width / 2) + (2 * radius) - ((num_buttons / 2) * (4 * radius))
    }
    else {
      firstCx = (width / 2) - Math.floor(num_buttons / 2) * (4 * radius)
    }

    var scope = this
    for (var i = 0; i < num_buttons; i++) {
      pageButtons.append('circle')
        .attr('r', heightSingleBar / 3)
        .attr('cx', function () {
          return firstCx + i * (4 * radius)
        })
        .attr('cy', heightCentralAxis + heightSingleBar)
        .attr('id', i)
        .attr("fill", function (i) {
          if (page == this.id) {
            return "#088A29"
          }
          else {
            return "#A4A4A4"
          }
        })
        .attr('class', function (i) {
          if (page == this.id) {
            return "active"
          }
          else {
            return ""
          }
        })
        .on('click', function () {
          if (page != this.id) {
            scope.page = this.id
            changePage(scope);

          }
        })
        .style("cursor", "pointer");
    }

    //scrivo il testo sotto ai bottoni
    more = svg.select('.more')
      .append('text')
      .text(data.more)
      .attr('x', width * (1 / 2))
      .attr('y', function () {
        height = heightCentralAxis + heightSingleBar + 2 * (heightSingleBar / 3) + this.getBBox().height
        return height
      })
      .attr('text-anchor', 'middle')
      .attr('fill', 'black');

    //disegno il bottone show_all
    showAll = svg.select('.showAllButton')
    showAll.append('text')
      .text(function () {
        if (!tornadoData.hideShowAllButton) {
          return '> ' + data.show_all
        }
      })
      .attr('x', width * (3 / 4))
      .attr('y', function () {
        return heightCentralAxis + heightSingleBar + (heightSingleBar / 3)// + this.getBBox().height
      })

      .attr("fill", "#088A29")
      .on('click', function () {
        if (!showAllClicked) {
          scope.showAllClicked = true;
          showAllFunction(scope);


        }
      })
      .style("cursor", "pointer");


    if (!tornadoData.hideDetailButton) {
      //disegno il bottone show_all
      dettaglioButton = svg.select('.dettaglioButton')
      dettaglioButton.append('rect')
        .attr('x', (width / 2 - 100))
        .attr('y', (Number(more.attr('y')) + 80))
        .attr('width', 200)
        .attr('height', 40)
        .attr("fill", '#F2F2F2')
        .attr('stroke', '#D8D8D8')
        .attr('rx', 20)
        .attr('ry', 20)
      // .style("cursor", "pointer");

      dettaglioButton.append('text')
        .text(tornadoData.button_string + ' +')
        .attr('x', width / 2)
        .attr('y', function () {
          return Number(more.attr('y')) + 105// + this.getBBox().height
        })
        .attr("fill", "black")
        .attr('text-anchor', 'middle')
      // .style("cursor", "pointer");

      dettaglioButton.style("cursor", "pointer")
        .on('click', function () {
          piuDettaglio(scope)


        })
    }




    computedWidth = this.svg.node().getBBox().width;
    height = this.svg.node().getBBox().height;

    svg.attr("preserveAspectRatio", "xMidYMin meet")
      .attr("viewBox", "-5 -5 " + (width + 5) + " " + (height + 5))

    //rapporto larghezza/altezza
    ratio = width / height

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

    this.isExpanded = true;
    this.tachScale = 1;

    if (!this.width && !this.height) {
      this.width = 1200;

    } else {

      this.width = parseInt(this.width, 10);
      this.height = parseInt(this.height, 10);

    }

    /* --- SVG --- */

    this.element = this.chartContainer.nativeElement;

    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-tornado')

    /* --- TITLES LAYER --- */

    this.svg.append('g')
      .attr('class', 'titlesTornado');

    /* --- FULL BARS LAYER --- */

    this.svg.append('g')
      .attr('class', 'fullBarsTornado');

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'barsTornado');


    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsTornado');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsTornado');

    /* --- CENTRAL AXIS LAYER --- */
    this.svg.append('g')
      .attr('class', 'centralAxis');

    /* --- BUTTONS LAYER --- */
    this.svg.append('g')
      .attr('class', 'pageButtons')

    /* --- MORE LAYER --- */
    this.svg.append('g')
      .attr('class', 'more')

    /* --- SHOW ALL LAYER --- */
    this.svg.append('g')
      .attr('class', 'showAllButton')

    /* --- DETTAGLIO BUTTON LAYER --- */
    this.svg.append('g')
      .attr('class', 'dettaglioButton')


  }

  drawChartDettaglio() {

    let element = this.element
    let svg = this.svg
    let tornadoData = this.tornadoData
    let data = this.tornadoData
    let titleTornadoLeft = this.titleTornadoLeft
    let titleTornadoRight = this.titleTornadoRight
    let title_height = this.title_height
    let yBars = this.yBars
    let totalHeightBars = this.totalHeightBars
    let heightSingleBar = this.heightSingleBar
    let tooltipTornado = this.tooltipTornado
    let page = this.page
    let leftRoundedRect = this.leftRoundedRect
    let rightRoundedRect = this.rightRoundedRect
    let heightCentralAxis = this.heightCentralAxis
    let pathCentralAxis = this.pathCentralAxis
    let centralAxis = this.centralAxis
    let pageButtons = this.pageButtons
    let more = this.more
    let showAll = this.showAll
    let showAllClicked = this.showAllClicked
    let dettaglioButton = this.dettaglioButton
    let changePage = this.changePage
    let menoDettaglio = this.menoDettaglio
    let showAllFunction = this.showAllFunction
    let isRischio = this.isRischio
    let height = this.height
    let width = this.width
    let computedWidth = this.computedWidth
    let resizeWidth = this.resizeWidth
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let loop = this.loop

    titleTornadoLeft = svg.select('.titlesTornado')
      .selectAll('text')
      .attr('class', 'titlesTornado')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_sx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 4) - 10);
      })
      .attr("y", function () {
        title_height = this.getBBox().height
        return title_height;
      })
      .attr("text-anchor", "end")
      .attr("fill", function (d) {
        return d.graph_sx.color;
      })
      .attr("font-weight", "bold");


    titleTornadoRight = svg.select('.titlesTornado')
      .selectAll('titlesTornado.text')
      .attr('class', 'titles')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_dx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 4) + 10);
      })
      .attr("y", function () {
        return this.getBBox().height;
      })
      // .attr("text-anchor","end")
      .attr("fill", function (d) {
        return d.graph_dx.color;
      })
      .attr("font-weight", "bold");



    //scrivo ctv e rischio
    svg.append('text')
      .text('CTV')
      .attr("x", function () {
        if (isRischio) {
          return (width * (5 / 16));
        }
        else {
          return (width * (6 / 16));
        }
      })
      .attr("y", function () {
        return this.getBBox().height;
      })
      .attr('text-anchor', 'middle')

    if (isRischio) {
      svg.append('text')
        .text('RISCHIO')
        .attr("x", function () {
          return (width * (7 / 16));
        })
        .attr("y", function () {
          return this.getBBox().height;
        })
        .attr('text-anchor', 'middle')
    }


    //setto la y da cui parte il blocco barre.
    yBars = title_height * 3;



    //setto l'altezza totale del blocco barre a tre quarti dell'altezza dell'asse centrale.
    totalHeightBars = title_height * (2 * data.num_of_elements_displayed);
    //setto l'altezza di una singola barra, dividendo l'altezza del blocco barre per il numero di elementi fratto 2.
    heightSingleBar = title_height;


    //disegno i rettangoli pieni.
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]
      if (currentData) {
        svg.select(".fullBarsTornado").append("rect")
          .attr("x", width * (9 / 16))
          .attr("y", yBars + (heightSingleBar * (2 * i)))
          .attr("width", width * (6 / 16))
          .attr("height", heightSingleBar)
          .attr("fill", '#F2F2F2')
          .attr("rx", heightSingleBar / 2)
          .attr("ry", heightSingleBar / 2)
          .attr('stroke', '#D8D8D8')
      }
    }

    //scrivo le label a sx.
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]
      if (currentData) {
        svg.select(".labelsTornado").append("text")
          .text(function () {
            if (currentData.label.length > 21) {
              return currentData.label.slice(0, 18) + '...'
            }
            else {
              return currentData.label;
            }

          })
          .attr('full-text', currentData.label)
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            return (width / 4);
          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr('text-anchor', 'end')
          .attr("font-weight", "bold")
          .on("mouseover", function (d) {
            if (this.getAttribute('full-text').length <= 21) {
              return
            }
            // Define the div for the tooltip
            tooltipTornado = d3.select("body").append("div")
            .attr("class", "tooltip-tornado");
            tooltipTornado.transition()
              .duration(200)
              .style("opacity", 1);
            tooltipTornado.html(this.getAttribute('full-text'))
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 28) + "px");
          })
          .on("mouseout", function (d) {
            if (this.getAttribute('full-text').length <= 21) {
              return
            }
            tooltipTornado.transition()
              .duration(500)
              .style("opacity", 0);
            tooltipTornado.remove()
          });
      }
    }

    //scrivo ctv
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]
      if (currentData && !!currentData.ctv) {
        svg.select(".labelsTornado").append("text")
          .text(function () {
            return formatCurrency(currentData.ctv, 2, true);
          })
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            if (isRischio) {
              return (width * (1 / 4) + 40);
            }
            else {
              return (width * (1 / 3));
            }

          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr("font-weight", "normal");
      }
    }

    if (isRischio) {
      //scrivo rischio
      for (var i = 0; i < data.num_of_elements_displayed; i++) {
        var currentData = data.data[i + (page * data.num_of_elements_displayed)]
        if (currentData && !!currentData.rischio) {
          svg.select(".labelsTornado").append("text")
            .text(function () {
              return formatPercent(currentData.rischio);
            })
            .attr("font-size", heightSingleBar * 0.9 + 'px')
            .attr("x", function () {
              return (width * (7 / 16) - 20);
            })
            .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
            .attr("font-weight", "normal");
        }
      }
    }


    //scrivo le percentuali
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]
      if (currentData) {

        svg.select(".percentsTornado").append("text")
          .text(function () {
            return currentData.percent_sx + "%";
          })
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            // return ( (width*(1/4) + width*(2/5))/2 );
            return (width * (9 / 16) - 50)
          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr("font-weight", "bold")
          .attr("fill", data.graph_sx.color);

        svg.select(".percentsTornado").append("text")
          .text(function () {
            return currentData.percent_dx + "%";
          })
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            // return ( width*(4/5) + (width*(2/5) - width*(1/4))/2 - this.getBBox().width);
            return width * (15 / 16) + 50
          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr("font-weight", "bold")
          .attr("fill", data.graph_dx.color)
          .attr('text-anchor', 'end')
      }
    }

    //disegno i rettangoli percentuali
    for (var i = 0; i < data.num_of_elements_displayed; i++) {
      var currentData = data.data[i + (page * data.num_of_elements_displayed)]

      if (currentData) {

        //percentuale sinistra
        if (currentData.percent_sx > 0) {
          var pathBar = svg.select(".barsTornado").append("path")
          pathBar.attr("fill", data.graph_sx.color)
          var d0 = leftRoundedRect(width * (3 / 4), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
          var d1 = leftRoundedRect(width * (3 / 4) - width * (3 / 16) * (currentData.percent_sx * 0.01), yBars + (heightSingleBar * (2 * i)), width * (3 / 16) * (currentData.percent_sx * 0.01), heightSingleBar, heightSingleBar / 2)
          if (tweenEnabled) {
            loop(pathBar, d0, d1, this);
          }
          else {
            pathBar.attr("d", d1)
          }
        }//fine percentuale sinistra

        //percentuale destra
        if (currentData.percent_dx > 0) {
          var pathBar = svg.select(".barsTornado").append("path")
          pathBar.attr("fill", data.graph_dx.color)
          var d0 = rightRoundedRect(width * (3 / 4), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
          var d1 = rightRoundedRect(width * (3 / 4), yBars + (heightSingleBar * (2 * i)), width * (3 / 16) * (currentData.percent_dx * 0.01), heightSingleBar, heightSingleBar / 2)
          if (tweenEnabled) {
            loop(pathBar, d0, d1, this);
          }
          else {
            pathBar.attr("d", d1)
          }
        }//fine percentuale destra

      }//fine currentData
    }//fine for

    //disegno l'asse centrale.
    heightCentralAxis = yBars + totalHeightBars
    pathCentralAxis = 'M 0 0 L 0 ' + heightCentralAxis;
    centralAxis = svg.select('.centralAxis')
      .append('path')
      .attr('d', pathCentralAxis)
      .attr("stroke", "#BDBDBD")
      .attr("stroke-width", '1')
      .attr("transform", 'translate(' + width * (3 / 4) + ',0)')


    //disegno i bottoni
    pageButtons = svg.select('.pageButtons')
    var num_buttons = 0;
    if (data.num_of_elements_displayed > 0) {
      num_buttons = Math.ceil(data.data.length / data.num_of_elements_displayed);
    }
    // console.log(num_buttons);

    var firstCx
    var radius = heightSingleBar / 3
    if (num_buttons % 2 == 0) {
      firstCx = (width / 2) + (2 * radius) - ((num_buttons / 2) * (4 * radius))
    }
    else {
      firstCx = (width / 2) - Math.floor(num_buttons / 2) * (4 * radius)
    }

    var scope = this
    for (var i = 0; i < num_buttons; i++) {
      pageButtons.append('circle')
        .attr('r', radius)
        // .attr('cx', width*(1/2) + i*(heightSingleBar) + heightSingleBar/2)
        .attr('cx', function () {
          return firstCx + i * (4 * radius)
        })
        .attr('cy', heightCentralAxis + heightSingleBar)
        .attr('id', i)
        .attr("fill", function (i) {
          if (page == this.id) {
            return "#088A29"
          }
          else {
            return "#A4A4A4"
          }
        })
        .attr('class', function (i) {
          if (page == this.id) {
            return "active"
          }
          else {
            return ""
          }
        })
        .on('click', function () {
          if (page != this.id) {
            scope.page = this.id
            changePage(scope);

          }
        })
        .style("cursor", "pointer");
    }

    //scrivo il testo sotto ai bottoni
    more = svg.select('.more')
      .append('text')
      .text(data.more)
      .attr('x', width * (1 / 2))
      .attr('y', function () {
        height = heightCentralAxis + heightSingleBar + 2 * (heightSingleBar / 3) + this.getBBox().height
        return height
      })
      .attr('text-anchor', 'middle')
      .attr('fill', 'black');

    //disegno il bottone show_all
    showAll = svg.select('.showAllButton')
    showAll.append('text')
      .text(function () {
        if (!tornadoData.hideShowAllButton) {
          return '> ' + data.show_all
        }
      })

      .attr('x', width * (15 / 16) + 50)
      .attr('y', function () {
        return heightCentralAxis + heightSingleBar + (heightSingleBar / 3)// + this.getBBox().height
      })
      .attr("fill", "#088A29")
      .on('click', function () {
        if (!showAllClicked) {
          scope.showAllClicked = true;
          showAllFunction(scope);

        }
      })
      .style("cursor", "pointer")
      .attr('text-anchor', 'end')

    if (!tornadoData.hideDetailButton) {
      //disegno il bottone show_all
      dettaglioButton = svg.select('.dettaglioButton')
      dettaglioButton.append('rect')
        .attr('x', (width / 2 - 100))
        .attr('y', (Number(more.attr('y')) + 80))
        .attr('width', 200)
        .attr('height', 40)
        .attr("fill", '#F2F2F2')
        .attr('stroke', '#D8D8D8')
        .attr('rx', 20)
        .attr('ry', 20)
      // .on('click',function(){
      //   console.log("ciao")
      // })
      // .style("cursor", "pointer");

      dettaglioButton.append('text')
        .text(tornadoData.button_string + ' -')
        .attr('x', width / 2)
        .attr('y', function () {
          return Number(more.attr('y')) + 105// + this.getBBox().height
        })
        .attr("fill", "black")
        // .on('click',function(){
        //   console.log("ciao")
        // })
        .attr('text-anchor', 'middle')
      // .style("cursor", "pointer");

      dettaglioButton.style("cursor", "pointer")
        .on('click', function () {
          menoDettaglio(scope)

        })

    }


    svg.append('line')
      .attr('x1', 50)
      .attr('x2', width)
      .attr('y1', Number(more.attr('y')) + 25)
      .attr('y2', Number(more.attr('y')) + 25)
      .attr('stroke-width', '1px')
      .attr('stroke', 'lightgray')

    svg.append('line')
      .attr('x1', 50)
      .attr('x2', width)
      .attr('y1', Number(more.attr('y')) + 55)
      .attr('y2', Number(more.attr('y')) + 55)
      .attr('stroke-width', '1px')
      .attr('stroke', 'lightgray')

    svg.append("text")
      .text(function () {
        return tornadoData.total
      })
      .attr("font-size", heightSingleBar * 0.9 + 'px')
      .attr("x", function () {
        return (width / 4);
      })
      .attr("y", Number(more.attr('y')) + 45)
      .attr('text-anchor', 'end')
      .attr("font-weight", "bold");

    svg.append("text")
      .text(function () {
        return formatCurrency(data.ctv, 2, true);
      })
      .attr("font-size", heightSingleBar * 0.9 + 'px')
      .attr("x", function () {
        if (isRischio) {
          return (width * (1 / 4) + 40);
        }
        else {
          return (width * (1 / 3));
        }

      })
      .attr("y", Number(more.attr('y')) + 45)
      .attr("font-weight", "bold");


    if (isRischio) {
      svg.select(".labelsTornado").append("text")
        .text(function () {
          return formatPercent(data.rischio);
        })
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          return (width * (7 / 16) - 20);
        })
        .attr("y", Number(more.attr('y')) + 45)
        .attr("font-weight", "bold");
    }








    computedWidth = this.svg.node().getBBox().width;
    height = this.svg.node().getBBox().height;

    //rapporto larghezza/altezza
    ratio = width / height

    svg.attr("preserveAspectRatio", "xMidYMin meet")
      .attr("viewBox", "50 -5 " + (width - 50) + " " + (height + 10))
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




  } // fine drawChartDettaglio

  initChartAll() {

    this.isExpanded = false;
    this.tachScale = 1;

    this.width = 1200;

    /* --- SVG --- */

    this.element = this.chartContainer.nativeElement;

    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-tornado')

    /* --- TITLES LAYER --- */
    this.svg.append('g')
      .attr('class', 'titlesTornado');

    /* --- FULL BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'fullBarsTornado');

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'barsTornado');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsTornado');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsTornado');

    /* --- CENTRAL AXIS LAYER --- */
    this.svg.append('g')
      .attr('class', 'centralAxis');

    /* --- BUTTONS LAYER --- */
    this.svg.append('g')
      .attr('class', 'pageButtons')

    /* --- MORE LAYER --- */
    this.svg.append('g')
      .attr('class', 'more')

    /* --- SHOW ALL LAYER --- */
    this.svg.append('g')
      .attr('class', 'showAllButton')

    /* --- SHOW LESS LAYER --- */
    this.svg.append('g')
      .attr('class', 'showLessButton')

    /* --- DETTAGLIO BUTTON LAYER --- */
    this.svg.append('g')
      .attr('class', 'dettaglioButton')

  }

  drawChartAll() {

    let element = this.element
    let svg = this.svg
    let tornadoData = this.tornadoData
    let data = this.tornadoData
    let titleTornadoLeft = this.titleTornadoLeft
    let titleTornadoRight = this.titleTornadoRight
    let title_height = this.title_height
    let yBars = this.yBars
    let totalHeightBars = this.totalHeightBars
    let heightSingleBar = this.heightSingleBar
    let tooltipTornado = this.tooltipTornado
    let page = this.page
    let leftRoundedRect = this.leftRoundedRect
    let rightRoundedRect = this.rightRoundedRect
    let heightCentralAxis = this.heightCentralAxis
    let pathCentralAxis = this.pathCentralAxis
    let centralAxis = this.centralAxis
    let pageButtons = this.pageButtons
    let more = this.more
    let showAll = this.showAll
    let showAllClicked = this.showAllClicked
    let dettaglioButton = this.dettaglioButton
    let changePage = this.changePage
    let piuDettaglio = this.piuDettaglio
    let showAllFunction = this.showAllFunction
    let showLessFunction = this.showLessFunction
    let showLess = this.showLess
    let height = this.height
    let width = this.width
    let computedWidth = this.computedWidth
    let resizeWidth = this.resizeWidth
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let loop = this.loop

    titleTornadoLeft = svg.select('.titlesTornado')
      .selectAll('text')
      .attr('class', 'titlesTornado')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_sx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 5) - this.getBBox().width / 2 - 10);
      })
      .attr("y", function () {
        title_height = this.getBBox().height
        return title_height;
      })
      .attr("text-anchor", "middle")
      .attr("fill", function (d) {
        return d.graph_sx.color;
      })
      .attr("font-weight", "bold");


    titleTornadoRight = svg.select('.titlesTornado')
      .selectAll('titlesTornado.text')
      .attr('class', 'titles')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_dx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 5) + this.getBBox().width / 2 + 10);
      })
      .attr("y", function () {
        return title_height;
      })
      .attr("text-anchor", "middle")
      .attr("fill", function (d) {
        return d.graph_dx.color;
      })
      .attr("font-weight", "bold");


    yBars = 3 * title_height;
    heightSingleBar = title_height;
    totalHeightBars = 2 * heightSingleBar * (data.data.length);



    //disegno i rettangoli pieni.
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]
      svg.select(".fullBarsTornado").append("rect")
        .attr("x", width * (2 / 5))
        .attr("y", yBars + (heightSingleBar * (2 * i)))
        .attr("width", width * (2 / 5))
        .attr("height", heightSingleBar)
        .attr("fill", '#F2F2F2')
        .attr("rx", heightSingleBar / 2)
        .attr("ry", heightSingleBar / 2)
        .attr('stroke', '#D8D8D8')

    }

    //scrivo le label a sx.
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]
      svg.select(".labelsTornado").append("text")
        .text(function () {
          if (currentData.label.length > 27) {
            return currentData.label.slice(0, 24) + '...'
          }
          else {
            return currentData.label;
          }
        })
        .attr('full-text', currentData.label)
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          return (width / 4);
        })
        .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
        .attr("font-weight", "bold")
        .attr('text-anchor', 'end')
        .on("mouseover", function (d) {
          if (this.getAttribute('full-text').length <= 27) {
            return
          }
          // Define the div for the tooltip
          tooltipTornado = d3.select("body").append("div")
          .attr("class", "tooltip-tornado");
          tooltipTornado.transition()
            .duration(200)
            .style("opacity", 1);
          tooltipTornado.html(this.getAttribute('full-text'))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
          if (this.getAttribute('full-text').length <= 27) {
            return
          }
          tooltipTornado.transition()
            .duration(500)
            .style("opacity", 0);
          tooltipTornado.remove()
        });

    }

    //scrivo le percentuali
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]

      svg.select(".percentsTornado").append("text")
        .text(function () {
          return currentData.percent_sx + "%";
        })
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          // return ( (width*(1/4) + width*(2/5))/2 );
          return (width * (2 / 5) - 50);
        })
        .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
        .attr("font-weight", "bold")
        .attr("fill", data.graph_sx.color);

      svg.select(".percentsTornado").append("text")
        .text(function () {
          return currentData.percent_dx + "%";
        })
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          // return ( width*(4/5) + (width*(2/5) - width*(1/4))/2 - this.getBBox().width);
          return (width * (4 / 5) + 50);
        })
        .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
        .attr("font-weight", "bold")
        .attr("fill", data.graph_dx.color)
        .attr('text-anchor', 'end')

    }

    //disegno i rettangoli percentuali
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]

      //percentuale sinistra
      if (currentData.percent_sx > 0) {
        var pathBar = svg.select(".barsTornado").append("path")
        pathBar.attr("fill", data.graph_sx.color)
        var d0 = leftRoundedRect(width * (3 / 5), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
        var d1 = leftRoundedRect(width * (3 / 5) - width * (1 / 5) * (currentData.percent_sx * 0.01), yBars + (heightSingleBar * (2 * i)), width * (1 / 5) * (currentData.percent_sx * 0.01), heightSingleBar, heightSingleBar / 2)
        if (tweenEnabled) {
          loop(pathBar, d0, d1, this);
        }
        else {
          pathBar.attr("d", d1)
        }
      }//fine percentuale sinistra

      //percentuale destra
      if (currentData.percent_dx > 0) {
        var pathBar = svg.select(".barsTornado").append("path")
        pathBar.attr("fill", data.graph_dx.color)
        var d0 = rightRoundedRect(width * (3 / 5), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
        var d1 = rightRoundedRect(width * (3 / 5), yBars + (heightSingleBar * (2 * i)), width * (1 / 5) * (currentData.percent_dx * 0.01), heightSingleBar, heightSingleBar / 2)
        if (tweenEnabled) {
          loop(pathBar, d0, d1, this);
        }
        else {
          pathBar.attr("d", d1)
        }
      }//fine percentuale destra

    }//fine for

    //disegno l'asse centrale.
    heightCentralAxis = yBars + totalHeightBars
    pathCentralAxis = 'M 0 0 L 0 ' + heightCentralAxis;
    centralAxis = svg.select('.centralAxis')
      .append('path')
      .attr('d', pathCentralAxis)
      .attr("stroke", "#BDBDBD")
      .attr("stroke-width", '1')
      .attr("transform", 'translate(' + width * (3 / 5) + ',0)')


    let scope = this

    //disegno il bottone show_all
    showLess = svg.select('.showLessButton')
    showLess.append('text')
      .text(function () {
        if (!tornadoData.hideShowAllButton) {
          return '> Mostra meno'
        }
      })
      .attr('x', width * (3 / 4))
      .attr('y', function () {
        height = heightCentralAxis + heightSingleBar + (heightSingleBar / 3)
        return height
      })

      .attr("fill", "#088A29")
      .on('click', function () {
        if (showAllClicked) {
          scope.showAllClicked = false;
          // page = 0;
          showLessFunction(scope);

        }
      })
      .style("cursor", "pointer");


    if (!tornadoData.hideDetailButton) {
      //disegno il bottone show_all

      dettaglioButton = svg.select('.dettaglioButton')
      dettaglioButton.append('rect')
        .attr('x', (width / 2 - 100))
        .attr('y', (Number(showLess.select('text').attr('y')) + 80))
        .attr('width', 200)
        .attr('height', 40)
        .attr("fill", '#F2F2F2')
        .attr('stroke', '#D8D8D8')
        .attr('rx', 20)
        .attr('ry', 20)

      dettaglioButton.append('text')
        .text(tornadoData.button_string + ' +')
        .attr('x', width / 2)
        .attr('y', function () {
          return Number(showLess.select('text').attr('y')) + 105// + this.getBBox().height
        })
        .attr("fill", "black")
        .attr('text-anchor', 'middle')
      // .style("cursor", "pointer");

      dettaglioButton.style("cursor", "pointer")
        .on('click', function () {
          piuDettaglio(scope)

        })

    }


    height = this.svg.node().getBBox().height;

    svg.attr("preserveAspectRatio", "xMidYMin meet")
      .attr("viewBox", "-5 -5 " + (width + 5) + " " + (height + 5))

    //rapporto larghezza/altezza
    ratio = width / height

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

  initChartAllDettaglio() {

    this.isExpanded = true;
    this.tachScale = 1;

    this.width = 1200;

    /* --- SVG --- */

    this.element = this.chartContainer.nativeElement;

    this.svg = d3.select(this.element).append('svg')
      .attr('class', 'chart-container-tornado')

    /* --- TITLES LAYER --- */
    this.svg.append('g')
      .attr('class', 'titlesTornado');

    /* --- FULL BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'fullBarsTornado');

    /* --- BARS LAYER --- */
    this.svg.append('g')
      .attr('class', 'barsTornado');

    /* --- LABELS LAYER --- */
    this.svg.append('g')
      .attr('class', 'labelsTornado');

    /* --- PERCENTS LAYER --- */
    this.svg.append('g')
      .attr('class', 'percentsTornado');

    /* --- CENTRAL AXIS LAYER --- */
    this.svg.append('g')
      .attr('class', 'centralAxis');

    /* --- BUTTONS LAYER --- */
    this.svg.append('g')
      .attr('class', 'pageButtons')

    /* --- MORE LAYER --- */
    this.svg.append('g')
      .attr('class', 'more')

    /* --- SHOW ALL LAYER --- */
    this.svg.append('g')
      .attr('class', 'showAllButton')

    /* --- SHOW LESS LAYER --- */
    this.svg.append('g')
      .attr('class', 'showLessButton')

    /* --- DETTAGLIO BUTTON LAYER --- */
    this.svg.append('g')
      .attr('class', 'dettaglioButton')

  }

  drawChartAllDettaglio() {

    let element = this.element
    let svg = this.svg
    let tornadoData = this.tornadoData
    let data = this.tornadoData
    let titleTornadoLeft = this.titleTornadoLeft
    let titleTornadoRight = this.titleTornadoRight
    let title_height = this.title_height
    let yBars = this.yBars
    let totalHeightBars = this.totalHeightBars
    let heightSingleBar = this.heightSingleBar
    let tooltipTornado = this.tooltipTornado
    let page = this.page
    let leftRoundedRect = this.leftRoundedRect
    let rightRoundedRect = this.rightRoundedRect
    let heightCentralAxis = this.heightCentralAxis
    let pathCentralAxis = this.pathCentralAxis
    let centralAxis = this.centralAxis
    let pageButtons = this.pageButtons
    let more = this.more
    let showAll = this.showAll
    let showAllClicked = this.showAllClicked
    let dettaglioButton = this.dettaglioButton
    let changePage = this.changePage
    let piuDettaglio = this.piuDettaglio
    let showAllFunction = this.showAllFunction
    let showLessFunction = this.showLessFunction
    let showLess = this.showLess
    let isRischio = this.isRischio
    let menoDettaglio = this.menoDettaglio
    let height = this.height
    let width = this.width
    let computedWidth = this.computedWidth
    let resizeWidth = this.resizeWidth
    let ratio = this.ratio
    let tweenEnabled = this.tweenEnabled
    let tweenDuration = this.tweenDuration
    let formatPercent = this.formatPercent
    let formatCurrency = this.formatCurrency
    let loop = this.loop


    titleTornadoLeft = svg.select('.titlesTornado')
      .selectAll('text')
      .attr('class', 'titlesTornado')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_sx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 4) - 10);
      })
      .attr("y", function () {
        title_height = this.getBBox().height
        return title_height;
      })
      .attr("text-anchor", "end")
      .attr("fill", function (d) {
        return d.graph_sx.color;
      })
      .attr("font-weight", "bold");


    titleTornadoRight = svg.select('.titlesTornado')
      .selectAll('titlesTornado.text')
      .attr('class', 'titles')
      .data([data])
      .enter()
      .append('text')
      .text(function (d) {
        return d.graph_dx.title.toUpperCase();
      })
      .attr("x", function () {
        return (width * (3 / 4) + 10);
      })
      .attr("y", function () {
        return this.getBBox().height;
      })
      // .attr("text-anchor","end")
      .attr("fill", function (d) {
        return d.graph_dx.color;
      })
      .attr("font-weight", "bold");

    //scrivo ctv e rischio
    svg.append('text')
      .text('CTV')
      .attr("x", function () {
        if (isRischio) {
          return (width * (5 / 16));
        }
        else {
          return (width * (6 / 16));
        }

      })
      .attr("y", function () {
        return this.getBBox().height;
      })
      .attr('text-anchor', 'middle')

    if (isRischio) {
      svg.append('text')
        .text('RISCHIO')
        .attr("x", function () {
          return (width * (7 / 16));
        })
        .attr("y", function () {
          return this.getBBox().height;
        })
        .attr('text-anchor', 'middle')
    }


    //setto la y da cui parte il blocco barre.
    yBars = title_height * 3;



    yBars = 3 * title_height;
    heightSingleBar = title_height;
    totalHeightBars = 2 * heightSingleBar * (data.data.length);


    //scrivo ctv
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]
      if (currentData && !!currentData.ctv) {
        svg.select(".labelsTornado").append("text")
          .text(function () {
            return formatCurrency(currentData.ctv, 2, true);
          })
          .attr("font-size", heightSingleBar * 0.9 + 'px')
          .attr("x", function () {
            if (isRischio) {
              return (width * (1 / 4) + 40);
            }
            else {
              return (width * (1 / 3));
            }
          })
          .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
          .attr("font-weight", "normal");
      }
    }

    //scrivo rischio
    if (isRischio) {
      for (var i = 0; i < data.data.length; i++) {
        var currentData = data.data[i]
        if (currentData && !!currentData.rischio) {
          svg.select(".labelsTornado").append("text")
            .text(function () {
              return formatPercent(currentData.rischio);
            })
            .attr("font-size", heightSingleBar * 0.9 + 'px')
            .attr("x", function () {
              return (width * (7 / 16) - 20);
            })
            .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
            .attr("font-weight", "normal");
        }
      }
    }






    //disegno i rettangoli pieni.
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]
      svg.select(".fullBarsTornado").append("rect")
        .attr("x", width * (9 / 16))
        .attr("y", yBars + (heightSingleBar * (2 * i)))
        .attr("width", width * (6 / 16))
        .attr("height", heightSingleBar)
        .attr("fill", '#F2F2F2')
        .attr("rx", heightSingleBar / 2)
        .attr("ry", heightSingleBar / 2)
        .attr('stroke', '#D8D8D8')

    }

    //scrivo le label a sx.
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]
      svg.select(".labelsTornado").append("text")
        .text(function () {
          if (currentData.label.length > 21) {
            return currentData.label.slice(0, 18) + '...'
          }
          else {
            return currentData.label;
          }
        })
        .attr('full-text', currentData.label)
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          return (width / 4);
        })
        .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
        .attr('text-anchor', 'end')
        .attr("font-weight", "bold")
        .on("mouseover", function (d) {
          if (this.getAttribute('full-text').length <= 21) {
            return
          }
          // Define the div for the tooltip
          tooltipTornado = d3.select("body").append("div")
          .attr("class", "tooltip-tornado");
          tooltipTornado.transition()
            .duration(200)
            .style("opacity", 1);
          tooltipTornado.html(this.getAttribute('full-text'))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
          if (this.getAttribute('full-text').length <= 21) {
            return
          }
          tooltipTornado.transition()
            .duration(500)
            .style("opacity", 0);
          tooltipTornado.remove()
        });

    }

    //scrivo le percentuali
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]

      svg.select(".percentsTornado").append("text")
        .text(function () {
          return currentData.percent_sx + "%";
        })
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          // return ( (width*(1/4) + width*(2/5))/2 );
          return (width * (9 / 16) - 50)
        })
        .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
        .attr("font-weight", "bold")
        .attr("fill", data.graph_sx.color);

      svg.select(".percentsTornado").append("text")
        .text(function () {
          return currentData.percent_dx + "%";
        })
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          // return ( width*(4/5) + (width*(2/5) - width*(1/4))/2 - this.getBBox().width);
          return width * (15 / 16) + 50
        })
        .attr("y", yBars + (heightSingleBar * (2 * i)) + heightSingleBar * 0.8)
        .attr("font-weight", "bold")
        .attr("fill", data.graph_dx.color)
        .attr('text-anchor', 'end')

    }

    //disegno i rettangoli percentuali
    for (var i = 0; i < data.data.length; i++) {
      var currentData = data.data[i]

      //percentuale sinistra
      if (currentData.percent_sx > 0) {
        var pathBar = svg.select(".barsTornado").append("path")
        pathBar.attr("fill", data.graph_sx.color)
        var d0 = leftRoundedRect(width * (3 / 4), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
        var d1 = leftRoundedRect(width * (3 / 4) - width * (3 / 16) * (currentData.percent_sx * 0.01), yBars + (heightSingleBar * (2 * i)), width * (3 / 16) * (currentData.percent_sx * 0.01), heightSingleBar, heightSingleBar / 2)
        if (tweenEnabled) {
          loop(pathBar, d0, d1, this);
        }
        else {
          pathBar.attr("d", d1)
        }
      }//fine percentuale sinistra

      //percentuale destra
      if (currentData.percent_dx > 0) {
        var pathBar = svg.select(".barsTornado").append("path")
        pathBar.attr("fill", data.graph_dx.color)
        var d0 = rightRoundedRect(width * (3 / 4), yBars + (heightSingleBar * (2 * i)), 1, heightSingleBar, heightSingleBar / 2)
        var d1 = rightRoundedRect(width * (3 / 4), yBars + (heightSingleBar * (2 * i)), width * (3 / 16) * (currentData.percent_dx * 0.01), heightSingleBar, heightSingleBar / 2)
        if (tweenEnabled) {
          loop(pathBar, d0, d1, this);
        }
        else {
          pathBar.attr("d", d1)
        }
      }//fine percentuale destra

    }//fine for

    //disegno l'asse centrale.
    heightCentralAxis = yBars + totalHeightBars
    pathCentralAxis = 'M 0 0 L 0 ' + heightCentralAxis;
    centralAxis = svg.select('.centralAxis')
      .append('path')
      .attr('d', pathCentralAxis)
      .attr("stroke", "#BDBDBD")
      .attr("stroke-width", '1')
      .attr("transform", 'translate(' + width * (3 / 4) + ',0)')


    let scope = this

    //disegno il bottone show_all
    showLess = svg.select('.showLessButton')
    showLess.append('text')
      .text(function () {
        if (!tornadoData.hideShowAllButton) {
          return '> Mostra meno'
        }
      })
      .attr('x', width * (15 / 16) + 50)
      .attr('y', function () {
        height = heightCentralAxis + heightSingleBar + (heightSingleBar / 3)
        return height
      })
      .attr("fill", "#088A29")
      .on('click', function () {
        if (showAllClicked) {
          scope.showAllClicked = false;
          // page = 0;
          showLessFunction(scope);

        }
      })
      .style("cursor", "pointer")
      .attr('text-anchor', 'end')


    if (!tornadoData.hideDetailButton) {

      //disegno il bottone show_all
      dettaglioButton = svg.select('.dettaglioButton')
      dettaglioButton.append('rect')
        .attr('x', (width / 2 - 100))
        .attr('y', (Number(showLess.select('text').attr('y')) + 80))
        .attr('width', 200)
        .attr('height', 40)
        .attr("fill", '#F2F2F2')
        .attr('stroke', '#D8D8D8')
        .attr('rx', 20)
        .attr('ry', 20)
      // .on('click',function(){
      //   console.log("ciao")
      // })
      // .style("cursor", "pointer");

      dettaglioButton.append('text')
        .text(tornadoData.button_string + ' -')
        .attr('x', width / 2)
        .attr('y', function () {
          return Number(showLess.select('text').attr('y')) + 105// + this.getBBox().height
        })
        .attr("fill", "black")
        // .on('click',function(){
        //   console.log("ciao")
        // })
        .attr('text-anchor', 'middle')
      // .style("cursor", "pointer");

      dettaglioButton.style("cursor", "pointer")
        .on('click', function () {
          menoDettaglio(scope)

        })



    }


    svg.append('line')
      .attr('x1', 50)
      .attr('x2', width)
      .attr('y1', Number(showLess.select('text').attr('y')) + 25)
      .attr('y2', Number(showLess.select('text').attr('y')) + 25)
      .attr('stroke-width', '1px')
      .attr('stroke', 'lightgray')

    svg.append('line')
      .attr('x1', 50)
      .attr('x2', width)
      .attr('y1', Number(showLess.select('text').attr('y')) + 55)
      .attr('y2', Number(showLess.select('text').attr('y')) + 55)
      .attr('stroke-width', '1px')
      .attr('stroke', 'lightgray')


    svg.append("text")
      .text(function () {
        return tornadoData.total
      })
      .attr("font-size", heightSingleBar * 0.9 + 'px')
      .attr("x", function () {
        return (width / 4);
      })
      .attr("y", Number(showLess.select('text').attr('y')) + 45)
      .attr('text-anchor', 'end')
      .attr("font-weight", "bold");

    svg.append("text")
      .text(function () {
        return formatCurrency(data.ctv, 2, true);
      })
      .attr("font-size", heightSingleBar * 0.9 + 'px')
      .attr("x", function () {
        if (isRischio) {
          return (width * (1 / 4) + 40);
        }
        else {
          return (width * (1 / 3));
        }

      })
      .attr("y", Number(showLess.select('text').attr('y')) + 45)
      .attr("font-weight", "bold");

    if (isRischio) {
      svg.select(".labelsTornado").append("text")
        .text(function () {
          return formatPercent(data.rischio);
        })
        .attr("font-size", heightSingleBar * 0.9 + 'px')
        .attr("x", function () {
          return (width * (7 / 16) - 20);
        })
        .attr("y", Number(showLess.select('text').attr('y')) + 45)
        .attr("font-weight", "bold");
    }

    height = this.svg.node().getBBox().height;

    svg.attr("preserveAspectRatio", "xMidYMin meet")
      .attr("viewBox", "50 -5 " + (width - 50) + " " + (height + 5))

    //rapporto larghezza/altezza
    ratio = width / height

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

  leftRoundedRect(x, y, width, height, radius) {
    if (width >= radius) {
      return "M " + (x + radius) + " , " + y
        + " a " + radius + " , " + radius + " 0 0 0 " + -radius + " , " + radius
        + " v " + (height - 2 * radius)
        + " a " + radius + " , " + radius + " 0 0 0 " + radius + " , " + radius
        + " h " + (width - radius)
        + " v " + (-height)
        + " z ";
    }
    else {
      radius = width;
      return "M " + (x + radius) + " , " + y
        + " a " + radius + " , " + radius + " 0 0 0 " + -radius + " , " + radius
        + " v " + (height - 2 * radius)
        + " a " + radius + " , " + radius + " 0 0 0 " + radius + " , " + radius
        + " h " + (width - radius)
        + " v " + (-height)
        + " z ";
    }

  }

  //cambio pagina
  changePage(scope) {

    scope.svg.remove();

    if (scope.tornadoData) {

      if (!scope.isDettaglio) {
        scope.initChart();
        scope.drawChart();

      }
      else {
        scope.initChartDettaglio();
        scope.drawChartDettaglio();
      }
      // svg2.remove()

    }

  }


  piuDettaglio(scope) {
    scope.svg.remove();

    scope.isDettaglio = true
    if (!scope.showAllClicked) {
      scope.initChartDettaglio();
      scope.drawChartDettaglio()
    }
    else {
      scope.initChartAllDettaglio();
      scope.drawChartAllDettaglio()
    }


  }

  menoDettaglio(scope) {
    scope.svg.remove();

    scope.isDettaglio = false
    if (!scope.showAllClicked) {
      scope.initChart();
      scope.drawChart()
    }
    else {
      scope.initChartAll();
      scope.drawChartAll()
    }


  }

  showAllFunction(scope) {

    scope.svg.remove();

    if (scope.tornadoData) {

      if (!scope.isDettaglio) {
        scope.initChartAll();
        scope.drawChartAll()

      }
      else {
        scope.initChartAllDettaglio();
        scope.drawChartAllDettaglio();
      }


    }

  }


  showLessFunction(scope) {

    scope.svg.remove();

    if (scope.tornadoData) {

      if (!scope.isDettaglio) {
        scope.initChart();
        scope.drawChart()

      }
      else {
        scope.initChartDettaglio();
        scope.drawChartDettaglio();
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