import { Component, OnInit, Input, Injectable } from '@angular/core';
// import { ispD3Service }

@Injectable()
export class ispProgress {

  constructor() { }

  creaGrafico(scope: any) {
    console.log(scope)

    // var isIE = /*@cc_on!@*/false //|| !!document.documentMode;

    // var d3;
    // var progressData;
    // var svg;
    // var height, width, computedWidth, computedHeight, resizeWidth;
    // var startBarsX
    // var startBarsY
    // var widthEmptyBar
    // var heightBars
    // var emptyBarProgress
    // var fullBarProgress
    // var widthValuesFull
    // var widthLabelFull
    // var widthLabelEmpty
    // var widthValuesEmpty
    // var widthPathFull
    // var heightPathFull
    // var widthPathEmpty
    // var heightPathEmpty
    // var ratio


    // if (scope.data) {
    //   progressData = scope.data
    // }
    // if (!scope.chartId) {
    //   scope.chartId = 'progress-' + Math.floor((Math.random() * 1000) + 1);
    // }

    // if ('enableTween' in attrs) {
    //   scope.tweenEnabled = true;
    // }

    // if ('tweenDuration' in attrs) {
    //   scope.tweenDuration = attrs.tweenDuration
    // } else {
    //   scope.tweenDuration = 1500;
    // }

    // function initChart(d) {

    //   d3 = d;

    //   d3.select('#' + scope.chartId).select('svg').remove();

    //   /* --- SIZE --- */
    //   if (!scope.width && !scope.height) {
    //     width = 900;
    //     height = 300;

    //   } else {

    //     width = parseInt(scope.width, 10);
    //     height = parseInt(scope.height, 10);

    //   }

    //   widthEmptyBar = width * 0.6
    //   heightBars = height * 0.05
    //   startBarsX = width * 0.2
    //   startBarsY = height * 0.5

    //   /* --- SVG --- */

    //   svg = d3.select('#' + scope.chartId)
    //     .append('svg')
    //     .attr('class', 'chart-container-progress')

    //   /* --- EMPTY BAR LAYER --- */
    //   svg.append('g')
    //     .attr('class', 'emptyBarProgress');

    //   /* --- FULL BAR LAYER --- */
    //   svg.append('g')
    //     .attr('class', 'fullBarProgress');

    //   /* --- PERCENTS LAYER --- */
    //   svg.append('g')
    //     .attr('class', 'percentsProgress');

    //   /* --- LABELS LAYER --- */
    //   svg.append('g')
    //     .attr('class', 'labelsProgress');

    //   /* --- FULL BOX LAYER --- */
    //   svg.append('g')
    //     .attr('class', 'fullBox');

    //   /* --- EMPTY BOX LAYER --- */
    //   svg.append('g')
    //     .attr('class', 'emptyBox');
    // }//fine initChart

    // function drawChart(d3, data) {

    //   //barra vuota
    //   emptyBarProgress = svg.select('.emptyBarProgress')
    //     .append('rect')
    //     .attr('x', startBarsX)
    //     .attr('y', startBarsY)
    //     .attr('width', widthEmptyBar)
    //     .attr('height', heightBars)
    //     .attr('fill', data.color_empty)
    //     .attr('stroke', data.color_border)

    //   //barra piena
    //   var pathFullBar = svg.select(".fullBarProgress").append("path")
    //   pathFullBar.attr("fill", data.color_full)
    //   var x00 = startBarsX
    //   var y00 = startBarsY
    //   var x01 = x00
    //   var y01 = y00
    //   var x02 = x01
    //   var y02 = y01 + heightBars
    //   var x03 = x00
    //   var y03 = y02
    //   var d0 = "M " + x00 + " " + y00 + " L " + x01 + " " + y01 + " L " + x02 + " " + y02 + " L " + x03 + " " + y03 + " Z"
    //   var x10 = startBarsX
    //   var y10 = startBarsY
    //   var x11 = x10 + widthEmptyBar * (data.full.percent / 100)
    //   var y11 = y10
    //   var x12 = x11
    //   var y12 = y11 + heightBars
    //   var x13 = x10
    //   var y13 = y12
    //   var d1 = "M " + x10 + " " + y10 + " L " + x11 + " " + y11 + " L " + x12 + " " + y12 + " L " + x13 + " " + y13 + " Z"
    //   if (scope.tweenEnabled) {
    //     loop(pathFullBar, d0, d1);
    //   }
    //   else {
    //     pathFullBar.attr("d", d1)
    //   }

    //   //percentuali agli estremi della barra
    //   svg.select(".percentsProgress").append("text")
    //     .text(function () {
    //       return formatPercent(data.min)
    //     })
    //     .attr("font-size", heightBars + 'px')
    //     .attr("x", function () {
    //       return startBarsX - 5;
    //     })
    //     .attr("y", function () {
    //       return startBarsY + (heightBars * 0.8)
    //     })
    //     .attr("font-weight", "normal")
    //     .attr("fill", 'black')
    //     .attr("text-anchor", "end")

    //   svg.select(".percentsProgress").append("text")
    //     .text(function () {
    //       return formatPercent(data.max);
    //     })
    //     .attr("font-size", heightBars + 'px')
    //     .attr("x", function () {
    //       return (startBarsX + widthEmptyBar + 5);
    //     })
    //     .attr("y", function () {
    //       return startBarsY + (heightBars * 0.8)
    //     })
    //     .attr("font-weight", "normal")
    //     .attr("fill", 'black');


    //   //label della barra full
    //   var labelFullBox = svg.select(".fullBox")
    //     .append('text')
    //     .attr('x', function () {
    //       if (scope.tweenEnabled) {
    //         return startBarsX
    //       }
    //       else {
    //         return startBarsX + widthEmptyBar * (data.full.percent / 100)
    //       }
    //     })
    //     .attr('y', function () {
    //       widthLabelFull = this.getBBox().width
    //       return startBarsY - height * 0.17
    //     })
    //     .text(data.full.label)
    //     .attr('text-anchor', 'middle')

    //   //valori della barra full
    //   var valuesFullBox = svg.select(".fullBox")
    //     .append('text')
    //     .text(function () {
    //       return formatPercent(data.full.percent) + ' - ' + formatCurrency(data.full.value)
    //     })
    //     .attr('x', function () {
    //       if (scope.tweenEnabled) {
    //         return startBarsX
    //       }
    //       else {
    //         return startBarsX + widthEmptyBar * (data.full.percent / 100)
    //       }
    //     })
    //     .attr('y', function () {
    //       widthValuesFull = this.getBBox().width
    //       return startBarsY - height * 0.1
    //     })
    //     .attr('text-anchor', 'middle')


    //   //fumetto full
    //   widthPathFull = (Math.max(widthLabelFull, widthValuesFull) * 1.1)
    //   heightPathFull = height * 0.2

    //   var x00 = startBarsX - (widthPathFull / 2)
    //   var y00 = startBarsY - height * 0.25
    //   var x01 = x00 + widthPathFull
    //   var y01 = y00
    //   var x02 = x01
    //   var y02 = y01 + heightPathFull
    //   var x03 = x00 + widthPathFull / 2 + 10
    //   var y03 = y02
    //   var x04 = x03 - 10
    //   var y04 = y03 + 7
    //   var x05 = x04 - 10
    //   var y05 = y03
    //   var x06 = x00
    //   var y06 = y05
    //   var d00 = "M " + x00 + " " + y00 + " L " + x01 + " " + y01 + " L " + x02 + " " + y02 + " L " + x06 + " " + y06 + " Z"
    //   var d01 = "M " + x03 + " " + y03 + " L " + x04 + " " + y04 + " L " + x05 + " " + y05 + " Z"
    //   var x10 = startBarsX + widthEmptyBar * (data.full.percent / 100) - (widthPathFull / 2)
    //   var y10 = y00
    //   var x11 = x10 + widthPathFull
    //   var y11 = y10
    //   var x12 = x11
    //   var y12 = y02
    //   var x13 = x10 + widthPathFull / 2 + 10
    //   var y13 = y12
    //   var x14 = x13 - 10
    //   var y14 = y13 + 7
    //   var x15 = x14 - 10
    //   var y15 = y13
    //   var x16 = x10
    //   var y16 = y15
    //   var d10 = "M " + x10 + " " + y10 + " L " + x11 + " " + y11 + " L " + x12 + " " + y12 + " L " + x16 + " " + y16 + " Z"
    //   var d11 = "M " + x13 + " " + y13 + " L " + x14 + " " + y14 + " L " + x15 + " " + y15 + " Z"
    //   var pathFullBox00 = svg.select(".fullBox").append('path')

    //   pathFullBox00.attr('stroke', data.full.color_border)
    //     .attr('d', function () {
    //       if (scope.tweenEnabled) {
    //         return d00
    //       }
    //       else {
    //         return d10
    //       }
    //     })
    //     .attr('fill', 'none')

    //   var pathFullBox01 = svg.select(".fullBox").append('path')
    //   pathFullBox01.attr('stroke', data.full.color_border)
    //     .attr('d', function () {
    //       if (scope.tweenEnabled) {
    //         return d01
    //       } else {
    //         return d11
    //       }
    //     })
    //     .attr('class', 'triangle')
    //     .attr('fill', data.full.color_border)

    //   //label della barra empty
    //   var labelEmptyBox = svg.select(".emptyBox")
    //     .append('text')
    //     .text(data.empty.label)
    //     .attr('x', function () {
    //       // return startBarsX + widthEmptyBar
    //       return startBarsX + widthEmptyBar * (data.empty.percent / 100)
    //     })
    //     .attr('y', function () {
    //       widthLabelEmpty = this.getBBox().width
    //       return (startBarsY + heightBars + this.getBBox().height * 0.5 + height * 0.1)
    //     })
    //     .attr('text-anchor', 'middle')

    //   //valori della barra full
    //   var valuesEmptyBox = svg.select(".emptyBox")
    //     .append('text')
    //     .text(function () {
    //       return formatPercent(data.empty.percent) + ' - ' + formatCurrency(data.empty.value)
    //     })
    //     .attr('x', function () {
    //       return startBarsX + widthEmptyBar * (data.empty.percent / 100)
    //     })
    //     .attr('y', function () {
    //       widthValuesEmpty = this.getBBox().width
    //       return (startBarsY + heightBars + this.getBBox().height * 0.5 + height * 0.17)
    //     })
    //     .attr('text-anchor', 'middle')

    //   //fumetto full
    //   widthPathEmpty = (Math.max(widthLabelEmpty, widthValuesEmpty) * 1.1)
    //   heightPathEmpty = height * 0.2

    //   var x20 = startBarsX + widthEmptyBar * (data.empty.percent / 100) - (widthPathEmpty / 2)
    //   var y20 = startBarsY + heightBars + height * 0.25 - heightPathEmpty
    //   var x21 = x20 + widthPathEmpty
    //   var y21 = y20
    //   var x22 = x21
    //   var y22 = y21 + heightPathEmpty
    //   var x23 = x20 + widthPathEmpty / 2 + 10
    //   var y23 = y20
    //   var x24 = x23 - 10
    //   var y24 = y20 - 7
    //   var x25 = x24 - 10
    //   var y25 = y20
    //   var x26 = x20
    //   var y26 = y22
    //   var d20 = "M " + x20 + " " + y20 + " L " + x21 + " " + y21 + " L " + x22 + " " + y22 + " L " + x26 + " " + y26 + " Z"
    //   var d21 = "M " + x23 + " " + y23 + " L " + x24 + " " + y24 + " L " + x25 + " " + y25 + " Z"

    //   var pathEmptyBox00 = svg.select(".emptyBox").append('path')
    //   pathEmptyBox00.attr('stroke', data.empty.color_border)
    //     .attr('d', function () {
    //       return d20
    //     })
    //     .attr('fill', 'none')
    //   var pathEmptyBox01 = svg.select(".emptyBox").append('path')
    //   pathEmptyBox01.attr('stroke', data.empty.color_border)
    //     .attr('d', function () {
    //       return d21
    //     })
    //     .attr('fill', data.empty.color_border)

    //   //animazione
    //   if (scope.tweenEnabled) {
    //     labelFullBox.transition().duration(scope.tweenDuration).attr('x', startBarsX + widthEmptyBar * (data.full.percent / 100))
    //     valuesFullBox.transition().duration(scope.tweenDuration).attr('x', startBarsX + widthEmptyBar * (data.full.percent / 100))
    //     pathFullBox00.transition().duration(scope.tweenDuration).attr('d', d10)
    //     pathFullBox01.transition().duration(scope.tweenDuration).attr('d', d11)
    //   }

    //   // var minX = Math.min(startBarsX-50, x20-5, x10-5)
    //   // var maxX = Math.max(startBarsX+widthEmptyBar+70, x21+5, x11+5)

    //   // svg.attr("preserveAspectRatio", "xMidYMid meet")
    //   //   .attr("viewBox", minX +" "+(y00)+" "+ (maxX-minX) +" "+ (y22-y00));


    //   svg.attr("preserveAspectRatio", "xMidYMid meet")
    //     .attr("viewBox", "0 0 " + width + " " + height)

    //   //rapporto larghezza/altezza
    //   ratio = width / height

    //   if (isIE) {
    //     if (svg._groups["0"]["0"].width.animVal.value <= width) {
    //       svg.attr('height', (svg._groups["0"]["0"].width.animVal.value / ratio))
    //     }
    //     else {
    //       svg.attr('height', height)
    //     }
    //   }

    // }//fine drawChart

    // if (isIE) {
    //   window.addEventListener('resize', doResize)
    // }


    // function doResize() {

    //   if (svg._groups["0"]["0"].width.animVal.value < width) {
    //     svg.attr('height', (svg._groups["0"]["0"].width.animVal.value / ratio))
    //   } else {
    //     svg.attr('height', height)
    //   }

    // }

    // function loop(path, d0, d1) {
    //   path
    //     .attr("d", d0)
    //     .transition()
    //     .duration(scope.tweenDuration)
    //     .attr("d", d1)
    // }

    // function formatPercent(value) {
    //   return value.toFixed(2).replace('.', ',') + ' %';

    // }

    // function formatCurrency(value) {
    //   return ($filter('ispEuroFilter')(value, 2, true)) + ' €';
    // }

    // //creo grafico per la prima volta
    // if (progressData) {


    //   ispD3Service.d3().then(function (d3) {

    //     $timeout(function () {
    //       initChart(d3);
    //       drawChart(d3, progressData);

    //     });
    //   });

    // }

  }

}
