import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
// import { Domanda } from "../../fidd0-data-model";
import { NbpDataSource, NbpInputContainerComponent, NbpSize } from "cjlib";

@Component({
  selector: 'fidd0-questionario-question',
  templateUrl: './fidd0-questionario-question.component.html',
  styleUrls: ['./fidd0-questionario-question.component.less'],
})
export class Fidd0QuestionarioQuestionComponent {

  @Input() name: string;
  @Input() domanda: any;
  @Input() options: any;
  @Output() inputChangeEvent = new EventEmitter<any>();

  tooltipSizeMedium: NbpSize = NbpSize.MD;

  @ViewChild(NbpInputContainerComponent) inputContainer: NbpInputContainerComponent;

  constructor() {
  }

  // richiamata ad ogni modifica di input dell'utente
  onModelChange(domanda: any) {
    this.inputChangeEvent.emit(domanda);
  }

  // costruisce il data source per le domanda di tipo SELECT
  buildComboDataSource(domanda: any) {
    return new NbpDataSource<any>(domanda.risposte);
  }

  checkedRequired(risposte: any) {
    for (let risposta of risposte) {
      if(risposta.rispostaSelezionata) {
        return true
      }
    }
    return false
  }

}
