import {Component, OnInit, ViewChild} from '@angular/core';
import {NbpModalComponent, NbpStyle, INavigationStepEvent} from 'cjlib';


@Component({
  selector: 'app-step-navigabili-page',
  templateUrl: './step-navigabili-page.component.html',
  styleUrls: ['./step-navigabili-page.component.less'],

})
export class StepNavigabiliPageComponent implements OnInit {

  primary: NbpStyle = NbpStyle.PRIMARY;

  onNotify(message: INavigationStepEvent): void {
    console.log(message);
    this.currentIndex = message.index;
    //dacambiarecamillo 
    this[message.data.onClick]();
  }

  currentIndex = 0;

  steps = [{
      name: 'REVISIONE CONTRATTO',
      state: 'sceltaOfferta',
      selected: true,
      disabled: false,
      activated: true,
      onClick: "clickSceltaOfferta"
    }, {
      name: 'RAPPORTI',
      state: 'sceltaRapporti',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaRapporti"
    }, {
      name: 'CONTI VIRTUALI',
      state: 'generazioneContiVirtuali',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickContiVirtuali"
    }, {
      name: 'Tab Fatturazione',
      state: 'fatturazione',
      selected: false,
      disabled: true,
      activated: false,
      onClick: "clickFatturazione"
    }, {
      name: 'Conferma contratto',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickConfermaContratto"
    }, {
      name: 'Riepilogo',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickRiepilogo"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  clickSceltaOfferta = function () {

    this.steps = [{
        name: 'REVISIONE CONTRATTO',
        state: 'sceltaOfferta',
        selected: true,
        disabled: false,
        activated: true,
        onClick: "clickSceltaOfferta"
      }, {
        name: 'RAPPORTI',
        state: 'sceltaRapporti',
        selected: false,
        disabled: false,
        activated: false,
        onClick: "clickSceltaRapporti"
      }, {
        name: 'CONTI VIRTUALI',
        state: 'generazioneContiVirtuali',
        selected: false,
        disabled: false,
        activated: false,
        onClick: "clickContiVirtuali"
      }, {
        name: 'Tab Fatturazione',
        state: 'fatturazione',
        selected: false,
        disabled: true,
        activated: false,
        onClick: "clickFatturazione"
      }, {
        name: 'Conferma contratto',
        state: 'conferma',
        selected: false,
        disabled: false,
        activated: true,
        onClick: "clickConfermaContratto"
      }, {
        name: 'Riepilogo',
        state: 'conferma',
        selected: false,
        disabled: false,
        activated: true,
        onClick: "clickRiepilogo"
      }
    ];

    // $rootScope.goToState('sceltaRapporti');

  }

  clickSceltaRapporti = function () {

    this.steps = [{
      name: 'REVISIONE CONTRATTO',
      state: 'sceltaOfferta',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaOfferta"
    }, {
      name: 'RAPPORTI',
      state: 'sceltaRapporti',
      selected: true,
      disabled: false,
      activated: true,
      onClick: "clickSceltaRapporti"
    }, {
      name: 'CONTI VIRTUALI',
      state: 'generazioneContiVirtuali',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickContiVirtuali"
    }, {
      name: 'Tab Fatturazione',
      state: 'fatturazione',
      selected: false,
      disabled: true,
      activated: false,
      onClick: "clickFatturazione"
    }, {
      name: 'Conferma contratto',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickConfermaContratto"
    }, {
      name: 'Riepilogo',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickRiepilogo"
    }
  ];

    // $rootScope.goToState('sceltaRapporti');

  }

  clickContiVirtuali = function () {

    this.steps = [{
      name: 'REVISIONE CONTRATTO',
      state: 'sceltaOfferta',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaOfferta"
    }, {
      name: 'RAPPORTI',
      state: 'sceltaRapporti',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaRapporti"
    }, {
      name: 'CONTI VIRTUALI',
      state: 'generazioneContiVirtuali',
      selected: true,
      disabled: false,
      activated: false,
      onClick: "clickContiVirtuali"
    }, {
      name: 'Tab Fatturazione',
      state: 'fatturazione',
      selected: false,
      disabled: true,
      activated: false,
      onClick: "clickFatturazione"
    }, {
      name: 'Conferma contratto',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickConfermaContratto"
    }, {
      name: 'Riepilogo',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickRiepilogo"
    }
  ];

    // $rootScope.goToState('generazioneContiVirtuali');

  }

  clickFatturazione = function () {

    this.steps = [{
      name: 'REVISIONE CONTRATTO',
      state: 'sceltaOfferta',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaOfferta"
    }, {
      name: 'RAPPORTI',
      state: 'sceltaRapporti',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickSceltaRapporti"
    }, {
      name: 'CONTI VIRTUALI',
      state: 'generazioneContiVirtuali',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickContiVirtuali"
    }, {
      name: 'Tab Fatturazione',
      state: 'fatturazione',
      selected: true,
      disabled: false,
      activated: false,
      onClick: "clickFatturazione"
    }, {
      name: 'Conferma contratto',
      state: 'conferma',
      selected: false,
      disabled: true,
      activated: false,
      onClick: "clickConfermaContratto"
    }, {
      name: 'Riepilogo',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickRiepilogo"
    }];

    // $rootScope.goToState('fatturazione');

  }

  clickConfermaContratto = function () {

    this.steps = [{
      name: 'REVISIONE CONTRATTO',
      state: 'sceltaOfferta',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaOfferta"
    }, {
      name: 'RAPPORTI',
      state: 'sceltaRapporti',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaRapporti"
    }, {
      name: 'CONTI VIRTUALI',
      state: 'generazioneContiVirtuali',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickContiVirtuali"
    }, {
      name: 'Tab Fatturazione',
      state: 'fatturazione',
      selected: false,
      disabled: true,
      activated: false,
      onClick: "clickFatturazione"
    }, {
      name: 'Conferma contratto',
      state: 'conferma',
      selected: true,
      disabled: false,
      activated: false,
      onClick: "clickConfermaContratto"
    }, {
      name: 'Riepilogo',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickRiepilogo"
    }];

    // $rootScope.goToState('conferma');

  }

  clickRiepilogo = function () {
  
    this.steps = [{
      name: 'REVISIONE CONTRATTO',
      state: 'sceltaOfferta',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaOfferta"
    }, {
      name: 'RAPPORTI',
      state: 'sceltaRapporti',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickSceltaRapporti"
    }, {
      name: 'CONTI VIRTUALI',
      state: 'generazioneContiVirtuali',
      selected: false,
      disabled: false,
      activated: false,
      onClick: "clickContiVirtuali"
    }, {
      name: 'Tab Fatturazione',
      state: 'fatturazione',
      selected: false,
      disabled: true,
      activated: false,
      onClick: "clickFatturazione"
    }, {
      name: 'Conferma contratto',
      state: 'conferma',
      selected: false,
      disabled: false,
      activated: true,
      onClick: "clickConfermaContratto"
    }, {
      name: 'Riepilogo',
      state: 'conferma',
      selected: true,
      disabled: false,
      activated: false,
      onClick: "clickRiepilogo"
    }];
  }


  pippo() {
    console.log('pippo')
  }

  indietro() {
    this.currentIndex -= 1
    console.log(this.steps[this.currentIndex].onClick)
    let func = this.steps[this.currentIndex].onClick;
    this[func.toString()]()
  }

  avanti() {
    this.currentIndex += 1
    console.log(this.steps[this.currentIndex].onClick)
    let func = this.steps[this.currentIndex].onClick;
    this[func.toString()]()
  }

  isSelected(index) {
    return this.steps[index].selected
  }

  notFirst() {
    if(this.currentIndex > 0) {
      return true
    } else {
      return false
    }
  }

  notLast() {
    if(this.currentIndex < (this.steps.length-1)) {
      return true
    } else {
      return false
    }
  }


  @ViewChild('modalCancellazione')
  private modalCancellazione: NbpModalComponent;

  onClickBtnModaleCancella(event: any) {
    this.modalCancellazione.close();
  }

  protected isOpened2: boolean = false;

  openModal(event: any) {
    this.isOpened2 = true;
  }

}
