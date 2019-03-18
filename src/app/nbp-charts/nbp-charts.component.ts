import { Component, OnInit } from '@angular/core';
import { NbpChartData } from 'cjlib';

@Component({
  selector: 'app-nbp-charts',
  templateUrl: './nbp-charts.component.html',
  styleUrls: ['./nbp-charts.component.less']
})
export class NbpChartsComponent implements OnInit {
  ngOnInit() {
  }

  nbpData: NbpChartData; 
  
  isModalOpen = false; 
  
  value = 0; 

  constructor() {

    this.nbpData = {
      title: 'IO E LA MIA FAMIGLIA',
      headers: [
        {
          content: 'Livello copertura presso Banca: <b>MEDIO</b>', 
          tooltipContent: 'Tooltip for livello di copertura'     
        },
        {
          content: 'Livello copertura presso terzi: <b>ALTO</b>',
          
        }
      ],
      barGroups : [
        {
          bars: [{
            label: 'Bisogno Assicurativo',
            value: 100,
            min: 0,
            max: 100,
            color: 'lightblue', 
          }],
        },
        {
          bars: [{
            label: 'Copertura ottenuta presso Banca',
            value: 60,
            min: 0,
            max: 100,
            color: 'orange', 

          },
          {
            label: 'Copertura ottenuta presso Terzi',
            value: 60,
            min: 0,
            max: 100,
            color: 'yellow', 
           
          }]
        }
        
      ]

    };
  }

}