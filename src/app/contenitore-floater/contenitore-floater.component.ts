import { Component, OnInit } from '@angular/core';
import {IButtonBoxFloaterConfigurator} from 'cjlib';

@Component({
  selector: 'contenitore-floater',
  templateUrl: './contenitore-floater.component.html',
  styleUrls: ['./contenitore-floater.component.less']
})

export class ContenitoreFloaterComponent {

  pagina: Array<string>
  boxPrincipaleContents: Array<IButtonBoxFloaterConfigurator>;
  boxSecondarioContents: Array<IButtonBoxFloaterConfigurator>;
  helpTooltip:string = "messaggio di help"

  exampleCallBackFunction1Before = (n: any) => {
    alert("1) CallBackFunction tipo 1111111: stai andando verso l'Id :" + n + "--")
  }

  exampleCallBackFunction2Before = (n: any) => {
    alert("2) CallBackFunction TIPO 2222222: stai andando verso l'Id :" + n + "--")
  }
  exampleCallBackFunction1After = (n: any) => {
    alert("1) CallBackFunctionAfter tipo 1111111: hai raggiunto l'Id :" + n + "--")
  }

  exampleCallBackFunction2After = (n: any) => {
    alert("2) CallBackFunctionAfter TIPO 2222222: hai raggiunto l'Id :" + n + "--")
  }

  customFunction1 = (n: any) => {
    alert("custom function 1")
  }

  customFunction2 = (n: any) => {
    alert("custom function 2")
  }

  customFunction3 = (n: any) => {
    alert("custom function 3")
  }

  customFunction4 = (n: any) => {
    alert("custom function 4")
  }

  customFunction5 = (n: any) => {
    alert("custom function 5")
  }

  constructor() {

    /**
    * Pagina di esempio su cui avverranno i movimenti del Floater.
    * La pagina potrà essere costituita da codice html con inseriti degli id a cui
    * opzionalmente punteranno i diversi pulsanti del fòloater.
    * un pulsante per ciascun id definito.
    */
    this.pagina = [];
    for (let i = 0; i <= 400; i++) {

      let stringa = "";

      for (let j = 1; j < 150; j++) {
        stringa = stringa + i % 10;
      }

      this.pagina.push(stringa);

    }

    /**
    * Esempio di Box principale Floater
    * Il Box principale è il Box visualizzato inizialmente dal Floater.
    * Scompare in modalità toggle all'apparizione del Box secondario.
    * E' costituito da un numero variabile di pulsanti definiti tramite un array di
    * oggetti json tipo IButtonBoxFloaterConfigurator
    */
    this.boxPrincipaleContents = [];
    this.boxPrincipaleContents.push({
      icon: "icomoon-Soldi_Risorsa-14",
      iconText: "Bonifico",
      tooltip: "Bonifico",
      function: this.customFunction1
      // scrollTo: "someId80",
      // callbackBefore: this.exampleCallBackFunction1Before,
      // callbackAfter: this.exampleCallBackFunction1After
    });
    this.boxPrincipaleContents.push({
      icon: "ico-ops-bollettinopremarcato",
      iconText: "Bollettino",
      tooltip: "Bollettino",
      function: this.customFunction2
    });
    this.boxPrincipaleContents.push({
      icon: "icomoon-Documenti_5",
      iconText: "F24",
      tooltip: "F24",
      function: this.customFunction3
    });
    this.boxPrincipaleContents.push({
      icon: "icomoon-Devices_cel1",
      iconText: "Ricarica",
      tooltip: "Ricarica",
      function: this.customFunction4
    });
    this.boxPrincipaleContents.push({
      icon: "icomoon-FloaterPersonalizza",
      iconText: "Personalizza",
      tooltip: "Personalizza",
      function: this.customFunction5
    });


    /**
    * Esempio di Box secondario Floater
    * Il Box secondario è un Box che appare in modalità toggle alla
    * digitazione dell' ultimo pulsante del Box Principale e/o della Freccia di espansione.
    * E' costituito da un numero variabile di pulsanti definiti tramite un array di
    * oggetti json tipo IButtonBoxFloaterConfigurator
    */

    this.boxSecondarioContents = [];
    this.boxSecondarioContents.push({
      icon: "icomoon-Eventi_palla",
      iconText: "",
      tooltip: "Tooltip 1",
      function: this.customFunction1,
      // scrollTo: "someId40",
      // callbackBefore: this.exampleCallBackFunction2Before,
      // callbackAfter: this.exampleCallBackFunction2After
    })
    this.boxSecondarioContents.push({
      icon: "icomoon-Edifici_14",
      iconText: "",
      tooltip: "Tooltip 2",
      function: this.customFunction2,
    })
    this.boxSecondarioContents.push({
      icon: "icomoon-Edifici_15",
      iconText: "",
      tooltip: "Tooltip 3",
      function: this.customFunction3,
    })
    this.boxSecondarioContents.push({
      icon: "icomoon-Firma_5",
      iconText: "",
      tooltip: "Tooltip 4",
      function: this.customFunction4,
    })
    this.boxSecondarioContents.push({
      icon: "icomoon-Facce_triste2",
      iconText: "",
      tooltip: "Tooltip 5",
      function: this.customFunction5,
    })

  }

}
