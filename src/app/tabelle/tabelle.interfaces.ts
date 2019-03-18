import { Injectable, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, NbpPipe } from './tabelle.enum';

export interface IPaginationStatus {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
}

export interface IDataPage<T> {
  data: T[];
  status?: IPaginationStatus;
}

export interface INbpDataSource<T> {
  getPage(pageNumber?: number, sorting?: Array<string>, pageSize?: number): Observable<IDataPage<T>>;
}

export interface INbpPaginationConfiguration {
  next: boolean;
  prev: boolean;
  page: boolean;
  last: boolean;
  first: boolean;
}

export interface INbpTableColumn {
  id: string;
  title: string;
  field: string;
  sortable: boolean;
  visible: boolean;
  filter?: NbpPipe;
  filterArg?: any;
}

export interface INbpTableColumnLib extends INbpTableColumn {
  currentOrder: string;
}

export interface INbpTableOptions {
  sortable: boolean;
  pageSize?: number;
  columns?: Array<INbpTableColumn>;
  disablePagination?: boolean;
  pageGapSize?: number;
}

export interface INbpOnRowActionEvent<T> {
  item: T;
  rowIndex: number;
  globalIndex?: number;
  action: Actions;
}

export interface INbpOnRowsActionEvent<T> {
  items: Array<T>;
  lastSelectedItem: T;
}

/**
 * CellaTestata
 *
 * Definisce i campi testata della Tabella.
 * 
 * 1.	Type    	  : tipo del dato. Possibile valore : "icon" - "iconintesa" - "date" - "" 
 * 2.	Value 	    : il valore da visualizzare come intestazione della colonna
 * 3.	Style 	    : un oggetto Json che definisce il css di visualizzazione
 * 4.	ShowLevel   : livello di visualizzazione del dato della colonna nelle tabelle di tipo espandibili. 
 *                  In tali tabelle i dati ricevuti sono visualizzabili su livelli successivi a fronte di 
 *                  eventi del browse (tipicamente un click dell’utente….). 
 * 5.	Filter      : indica se la colonna deve o meno essere visualizzata nelle tabelle filtrate. 
 *  
 */



export class CellaTestata {
  constructor(
    public type: any,
    public value: any,
    public style: any,
    public showLevel: number,
    public filter: boolean,
    public styleColumn?: string,
    public subValue?: any,
    public noSort?: boolean,
  ) { }
}

/**
 * CellaDato
 *
 *  La Cella Dato è la cella base del body della tabella. 
 *  Essa è uguale per tutte le tabelle ed è costituita dalle seguenti proprietà:
 *
 *  1.	Type 	  : tipo del dato. Possibile valore : "icon" - "iconintesa" - "date" - "" 
 *  2.	Value 	: valore del dato
 *  3.	Style 	: oggetto Json che definisce il css da adoperare in visualizzazione
 *  4.  SubValue : da valorizzare in caso di hover sull'icona, con l'icona piena se nel value c'è quella vuota (oppure viceversa).
 * 
 */

export class CellaDato {
  constructor(
    public type: string,
    public value: any,
    public style?: string,
    public subValue?: string,
  ) { }
}
