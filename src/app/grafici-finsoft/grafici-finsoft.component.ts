import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-grafici-finsoft',
  templateUrl: './grafici-finsoft.component.html',
  styleUrls: ['./grafici-finsoft.component.less']
})
export class GraficiFinsoftComponent implements OnInit {
  barChartOptions:any;
  barChartLabels:string[];
  barChartType:string;
  barChartLegend:boolean = true;
  barChartData:any[];
  canDraw:boolean = false;

  constructor (private httpService: HttpClient) {
  }

  ngOnInit() {
    let self = this;
    self.barChartOptions = {
      scaleShowVerticalLines: true,
      responsive: true
    };
    self.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    self.barChartType = 'bar';
    self.barChartLegend = true;
    self.barChartData = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
    ];

    console.log(self.barChartData);

    self.barChartData = [];
    self.barChartLabels = [];
    let obj = {
      label: "Usage perc.",
      data: []};
    let objData = {};
    self.httpService.get('./assets/query.json').subscribe(
      data => {
        console.log(data["data"]);
        for(let grafico of data["data"]) {
          self.barChartLabels.push(grafico["Tablespace"]);
          
          obj["data"].push(grafico['Usage pct.']);
        }
        self.barChartData.push(obj);
        console.log('aaaaa2');
        console.log(self.barChartLabels);
        console.log(self.barChartData);
        self.canDraw = true;
      }, 
      (err: HttpErrorResponse) => {
        console.log("sono dentro errore");
        console.log (err.message);
      }
    ); 
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
