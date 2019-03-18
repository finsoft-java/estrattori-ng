import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NbpStyle, NbpSize } from './elementi.enum';
import { NouiFormatter } from "nouislider";
import { FormControl } from '@angular/forms';
import {NbpCalendarDateModel} from 'cjlib';

@Component({
  selector: 'app-nbp-elementi',
  templateUrl: './elementi.component.html',
  styleUrls: ['./elementi.component.less']
})
export class ElementiComponent implements OnInit {


  //----------- Valori Inizializzazione Slider TIPO 0
  slider0Value: number = 35;
  slider0Config: any = {
    range: {
      min: 0,
      max: 100
    },
    start: 86400 / 2,
    tooltips: new TooltipFormatter(),
    step: 1,
    pips: {
      mode: 'steps'
    },
  };


  //----------- slider TIPO 1

  slider1Value: number = 10;
  slider1Config: any = {
    range: {
      min: 0,
      max: 100
    },
    start: 1 / 2,
    tooltips: new TooltipFormatter(),
    step: 1,

    pips: {
      mode: 'values',
      values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      stepped: true,
    }

  };


  //----------- Valori inizializzazione Slider tipo STORICO e PREVISIONALE
  modelSliderStorico = new FormControl((new Date(2018, 4, 4)).getTime());
  sliderStoPreStartDate = {
    day: '1',
    month: '0',
    year: '2018'

  }

  sliderStoPreEndDate = {
    day: '1',
    month: '6',
    year: '2018'

  }

  //----------- Valori Inizializzazione Slider tipo RANGE
  modelSliderRange = new FormControl([(new Date(2018, 3, 4)).getTime(), (new Date(2018, 3, 30)).getTime()])

  sliderRangeStartDate = {
    day: '1',
    month: '0',
    year: '2018'
  }
  sliderRangeEndDate = {
    day: '1',
    month: '5',
    year: '2018'

  }

  //-----------


  checkScelte(domande) {

    for (let domanda of domande) {
      // se è una checkbox obbligatoria
      if (domanda.tipoInputRisposta == 'CHECKBOX' && domanda.flgObbligatoria) {
        let checked = false;
        // ciclo le risposte, se ne trovo almeno una checked metto true
        for (let risposta of domanda.risposte) {
          if (risposta.rispostaSelezionata) {
            checked = true
          }
        }
        // se nessuna checkbox è checked ritorno false
        if (!checked) {
          return false
        }
      } else if (domanda.flgObbligatoria && !domanda.rispostaUtente) { // se non è una checkbox mi basta controllare la rispostaUtente
        return false
      }
    }
    return true
  }

  domande = [
    {
      tipoInputRisposta: 'RADIO',
      flgObbligatoria: true,
      testoDomanda: 'titolo della domanda 1',
      codDomanda: 'domanda1',
      rispostaUtente: null,
      risposte: [{
        testoRisposta: 'risposta1',
        codRisposta: 'risposta1'
      }, {
        testoRisposta: 'risposta2',
        codRisposta: 'risposta2'
      }, {
        testoRisposta: 'risposta3',
        codRisposta: 'risposta3'
      }]
    }, {
      tipoInputRisposta: 'RADIO',
      flgObbligatoria: true,
      testoDomanda: 'titolo della domanda 2',
      codDomanda: 'domanda2',
      rispostaUtente: null,
      risposte: [{
        testoRisposta: 'risposta4',
        codRisposta: 'risposta4'
      }, {
        testoRisposta: 'risposta5',
        codRisposta: 'risposta5'
      }, {
        testoRisposta: 'risposta6',
        codRisposta: 'risposta6'
      }]
    }, {
      tipoInputRisposta: 'CHECKBOX',
      flgObbligatoria: true,
      testoDomanda: 'titolo della domanda 3',
      codDomanda: 'domanda3',
      rispostaUtente: null,
      risposte: [{
        testoRisposta: 'risposta7',
        codRisposta: 'risposta7',
        rispostaSelezionata: false,
      }, {
        testoRisposta: 'risposta8',
        codRisposta: 'risposta8',
        rispostaSelezionata: false,
      }, {
        testoRisposta: 'risposta9',
        codRisposta: 'risposta9',
        rispostaSelezionata: false,
      }]
    }
  ];

  openedFilterSearchPanelResults: boolean;

  default: NbpStyle = NbpStyle.DEFAULT;
  primary: NbpStyle = NbpStyle.PRIMARY;
  secondary: NbpStyle = NbpStyle.SECONDARY;
  checkStyle: NbpStyle = NbpStyle.CHECK;
  profileStyle: NbpStyle = NbpStyle.PROFILE;
  backgroundGreen: NbpStyle = NbpStyle.BACKGROUNDGREEN;
  backgroundGray: NbpStyle = NbpStyle.BACKGROUNDGRAY;
  outline: NbpStyle = NbpStyle.OUTLINE;

  nbpSizeSM = NbpSize.SM;
  nbpSizeMD = NbpSize.MD;
  nbpSizeLG = NbpSize.LG;

  _showHelpTooltip = true;
  _tooltipHelpSize = NbpSize.MD;
  _tooltipHelpVisibility = 'click';
  _tooltipHelpText = 'Questo è il testo del tooltip Help.';

  _tooltipLeftSize = NbpSize.MD;
  _tooltipLeftText = 'Non è possibile impostare un valore inferiore al limite minimo.';

  _tooltipRightSize = NbpSize.MD;
  _tooltipRightText = 'Non è possibile impostare un valore superiore al limite massimo.';

  firstName: any;
  firstName2 = 'Testo Esempio';
  firstNameString = "g";
  exampleString: string;
  password: any;
  importo: any;
  importo2: any;

  isActive = true;
  isActive1: any;
  isActive2 = true;
  isActive3: any;
  isActive4: any;
  isActive5: any;
  isActive6: any;
  isActive7: any;

  isActiveYellow1 = true;
  isActiveYellow2 = true;

  isActiveGreen1 = true;
  isActiveGreen2 = true;



  sex = 'M';
  sex2 = 'M';
  sex4: any;
  sex3 = 'M';
  sex5 = 'M';


  buttonClicked: any;

  currentDate1: NbpCalendarDateModel;
  currentDate2: NbpCalendarDateModel;
  currentDate3: NbpCalendarDateModel;
  currentDate4: NbpCalendarDateModel;

  startDateEnabled: any;
  endDateEnabled: any;

  chars:any;

  mindate: any;
  maxdate: any;

  es: any;

  resultsFilterSearch: any;

  openedFilterSearch: boolean = false;

  // @ViewChild('data1') data1: ElementRef;
  // @ViewChild('checkBox1') checkBox1: ElementRef;


  invalidDates: Array<Date>
  constructor() {
    this.currentDate1 = new NbpCalendarDateModel(new Date());
    this.currentDate2 = new NbpCalendarDateModel(new Date());
    this.currentDate3 = new NbpCalendarDateModel(new Date());
    this.currentDate4 = new NbpCalendarDateModel(new Date());

    this.startDateEnabled = { year: this.currentDate1.year, month: this.currentDate1.month, day: 5};
    this.endDateEnabled = { year: this.currentDate1.year, month: this.currentDate1.month, day: 20 };

    this.maxdate = new Date().toISOString().slice(0, +5);
    // console.log(this.maxdate)
    this.mindate = new Date().toISOString().slice(0, -5);
    this.openedFilterSearchPanelResults = false;
  }

  buttonFilterSearchClick($event) {
    this.openedFilterSearch = !this.openedFilterSearch;
  }

  valueSelectDate1 = null;
  valueSelectDate2 = null;

  changeModel1(data: NbpCalendarDateModel) {
    console.log('Catch Event 1');
    this.currentDate1 = data;
    console.log(this.currentDate1);
  }
  changeModel2(data: NbpCalendarDateModel) {
    console.log('Catch Event 2');
    this.currentDate2 = data;
    console.log(this.currentDate2);
  }
  changeModel3(data: NbpCalendarDateModel) {
    console.log('Catch Event 3');
    this.currentDate3 = data;
    console.log(this.currentDate3);
  }
  changeModel4(data: NbpCalendarDateModel) {
    console.log('Catch Event 3');
    this.currentDate4 = data;
    console.log(this.currentDate4);
  }

  changeValueSlider(value: any) {

    alert(value)
  }

  ngOnInit() {
  }

  customFn(event) {
    setTimeout(() => {
      console.log(this.isActive)
      console.log(event.target.checked)
    }, 100);

    // console.log(event.target.checked)
  }

  cancellaData1() {
    this.currentDate1 = null;
  }
  cancellaData2() {
    this.currentDate2 = null;
  }
  cancellaData3() {
    this.currentDate3 = null;
  }
  cancellaData4() {
    this.currentDate4 = null;
  }

  findFilterSearch($datiSelezionati) {
    this.openedFilterSearchPanelResults = true;
    this.resultsFilterSearch = $datiSelezionati.slice();

  }

  deleteFilterSearch() {
    this.openedFilterSearch = null;
    this.openedFilterSearchPanelResults = null;
  }


  label: string;
  disabled: boolean;
  selected: boolean;

  itemsView = [
    //primo elemento
    {
      id: "selector-1",
      type: "combo", //combo o input
      label: "label combo 1", // label da visualizzare sul campo
      placeholder: "placeholder n. 1",
      required: false,
      viewField: "description",
      data: [   //dati
        {
          id: 11,
          description: 'Item 1-1',
          otherField: 'other Data 1-1'
        },
        {
          id: 12,
          description: 'Item 1-2',
          otherField: 'other Data 1-2',
        },
        {
          id: 13,
          description: 'Item 1-3',
          otherField: 'other Data 1-3'
        },
        {
          id: 14,
          description: 'Item 1-4',
          otherField: 'other Data 1-4'
        },
        {
          id: 15,
          description: 'Item 1-5',
          otherField: 'other Data 1-5'
        },
        {
          id: 16,
          description: 'Item 1-6',
          otherField: 'other Data 1-6'
        },
        {
          id: 17,
          description: 'Item 1-7',
          otherField: 'other Data 1-7'
        }

      ]

    },
    //secondo elemento
    {
      id: "selector-2",
      type: "input", //combo o input
      label: "label input 2", // label da visualizzare sul campo
      placeholder: "placeholder n. 2",
      required: false,
      data: null
    },
    //terzo elemento
    {
      id: "selector-3",
      type: "combo", //combo o input
      label: "label combo 3", // label da visualizzare sul campo
      placeholder: "placeholder n. 3",
      required: false,
      viewField: "description",
      data: [   //dati
        {
          id: 31,
          description: 'Item 3-1',
          otherField: 'other Data 3-1'
        },
        {
          id: 32,
          description: 'Item 3-2',
          otherField: 'other Data 3-2'
        },
        {
          id: 33,
          description: 'Item 3-3',
          otherField: 'other Data 3-3'
        },
        {
          id: 34,
          description: 'Item 3-4',
          otherField: 'other Data 3-4'
        },
        {
          id: 35,
          description: 'Item 3-5',
          otherField: 'other Data 3-5'
        },
        {
          id: 36,
          description: 'Item 3-6',
          otherField: 'other Data 3-6'
        },
        {
          id: 37,
          description: 'Item 3-7',
          otherField: 'other Data 3-7'
        }

      ]

    }

    // ,
    // //quarto elemento
    // {
    //   id :"selector-4",
    //   type: "combo", //combo o input
    //   label: "label combo 4", // label da visualizzare sul campo
    //   placeholder: "placeholder n. 4",
    //   required:false,
    //   viewField:"description",
    //   data: [   //dati
    //     {
    //       id: 41,
    //       description: 'Item 4-1',
    //       otherField: 'other Data 4-1'
    //     },
    //     {
    //       id: 42,
    //       description: 'Item 4-2',
    //       otherField: 'other Data 4-2'
    //     },
    //     {
    //       id: 43,
    //       description: 'Item 4-3',
    //       otherField: 'other Data 4-3'
    //     },
    //     {
    //       id: 44,
    //       description: 'Item 4-4',
    //       otherField: 'other Data 4-4'
    //     },
    //     {
    //       id: 45,
    //       description: 'Item 4-5',
    //       otherField: 'other Data 4-5'
    //     },
    //     {
    //       id: 46,
    //       description: 'Item 4-6',
    //       otherField: 'other Data 4-6'
    //     },
    //     {
    //       id: 47,
    //       description: 'Item 4-7',
    //       otherField: 'other Data 4-7'
    //     }



    //   ]

    // },
    // //quinto elemento
    // {
    //   id :"selector-5",
    //   type: "combo", //combo o input
    //   label: "label combo 5", // label da visualizzare sul campo
    //   placeholder: "placeholder n. 5",
    //   required:false,
    //   viewField:"description",
    //   data: [   //dati
    //     {
    //       id: 51,
    //       description: 'Item 5-1',
    //       otherField: 'other Data 5-1'
    //     },
    //     {
    //       id: 52,
    //       description: 'Item 5-2',
    //       otherField: 'other Data 5-2'
    //     },
    //     {
    //       id: 53,
    //       description: 'Item 5-3',
    //       otherField: 'other Data 5-3'
    //     },
    //     {
    //       id: 54,
    //       description: 'Item 5-4',
    //       otherField: 'other Data 5-4'
    //     },
    //     {
    //       id: 55,
    //       description: 'Item 5-5',
    //       otherField: 'other Data 5-5'
    //     },
    //     {
    //       id: 56,
    //       description: 'Item 5-6',
    //       otherField: 'other Data 5-6'
    //     },
    //     {
    //       id: 57,
    //       description: 'Item 5-7',
    //       otherField: 'other Data 5-7'
    //     }

    //   ]

    // },
    // //sesto elemento
    // {
    //   id :"selector-6",
    //   type: "combo", //combo o input
    //   label: "label combo 6", // label da visualizzare sul campo
    //   placeholder: "placeholder n. 6",
    //   required:false,
    //   viewField:"description",
    //   data: [   //dati
    //     {
    //       id: 61,
    //       description: 'Item 6-1',
    //       otherField: 'other Data 6-1'
    //     },
    //     {
    //       id: 62,
    //       description: 'Item 6-2',
    //       otherField: 'other Data 6-2'
    //     },
    //     {
    //       id: 63,
    //       description: 'Item 6-3',
    //       otherField: 'other Data 6-3'
    //     },
    //     {
    //       id: 64,
    //       description: 'Item 6-4',
    //       otherField: 'other Data 6-4'
    //     },
    //     {
    //       id: 65,
    //       description: 'Item 6-5',
    //       otherField: 'other Data 6-5'
    //     },
    //     {
    //       id: 66,
    //       description: 'Item 6-6',
    //       otherField: 'other Data 6-6'
    //     },
    //     {
    //       id: 67,
    //       description: 'Item 6-7',
    //       otherField: 'other Data 6-7'
    //     }

    //   ]

    // }

  ]

   /**TOOLTIP */
   tooltipData: any = [{
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
   text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque mollitia, 
   inventore at officia quae doloribus reiciendis consectetur perspiciatis? Vel.22`,
 },
 {
   text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque mollitia, 
   inventore at officia quae doloribus reiciendis consectetur perspiciatis? Vel.33`,
 }];
  toolSize = NbpSize.LG;
  viewTooltip_1 = true;
  viewTooltip_2 = true;

  dismissHelp_1 = (event) =>{
    this.viewTooltip_1 = false;
  };

  dismissHelp_2 = (event) =>{
    this.viewTooltip_2 = false;
  };


}

export class TooltipFormatter implements NouiFormatter {
  to(value: number): string {
    let output = value.toFixed(0) + "";
    return output;
  }

  from(value: string): number {
    return Number(value.split(" ")[0]);
  }
}
