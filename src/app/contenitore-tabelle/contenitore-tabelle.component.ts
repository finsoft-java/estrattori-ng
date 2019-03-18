import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { DatiMockTabelleService } from './../tabelle/dati-mock-tabelle.service';
import { NbpStyle, NbpButtonType, NbpSize, NbpStepDimension } from 'cjlib';

@Component({
  selector: 'app-contenitore-tabelle',
  providers: [DatiMockTabelleService],
  templateUrl: './contenitore-tabelle.component.html',
  styleUrls: ['./contenitore-tabelle.component.less']
})

export class ContenitoreTabelleComponent {

  currentUrl: string;
  primary: NbpStyle = NbpStyle.PRIMARY;
  // campi da definire per la ricerca e selezione
  itemsSelection: any;

  //intestazioni
  headingTable: any;

  //dati tabella
  dataTable: any;

  //gridTable
  gridTable: any = [];

  // modalStyle: object = {}

  //tabella customTemplateData
  customRowsTable: any = [
    { name: 'Matteo Messina Denaro', email: 'MatteoMessinaDenaro@ateam.mil' },
    { name: 'Alfano Camillo', email: 'Ludovico@ateam.mil', template: 'template0' },
    { name: 'Giuseppe Garibaldi', email: 'Giseppe@ateam.mil', template: 'template1' },
    { name: 'Pietro Nenni', email: 'face@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template0' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template1' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil', template: 'template2' },
    { name: 'Matto Dei Matti', email: 'annibale@ateam.mil' },

  ];

  /*_nbpSizeSM = NbpSize.MD

  text = '* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.'

  recTableData = [{ cols: ['col1', 'col2'] },
                  { cols: ['col_r_2',[{ cols: ['col_r_2_21','pp']}]]},
                  { cols: [[{ cols: ['f','g','l']}],[{ cols: ['c']}]]},
                  { cols:[this.text]}
                ];*/

  //tabella customTemplateData
  customRowsTableGaranzie: any = [];

  // primary: NbpStyle = NbpStyle.PRIMARY;

  checkBoxColonne: any;
  checkBoxData: any;
  fieldsTable:any;
  checkBoxIsActive = new Array();

  // isOpenedModal = false;
  // isOpenedModalCond = false;
  // isOpenedModalDinamic = false;

  constructor(
    private datiMockTabelleService: DatiMockTabelleService,
    private router: Router) {
    router.events.subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
    });
  }

  ngOnInit() {

    let self = this

    this.itemsSelection = [
      //primo campo ricerca
      {
        type: "input", //combo o input
        label: "Nome", // label da visualizzare sul campo
        placeholder: "Inserisci Nome",
        required: false,
        data: null
      },
      //secondo campo ricerca
      {
        type: "input", //combo o input
        label: "Cognome", // label da visualizzare sul campo
        placeholder: "Inserisci Cognome",
        required: false,
        data: null
      },
      //terzo campo ricerca
      {
        type: "input", //combo o input
        label: "Indirizzo", // label da visualizzare sul campo
        placeholder: "Inserisci Indirizzo",
        required: false,
        data: null
      }

    ]


    /* Lettura dati tabella */
    // --------------------------------
    // inizializzazione tabella CHECKBOX
    // --------------------------------

    if (this.currentUrl.indexOf('checkbox') > 0) {

      /* Lettura testata tabella */

      this.datiMockTabelleService.getTestataTabella("TabellaSemplice")
        .then(value => {
          self.checkBoxColonne = value;
        });

      // --- inizializzazione
      this.datiMockTabelleService.getAllClients("TabellaSemplice")
        .then(value => {
          self.checkBoxData = [...value];

          self.checkBoxIsActive = new Array();
          for (let j = 1; j <= self.checkBoxData.length; j++) {
            self.checkBoxIsActive.push(false);
          }

        });
    }

    // --------------------------------
    // inizializzazione tabella Grid
    // --------------------------------

    if (this.currentUrl.indexOf('grid') > 0) {


      // --- inizializzazione
      this.gridTable = {};

      this.gridTable.title = "GIUSEPPE GARIBALDI";

      this.gridTable.data = [];
      let  gridTableRow = []

      // --- caricamento dati Riga 1
      gridTableRow = [];
      gridTableRow.push({
        description: 'SNSG',
        value: '0000000025524427'
      })
      gridTableRow.push({
        description: 'Partita IVA',
        value: '-'
      })
      gridTableRow.push({
        description: 'Codice Fiscale',
        value: 'CRLGPP55D16G157P'
      })
      gridTableRow.push({
        description: 'Sede Legale',
        value: '-'
      })
      this.gridTable.data.push(gridTableRow)

      // --- caricamento dati Riga 2
      gridTableRow = [];
      gridTableRow.push({
        description: 'Sede Operativa',
        value: '-'
      })
      gridTableRow.push({
        description: 'Domicilio - Città',
        value: 'Osimo'
      })
      gridTableRow.push({
        description: 'Domicilio - Indirizzo',
        value: 'Via Roma 64'
      })
      gridTableRow.push({
        description: 'Art. 136',
        value: 'NO'
      })
      this.gridTable.data.push(gridTableRow)

      // --- caricamento dati Riga 3
      gridTableRow = [];
      gridTableRow.push({
        description: 'Parti correlate',
        value: 'N'
      })
      gridTableRow.push({
        description: 'Segmento',
        value: '-'
      })
      gridTableRow.push({
        description: 'SAE',
        value: '600 famiglie'
      })
      gridTableRow.push({
        description: 'ATECO',
        value: '-'
      })
      this.gridTable.data.push(gridTableRow)

      // --- caricamento dati Riga 4
      gridTableRow = [];
      gridTableRow.push({
        description: 'Gruppo economico',
        value: '-'
      })
      gridTableRow.push({
        description: 'Stato Amministrativo',
        value: '-'
      })
      gridTableRow.push({
        description: 'Pregiudizievoli',
        value: '-'
      })
      gridTableRow.push({
        description: 'Forma Giuridica',
        value: '-'
      })
      this.gridTable.data.push(gridTableRow)

      // --- caricamento dati Riga 5
      gridTableRow = [];
      gridTableRow.push({
        description: 'Segmento regolamentare',
        value: '-'
      })
      gridTableRow.push({
        description: 'Rating',
        value: 'al'
      })
      gridTableRow.push({
        description: 'Consumatore',
        value: 'Si'
      })
      this.gridTable.data.push(gridTableRow)


    }

    // --------------------------------
    // inizializzazione tabella custom
    // --------------------------------
    this.customRowsTableGaranzie.push({
      'valoregaranzia': '111.111,11 EUR',
      'iscrizioneipotecaria': '111.747,33 EUR',
      'importogarantito': '11.498,95 EUR',
      'nettogaranzia': '111.101,64 EUR',
      'dataperfezionamento': '20.05.1996',
      'datastipula': '10.05.1996',
      'quotagaranzia': '100',
      'gradiiscrizioneipotecaria': '1',
      'template': 'template0'
    })

    this.customRowsTableGaranzie.push({
      'valoregaranzia': '222.222,22 EUR',
      'iscrizioneipotecaria': '222.222,22 EUR',
      'importogarantito': '22.222,22 EUR',
      'nettogaranzia': '222.101,64 EUR',
      'dataperfezionamento': '20.05.1996',
      'datastipula': '20.25.2996',
      'quotagaranzia': '100',
      'gradiiscrizioneipotecaria': '1',
      'template': 'template0'
    })

    this.customRowsTableGaranzie.push({
      'valoregaranzia': '333.333,33 EUR',
      'iscrizioneipotecaria': '333.333,33 EUR',
      'importogarantito': '33.333,33 EUR',
      'nettogaranzia': '160.101,64 EUR',
      'dataperfezionamento': '20.05.1996',
      'datastipula': '10.05.1996',
      'quotagaranzia': '100',
      'gradiiscrizioneipotecaria': '1',
      'template': 'template0'
    })

    this.fieldsTable = [new Array(), new Array()];

    /* Lettura testata tabella */
    // ----------------------------------------------
    // inizializzazione tabella accordion espandibile
    // ----------------------------------------------

    if (this.currentUrl.indexOf('accordion') > 0) {

      this.datiMockTabelleService.getTestataTabella("TabellaEspandibile")
        .then(value => {

          self.headingTable = [...value];
          let objBuffer: any = Object.keys(self.headingTable[0])

          objBuffer.forEach(key => {
            // showLevel: 0 o 1 individua l'indice dell'array in cui memorizzare la key
            // l'array avrà in 0 le key da visualizzare inizialmente. In 1 quelle da visualizzare dopo.
            self.fieldsTable[self.headingTable[0][key].showLevel].push(key)

          })

        });

      /* Lettura dati tabella */
      this.datiMockTabelleService.getAllClients("TabellaEspandibile")
        .then(value => {
          self.dataTable = [...value];
        });

    }

  }

}
