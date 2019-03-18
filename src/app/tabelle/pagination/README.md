
# pagination

Il componente pagination rappresenta il paginatore delle tabelle.

Viene adoperato dalle tabelle per gestire la paginazione.

Riceve in input una serie di parametri necessari a definirne il comportamento e fornisce in output degli eventi a cui la tabella deve rispondere con il suo aggiornamento.

## Parametri Input
##------------------ 
  
 **nbpPaginationStatus**        : oggetto json indicante lo stato 
                                   {pageNumber: 1, pageSize: -1, totalRecords: -1}
 
 **nbpShowPaginationStatus**    : oggetto json indicante i pulsanti da visualizzare
                                   { next: true, prev: true, page: true, last: true, first: true }

 **nbpDisablePaginationStatus** : oggetto json indicante i pulsanti da disabilitare
                                   { next: false, prev: false, page: false, last: false, first: false }

**nbpPageWindowSize**           : numero pagine visualizzate e selezionabili (cerchietti.....)
 

## Parametri Output
##------------------ 

  **nbpOnPageChange**           : Evento notifica cambio pagina

  **nbpOnNext**                 : Evento notifica pagina successiva;

  **nbpOnGoToPage**             : Evento notifica vai a pagina specifica;

  **nbpOnPrev**                 : Evento notifica pagina precedente;

  **nbpOnFirst**                : Evento notifica prima pagina;
  
  **nbpOnLast**                 : Evento notifica ultima pagina;

Ciascun evento di output richiede l'implementazione in tabella di un adeguata funzione di gestione