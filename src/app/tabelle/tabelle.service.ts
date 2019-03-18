import { Injectable, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { INbpTableColumnLib, IPaginationStatus, INbpPaginationConfiguration } from './tabelle.interfaces';
import { debuglog } from 'util';


@Injectable()
export class TableUtilService<T> {

  columns: Array<INbpTableColumnLib>;
  currentPageStatus: IPaginationStatus;
  disablePaginationStatus: INbpPaginationConfiguration;

  constructor() { 
    this.disablePaginationStatus = {
      first: false,
      last: false,
      next: false,
      page: false,
      prev: false
    };
 
    this.currentPageStatus = {
      pageNumber: 1,
      pageSize: 5,
      totalRecords: 20
    }

  }

  strToJson(jsonString: string) {

    if (!jsonString)
      jsonString = null;

    return JSON.parse(jsonString);
  }


  setColumns(columns: Array<INbpTableColumnLib>) {
    this.columns = columns;
  };

  getCurrentPageStatus(): IPaginationStatus {
    return this.currentPageStatus;
  }

  setCurrentPageStatus(currentPageStatus: IPaginationStatus) {
    if (currentPageStatus.totalRecords > 0) {
      this.disablePaginationStatus.last = false;
    } else {
      this.disablePaginationStatus.last = true;
    }
    this.currentPageStatus = currentPageStatus;
    if (currentPageStatus.totalRecords && (currentPageStatus.pageNumber) * currentPageStatus.pageSize > currentPageStatus.totalRecords) {
      this.disablePaginationStatus.next = true;
    } else {
      this.disablePaginationStatus.next = false;
    }
  };

  setCurrentPageNumber(pageNumber: number) {
    this.currentPageStatus.pageNumber = pageNumber;
  }

  getColumns(): Array<INbpTableColumnLib> {
    return this.columns;
  }

  setColumnOrdering(columnField: string, orderingType?: string) {
    this.columns.map((element) => {
      element.currentOrder = null;
      if (element.field === columnField) {
        element.currentOrder = orderingType === undefined ? '' : orderingType;
      }
    });
  }

  getCurrentOrdering() {
    let filteredOrders = this.columns.filter((column) => { return column.currentOrder !== null; });
    let orders = filteredOrders.map((column) => { return column.currentOrder + column.field; });
    return orders;
  };

  findGlobalIndex(rowIndex: number) {
    return this.currentPageStatus ? (this.currentPageStatus.pageSize * (this.currentPageStatus.pageNumber - 1)) + (rowIndex) : -1;
  }

  findIndexOfSelectedByItem(item: T, selectedRows: Array<T>) {
    let itemSelectedId: number = -1;
    selectedRows.map((row, index) => {
      if (row === item) {
        itemSelectedId = index;
      }
    });

    return itemSelectedId;
  }

}

