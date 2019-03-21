/**
 * Struttura dati usata per definire i Link da visualizzare nel Footer.
 * name - label visualizzata nel footer,
 * urlLink - url
 * internalState - booleano che definisce il tipo di collegamento:
 *   - true -link ad uno stato interno, gestito con un cambio di route
 *   - false - link esterno,gestito tramite apertura di un nuovo tab
 */
export interface Link {
    name: string;
    urlLink: string;
    internalState: boolean;
}
/**
 * struttura dati ancora da specializzare
 * Necessaria per la gestione del pulsante centrale del footer
 */
export interface ButtonFooter {
    name: string;
    icon: string;
    action: Function;
}
