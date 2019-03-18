Informazioni Generali Tabelle
=============================

Nella definizione dei dati tabelle è stato introdotto il concetto di Cella intesa come Unità Minima  
•	di informazione da visualizzare 
•	e di layout da realizzare

Esistono due tipi di Celle: la CellaDato e la CellaTestata.

CellaTestata
============

Definisce i campi testata della Tabella.
 
1.	Type    	:   Tipo dato. Possibile valori : "icon" - "iconintesa" - "date" - "" 
2.	Value 	    :   testo o icona da visualizzare nella intestazione colonna
3.	Style 	    :   oggetto Json che modifica il css di visualizzazione del dato. 
4.	ShowLevel   :   livello di visualizzazione del dato della colonna nelle tabelle 
                    di tipo espandibili. 
                    In tali tabelle i dati ricevuti sono visualizzabili su livelli
                    successivi a fronte di eventi del browse (tipicamente un click    
                    dell’utente….). 
5.	Filter      :   indica se la colonna deve o meno essere visualizzata nelle 
                    tabelle filtrate. 

CellaDato
=========

La Cella Dato è la cella base del body della tabella. 
Essa è uguale per tutte le tabelle ed è costituita dalle seguenti proprietà:

1.	Type    : tipo del dato. Possibile valore : "icon" - "iconintesa" - "date" - "" 
2.	Value   : valore del dato
3.	Style   : oggetto Json che definisce il css da adoperare in visualizzazione


Le tabelle visualizzano dati variabile in termini
 
1.	di contenuto informativo e  
2.	di dimensione dei dati.

Ciascuna tabella, ricevuto i dati, li formattano e li interpretano secondo le loro necessità.

Successivamente li visualizzano ponendosi in ascolto degli eventi.