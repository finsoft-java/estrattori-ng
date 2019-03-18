import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-tabelle-griglia',
  templateUrl: './tabelle-griglia.component.html',
  styleUrls: ['./tabelle-griglia.component.less']
})

export class TabelleGrigliaComponent implements OnInit {

  /**
  * 
  * scrollBar: gestisce lo scroollbar orizzontale della tabella
  * Type : string 
  * valori ammessi : ['auto', 'scroll']
  * 
  */
  @Input() scrollBar: string;

  /**
  * 
  * gridTable: array di array di oggetti json che rappresenta i dati da 
  *            visualizzare in tabella
  * 
  * Per ogni riga della tabella sarà presente un array di oggetti Json 
  * 
  * Ciascun Json rappresenta i valori di una colonna.
  * 
  * esempio:
  *
  * gridTable = { title:'questio è il titolo della tabella',
  *               data :[ 
  *                        1 : [  
  *                             { description : "descrizione riga 1 valore 1",
  *                               value       : "valore riga 1 valore 1"}
  *                             { description : "descrizione riga 1 valore 2",
  *                               value       : "valore riga 1 valore 2"}
  *                             { description : "descrizione riga 1 valore 3",
  *                               value       : "valore riga 1 valore 3"}
  *                             { description : "descrizione riga 1 valore 4",
  *                               value       : "valore riga 1 valore 4"}
  *                            ]
  *                        2 : [  
  *                             { description : "descrizione riga 2 valore 1",
  *                               value       : "valore riga 2 valore 1"}
  *                             { description : "descrizione riga 1 valore 2",
  *                               value       : "valore riga 2 valore 2"}
  *                             { description : "descrizione riga 1 valore 3",
  *                               value       : "valore riga 2 valore 3"}
  *                             { description : "descrizione riga 1 valore 4",
  *                               value       : "valore riga 2 valore 4"}
  *                            ]
  *                         ...................................
  *                         ...................................
  * 
  *                      ] 
  *                  };   
  * 
  */

  @Input() gridTable: any = [];

  /**
   * 
   * larghezza in px della colonna al netto dei bordi.
   * 
   */
  widthCol: number = 24.3;

  @Input() widthTitolo: number = 1090;

  //locali uso interno
  nroColTab: number = 0;
  // widthTitolo: number = 0;
  widthTabella: number = 0;
  //dimensioni bordi
  dimBordoEsterno: number = 20;
  dimBordoCelle: number = 10;

  constructor() {

  }

  startInnerWidth = null
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.widthTitolo = event.target.innerWidth
    this.widthTabella = event.target.innerWidth + this.dimBordoEsterno * 2
  }

  ngOnInit() {
    var x = this.gridTable;

    this.widthTabella = +this.widthTitolo + this.dimBordoEsterno * 2
    // this.widthCol = (+this.widthTitolo - 40) / 4

    for (let i = 0; i < this.gridTable.data.length; i++) {
      if (this.nroColTab < this.gridTable.data[i].length)
        this.nroColTab = this.gridTable.data[i].length;
    }

  }

}
