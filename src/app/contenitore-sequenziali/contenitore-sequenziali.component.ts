import {Component, OnInit, ViewChild} from '@angular/core';
import { INbpProgressConfiguration } from './interface.interface';
import {NbpStyle, NbpButtonType, NbpSize, INbpButton, NbpModalComponent} from 'cjlib';


@Component({
  selector: 'app-contenitore-sequenziali',
  templateUrl: './contenitore-sequenziali.component.html',
  styleUrls: ['./contenitore-sequenziali.component.less']
})
export class ContenitoreSequenzialiComponent implements OnInit {

  //*
  // colore dei pulsanti
  //*
  default: NbpStyle = NbpStyle.DEFAULT;
  primary: NbpStyle = NbpStyle.PRIMARY;
  secondary: NbpStyle = NbpStyle.SECONDARY;
  checkStyle: NbpStyle = NbpStyle.CHECK;
  profileStyle: NbpStyle = NbpStyle.PROFILE;
  backgroundGreen: NbpStyle = NbpStyle.BACKGROUNDGREEN;
  backgroundGray: NbpStyle = NbpStyle.BACKGROUNDGRAY;
  backgroundGrayPrimary: NbpStyle = NbpStyle.BACKGROUNDGRAYPRIMARY;
  outline: NbpStyle = NbpStyle.OUTLINE;

  //*
  // stepper da visualizzare
  //*
  steps: Array<INbpProgressConfiguration> = [
    { active: true, fillPercent: 100, label: 'step 1' },
    { active: false, fillPercent: 0, label: 'step 2' },
    { active: false, fillPercent: 0, label: 'step 3' },
    { active: false, fillPercent: 0, label: 'step 4' },
    { active: false, fillPercent: 0, label: 'step 5' }
  ];

  //*
  // Questa variabile serve per gestire il change detection
  // La sua funzione è unicamente di determinare un cambio nell'operazione
  // richiesta. La digitazione consecutiva dello stesso pulsante
  // determineregge una seguenza di NEXT o di PREV.
  // E' necessario distinguerli per determinare l'aggiornamento del componente
  // a cui è collegato
  //*
  nChangeDetection = 0;

  disablePrev: boolean = null;

  disableNext: boolean = null;

  alertMessage: string = " nessuna scelta "

  navigateOperation: string = null

  // myTemplate: any = "<h1>gggggggggggggggg</h1>";
  selectedTemplate: string = "template1"

  constructor() { }

  ngOnInit() {
  }


  Prev() {
    this.navigateOperation = "PREV" + --this.nChangeDetection;
  }

  Next() {
    this.navigateOperation = "NEXT" + ++this.nChangeDetection;
  }

  handleStepEvent($event) {
    this.disableNext = $event.disableNext;
    this.disablePrev = $event.disablePrev;
    this.alertMessage = "STEP " + (++$event.step);
    this.selectedTemplate = "template" + ($event.step)
  }

  @ViewChild('modalCancellazione')
  private modalCancellazione: NbpModalComponent;

  onClickBtnModaleCancella(event: any) {
    this.modalCancellazione.close();
  }

  private isOpened2: boolean = false;

  openModal(event: any) {
    this.isOpened2 = true;
  }

}
