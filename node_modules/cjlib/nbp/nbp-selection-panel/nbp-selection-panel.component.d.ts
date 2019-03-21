import { EventEmitter, OnInit } from '@angular/core';
export declare class NbpSelectionPanelComponent implements OnInit {
    buttonStyle: any;
    buttonType: any;
    id: String;
    nbpTitle: String;
    imageUrl: String;
    private _selected;
    selected: boolean;
    private _disabled;
    disabled: boolean;
    /**
     * (Opzionale) Testo visualizzato nel pulsante quando non è selezionato.
     */
    nbpButtonLabel: string;
    /**
     * (Opzionale) Testo visualizzato nel pulsante quando è selezionato.
     */
    nbpSelectedButtonLabel: string;
    /**
     * (Opzionale) Evento emesso al click sul pulsante.
     * @param {EventEmitter<any>}  nbpClick
     */
    nbpClick: EventEmitter<any>;
    _onClick(): void;
    constructor();
    ngOnInit(): void;
}
