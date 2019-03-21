import { OnInit, EventEmitter } from '@angular/core';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { AsyncValidatorArray, ValidatorArray } from './../nbp-commons/nbp-validator';
import { NgModel } from '@angular/forms';
/**
 * Provider Expression that allows nbp-input to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export declare const NBP_DATE_CONTROL_VALUE_ACCESSOR: any;
export declare const NBP_INPUT_ELEMENT_BASE: any;
export declare class NbpDatepickerHtml5Component extends NbpInputElementBase<string> implements OnInit {
    private validatori;
    private asyncValidatori;
    /**
     * Nome del campo di input associato al datepicker.
     */
    name: string;
    /**
     * Identificativo univoco per il text field.
     * Se nessun id è fornito e' auto-generato.
     */
    id: string;
    /**
     * (Opzionale)
     * Booleano che consente di visualizzare i messaggi di feedback relativi alla validazione.
     * Valore di default false
     */
    nbpShowValidation: boolean;
    private _nbpDisabled;
    /**
     * Flag che abilita/disabilita il campo di input-date.
     */
    disabled: boolean;
    private _nbpRequired;
    /**
     * Flag che abilita/disabilita il required sul campo di input.
     */
    required: boolean;
    /**
     * testo del placeholder
     */
    placeholder: string;
    private _nbpHighlightedDefault;
    /**
     * (opzionale ) Booleano che gestisce  l’attributo  bordo giallo del campo di input.
     * Al primo click/focus tornerà alla versione di default.
     * valore default false
     */
    nbpHighlightedDefault: boolean;
    /**
    * (Opzionale) Messaggio di errore da visualizzare in caso di campo non valido
    * Valore di Default: "Cmpo obbligatorio o invalido"
    */
    nbpErrorMessage: string;
    /**
    * (Opzionale) Evento emesso per la validazione
    */
    nbpValidation: EventEmitter<any>;
    /**
    * Evento sollevato al modifica del model associato al campo di input.
    */
    nbpOnDateChange: EventEmitter<any>;
    model: NgModel;
    constructor(validatori: ValidatorArray, asyncValidatori: AsyncValidatorArray);
    ngOnInit(): void;
}
