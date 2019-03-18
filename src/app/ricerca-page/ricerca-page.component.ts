import { Component, OnInit } from '@angular/core';
import {NbpStyle} from 'cjlib';

@Component({
  selector: 'app-ricerca-page',
  templateUrl: './ricerca-page.component.html',
  styleUrls: ['./ricerca-page.component.less']
})
export class RicercaPageComponent implements OnInit {

  constructor() { }

  secondary: NbpStyle = NbpStyle.SECONDARY;

  ngOnInit() {
  }

  results = [];
  startSearch(evt){
    alert(evt)
  };

  buildResult($event) {
    this.results = [];
    if (($event !== '') && (typeof $event === "string")) {
      let dato = {
        group: 'Tipologia Risultati',
        label: 'suggerimento: ' + $event,
        subtitle: 'Sottotitolo',
        description: 'Descrizione',
        type: 'Label Accessoria'
      };

      for (let index = 0; index < 6; index++) {
        if (index > 2) {
          let dato2 = { ...dato };
          dato2.group = 'Tipologia Risultati 2';
          this.results.push(dato2);
        } else {
          this.results.push(dato);
        }
      };
    }
  }

  /**
   * funzione del click della scritta "mostra più risultati". Può ad esempio
   * popolare con più suggerimenti il componente o aprire altre pagine.
   */
  showMore() {
    alert('mostra più risultati clickato.');
  }
}
