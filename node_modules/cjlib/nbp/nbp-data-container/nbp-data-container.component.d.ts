import { OnInit } from '@angular/core';
import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
export declare class NbpDataContainerComponent implements OnInit {
    private formatterService;
    /**
     * testo visualizzato sopra il campo read-only
     */
    nbpLabel: string;
    /**
     * testo read-only
     */
    nbpData: any;
    /**
     * (Opzionale) Attributo di tipo NbpPipe(Enum) rappresentante i filtri messi a disposizione dalla
     * libreria per i campi di input, se presente, l’attributo abilita l’utilizzo del filtro indicato
     * "IMPORTO" | "DECIMAL" | "DATE" | "LOWERCASE" | "PERCENT" | "UPPERCASE"
     */
    nbpFilter: NbpPipe;
    /**
    * (Opzionale) argomenti da utilizzare per il filtro
    *
    */
    nbpFilterArg: any;
    _nbpViewValue: any;
    ngOnInit(): void;
    _getViewValue(item: any): any;
    constructor(formatterService: NbpFormatterService);
}
