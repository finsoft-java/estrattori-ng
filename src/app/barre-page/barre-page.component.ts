import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-page',
  templateUrl: './barre-page.component.html',
  styleUrls: ['./barre-page.component.less']
})
export class BarrePageComponent implements OnInit {

  chartsData = {
    type: 'bar',
    subtype: 'no_icon',
    // title: 'VITA RESIDUA/DURATION',
    data: [{
      group: 'rischio',
      subdata: {
        data: [{
          label: 'RISCHIO PORTAFOGLIO',
          href: 'http://www.google.it',
          value: '9.6',
        }]
      }
    }, {
      group: 'azioni',
      subdata: {
        data: [{
          label: 'LABEL TROPPO LUNGA BISOGNA METTERE IL TOOLTIP',
          value: '31.35'
        }, {
          label: 'AZIONI ITALIA',
          value: '25.20',
        }, {
          label: 'AZIONI NORD AMERICA',
          value: '14.35',
        }]
      }
    }, {
      group: 'obbligazioni',
      subdata: {
        data: [{
          label: 'OBBL. GOV. ITALIA',
          value: '12.33',
        }, {
          label: 'OBBL. GOV. EURO EX ITALIA MT',
          value: '11.40',
        }, {
          label: 'ALTRA LABEL TROPPO LUNGA BISOGNA METTERE IL TOOLTIP',
          value: '9.23',
        }]
      }
    }],
    colors: ['#610B0B', '#688A08', '#0489B1']
  }

  chartsData2 = {
    type: 'bar',
    subtype: 'icon',
    button_string: 'DETTAGLIO',
    // title: 'VITA RESIDUA/DURATION',
    // hideDetails: true,
    data: [{
        label: 'ITALIA',
        href: 'http://www.google.it',
        is64: false,
        image: "assets/images/Analisi Patrimonio/Area geografica/Italia.png",
        value: '55201,63',
            percent: 70.33,
    }, {
            label: 'EUROPA',
            is64: false,
            image: "assets/images/Analisi Patrimonio/Area geografica/Europa.png",
            value: '2253,74',
            percent: 23.69,
            subdata: {
                data: [{
                    label: 'Germania',
                    href: 'http://www.google.it',
                    is64: false,
                    image: "assets/images/Analisi Patrimonio/Area geografica/germania.png",
                    value: '2253,74',
                    percent: 13.69,
                    color: '#01DFD7'
                },{
                    label: 'Francia',
                    is64: false,
                    image: "assets/images/Analisi Patrimonio/Area geografica/francia.png",
                    value: '2253,74',
                    percent: 5,
                    color: '#01DFD7'
                },{
                    label: 'Svizzera',
                    is64: false,
                    image: "assets/images/Analisi Patrimonio/Area geografica/Svizzera.png",
                    value: '2253,74',
                    percent: 5,
                    color: '#01DFD7'
                }]
           }
    }, {
        label: 'NORDAMERICA',
            is64: false,
            image: "assets/images/Analisi Patrimonio/Area geografica/Nord America.png",
            value: '2684,08',
            percent: 4.33,

    },{

            label: 'GIAPPONE',
            is64: false,
            image: "assets/images/Analisi Patrimonio/Area geografica/Giappone.png",
            value: '0,00',
            percent: 0.00,

    }, {
            label: 'EMERGENTI',
            is64: false,
            image: "assets/images/Analisi Patrimonio/Area geografica/emergenti.png",
            value: '0,00',
            percent: 0.00,
    }],
    colors: ['#DF013A','#01DFD7','#4B088A','#610B0B']
}


  constructor() { }

  ngOnInit() {
  }

}
