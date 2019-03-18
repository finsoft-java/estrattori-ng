import {
  Http, BaseRequestOptions, Response, ResponseOptions,
  RequestMethod, XHRBackend, RequestOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import {Inject, Injectable} from '@angular/core';

import { Component, OnInit, ViewChild } from '@angular/core';
import { INbpButton, NbpModalComponent, NbpStyle, NbpSize, NbpDataSource, NbpButtonType, NbpLoadingComponent, NbpLoadingService } from 'cjlib';

import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/finally';
import {DOCUMENT} from '@angular/common';



const nextId = 0;

@Component({
  selector: 'app-modali',
  moduleId: module.id,
  templateUrl: './modali.component.html',
  styleUrls: ['./modali.component.less'],
  providers: [
    MockBackend,
    BaseRequestOptions
  ]
})

export class ModaliComponent implements OnInit {
  get$: Subscription;
  add$: Subscription;
  edit$: Subscription;
  delete$: Subscription;



  @ViewChild('componente1')
  _modalComponent1: any;
  @ViewChild('componente2')
  _modalComponent2: any;
  @ViewChild('componente3')
  _modalComponent3: any;
  @ViewChild('modalCancellazione')
  modalResCancellazione: NbpModalComponent;

  myFocusOn: boolean = false;
  isActive: boolean;
  firstName: string = "nome";

  @ViewChild('loading1')
  _loadingComponent1: NbpLoadingComponent;

  _nbpSize: any = NbpSize;
  primary: NbpStyle = NbpStyle.PRIMARY;

  _size: NbpSize;

  ragioneSociale = 'MEDIASET SpA';
  dataSource: NbpDataSource<string> = new NbpDataSource(['Modello 1', 'Modello 2', 'Modello 3', 'Modello 4', 'Modello 5']);
  modello = 'Modello 2';

  isOpened1 = false;
  isOpened2 = false;
  isOpened3 = false;
  isOpened4 = false;
  sex = 'M';
  sex2 = 'M';
  currentDate3: Date = new Date();

  buttons1: Array<INbpButton> = [
    { id: 'annulla1', label: 'Annulla', disabled: false, visible: true, style: NbpStyle.DEFAULT_L },
    { id: 'conferma1', label: 'Conferma', disabled: false, visible: true, style: NbpStyle.PRIMARY_R }
  ];

  buttons2: Array<INbpButton> = [
    { id: 'annulla2', label: 'Annulla', disabled: false, visible: true, style: NbpStyle.DEFAULT_L },
    { id: 'salva', label: 'Salva', disabled: false, visible: true, style: NbpStyle.DEFAULT_L },
    { id: 'conferma2', label: 'Conferma', disabled: false, visible: true, style: NbpStyle.PRIMARY_R }
  ];

  buttons3: Array<INbpButton> = [
    { id: 'annulla3', label: 'Annulla', disabled: false, visible: true, style: NbpStyle.DEFAULT_L, tabindex: 18},
    { id: 'salva3', label: 'Salva', disabled: false, visible: true, style: NbpStyle.DEFAULT_L, tabindex: 19},
    { id: 'conferma3', label: 'Conferma', disabled: false, visible: true, style: NbpStyle.PRIMARY_R, tabindex: 20}
  ];

  private BTN_ID_ANNULLA = 'BTN_ID_ANNULLA';
  private BTN_ID_CHIUDI = 'BTN_ID_CHIUDI';
  private BTN_ID_CONFERMA = 'BTN_ID_CONFERMA';

  buttons: Array<INbpButton> = [
    {
      id: this.BTN_ID_ANNULLA,
      label: 'annulla',
      disabled: false,
      visible: true,
      style: NbpStyle.PRIMARY_L,
      tabindex: 0
    },
    {
      id: this.BTN_ID_CHIUDI,
      label: 'chiudi',
      disabled: false,
      visible: false,
      style: NbpStyle.PRIMARY,
      tabindex: 2
    },
    {
      id: this.BTN_ID_CONFERMA,
      label: 'conferma',
      disabled: false,
      visible: true,
      style: NbpStyle.PRIMARY_R,
      tabindex: 4
    },
  ];

  configBtnsModaleCancella_chiudi() {
    for (const item of this.buttons) {
      const btnItem = <INbpButton>item;
      switch (btnItem.id) {
        case this.BTN_ID_ANNULLA:
          btnItem.visible = false;
          break;
        case this.BTN_ID_CONFERMA:
          btnItem.visible = false;
          break;
        case this.BTN_ID_CHIUDI:
          btnItem.visible = true;
          break;
        default:
          btnItem.visible = false;
      }
    }
  }

  configBtnsModaleCancella_init() {
    for (const item of this.buttons) {
      const btnItem = <INbpButton>item;
      switch (btnItem.id) {
        case this.BTN_ID_ANNULLA:
          btnItem.visible = true;
          break;
        case this.BTN_ID_CONFERMA:
          btnItem.visible = true;
          break;
        case this.BTN_ID_CHIUDI:
          btnItem.visible = false;
          break;
        default:
          btnItem.visible = false;
      }
    }
  }

  onClickBtnModaleCancella(event: any) {
    const btnEvent = <INbpButton>event;
    if (btnEvent.id === this.BTN_ID_CONFERMA) {
      this.configBtnsModaleCancella_init();
      this.configBtnsModaleCancella_chiudi();
    } else if (btnEvent.id === this.BTN_ID_ANNULLA) {
      this.configBtnsModaleCancella_init();
      this.modalResCancellazione.close();
    } else if (this.BTN_ID_CHIUDI) {
      this.configBtnsModaleCancella_init();
      this.modalResCancellazione.close();
    }

  }



  onClick(button: INbpButton) {
    switch (button.id) {
      case 'conferma1':
        console.log(button.label + ' premuto');
        this.isOpened1 = false;
        break;
      case 'annulla1':
        console.log(button.label + ' premuto');
        this.isOpened1 = false;
        break;
      case 'conferma2':
        console.log(button.label + ' premuto');
        this.isOpened2 = false;
        break;
      case 'annulla2':
        console.log(button.label + ' premuto');
        this.isOpened2 = false;
        break;
      case 'salva':
        console.log(button.label + ' premuto');
        this.isOpened2 = false;
        break;
      case 'elimina':
        console.log(button.label + ' premuto');
        this.isOpened2 = false;
        break;
      case 'conferma3':
        console.log(button.label + ' premuto');
        this.isOpened3 = false;
        break;
      case 'annulla3':
        console.log(button.label + ' premuto');
        this.isOpened3 = false;
        break;
      case 'salva3':
        console.log(button.label + ' premuto');
        this.isOpened3 = false;
        break;

    }
  }
  constructor(@Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
  }
  _openModalAlt1(size: NbpSize) {
    this._size = size;
    this.isOpened1 = true;
  }

  _closeModalAlt1() {
    this.isOpened1 = false;
  }

  _openModalAlt2(size: NbpSize) {
    this._size = size;
    this.isOpened2 = true;
  }

  _closeModalAlt2() {
    this.isOpened2 = false;
  }

  _openModal(modalComponent: any, size: NbpSize) {
    this._size = size;
    modalComponent.open();
  }

  _closeModal(modalComponent: any) {
    modalComponent.close();
  }

  _showLoading(loadingComponent: NbpLoadingComponent) {

    loadingComponent.startAnimation();

    setTimeout(() => {
      loadingComponent.stopAnimation()
    }, 2000);

  }

  ngOnDestroy() {
    if(!!this.get$)
      this.get$.unsubscribe();
    if(!!this.add$)
      this.add$.unsubscribe();
    if(!!this.edit$)
      this.edit$.unsubscribe();
    if(!!this.delete$)
      this.delete$.unsubscribe();
  }

  onOpen() {
    console.log('on open');
    // this.document.body.style.cssText = 'overflow: hidden';
  }

  onClose() {
    console.log('on close');
    // this.document.body.style.cssText = 'overflow: auto';
  }

  changeModel3(event) {
  }
  customFn(event) {
  }

}
