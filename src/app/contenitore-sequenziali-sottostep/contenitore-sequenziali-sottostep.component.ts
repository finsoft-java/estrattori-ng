import {Component, OnInit, ViewChild} from '@angular/core';
import { INbpProgressConfiguration } from './interface.interface';
import {NbpStyle, NbpButtonType, NbpSize, NbpStepDimension, NbpModalComponent} from 'cjlib';

@Component({
  selector: 'app-contenitore-sequenziali-sottostep',
  templateUrl: './contenitore-sequenziali-sottostep.component.html',
  styleUrls: ['./contenitore-sequenziali-sottostep.component.less']
})
export class ContenitoreSequenzialiSottostepComponent implements OnInit {

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
    { active: true, fillPercent: 25, label: 'step 1', stepDimension: NbpStepDimension.GRANDE },
    { active: false, fillPercent: 0, label: 'step 2', stepDimension: NbpStepDimension.GRANDE },
    { active: false, fillPercent: 0, label: 'step 3', stepDimension: NbpStepDimension.GRANDE },
    { active: false, fillPercent: 0, label: 'step 4', stepDimension: NbpStepDimension.GRANDE }
  ];

  //*
  // sottoStepper da visualizzare
  //*
  pagingSteps = [{
    currentParentLabel: 'Step 1',
    pages: [
      {
        label: 'Sottostep 1'
      },
      {
        label: 'Sottostep 2'
      },
      {
        label: 'Sottostep 3'
      },
      {
        label: 'Sottostep 4'
      },
      {
        label: 'Sottostep 5'
      }
    ]
  },
  {
    currentParentLabel: 'Step 2',
    pages: [
      {
        label: 'Sottostep 1'
      },
      {
        label: 'Sottostep 2'
      },
      {
        label: 'Sottostep 3'
      }
    ]
  },
  {
    currentParentLabel: 'Step 3',
    pages: [
      {
        label: 'Sottostep 1'
      },
      {
        label: 'Sottostep 2'
      }
    ]
  },
  {
    currentParentLabel: 'Step 4',
    pages: [
      {
        label: 'Sottostep 1'
      },
      {
        label: 'Sottostep 2'
      }
    ]
  }];

  //*
  // Questa variabile serve per gestire il change detection
  // La sua funzione è unicamente di determinare un cambio nell'operazione
  // richiesta. La digitazione consecutiva dello stesso pulsante
  // determineregge una seguenza di NEXT o di PREV.
  // E' necessario distinguerli per determinare l'aggiornamento del componente
  // a cui è collegato
  //*
  nChangeDetection: number = 0;

  disablePrev: boolean = null;

  disableNext: boolean = null;

  alertMessage: string = " nessuna scelta "

  navigateOperation: string = null

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
    this.alertMessage = "STEP " + (++$event.step) + "   --   SOTTOSTEP " + $event.sottoStep
    this.selectedTemplate = "template" + ($event.step)

  }

  private isOpened2: boolean = false;

  openModal(event: any) {
    this.isOpened2 = true;
  }

}
