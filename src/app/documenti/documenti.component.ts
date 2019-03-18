import { Component, OnInit } from '@angular/core';
import { NbpStyle, NbpSize } from '../elementi/elementi.enum';
import { NbpDataSource } from 'cjlib';

@Component({
  selector: 'app-documenti',
  templateUrl: './documenti.component.html',
  styleUrls: ['./documenti.component.less']
})
export class DocumentiComponent implements OnInit {

  runIE: boolean = false;

  disabled: boolean = false;

  comune: string = '';

  provincia: string = '';

  paese: string = '';

  changeFile1(files) {
    console.log(files);
    // console.log(this.uploader)
  }
  
  changeFile2(files) {
    console.log(files);
    // console.log(this.uploader)
  }

  iconFn(file){
    alert("Il file è: " + file.name);
  }

  tipoFile = 'application/pdf,image/jpeg,image/png,image/gif';

  label1 = 'Documento di identità';

  label2 = 'Tessera Sanitaria Nazionale';

  toltipDimension = NbpSize.MD;

  nDocumento = '';
  
  items = ['primo elemento', 'secondo elemento', 'terzo elemento'];
  items1 = ['primo elemento', 'secondo elemento', 'terzo elemento'];

  itemsDataSource: NbpDataSource<string>;
  itemsDataSource1: NbpDataSource<string>;
  
  selectedItem = this.items[1];
  selectedItem1 = this.items[0];
  
  currentDate1: Date;
  currentDate2: Date;
  
  changeModel1(data: Date) {
    console.log('Catch Event 1');
    this.currentDate1 = data;
    console.log(this.currentDate1);
  }

  changeModel2(data: Date) {
    console.log('Catch Event 2');
    this.currentDate2 = data;
    console.log(this.currentDate2);
  }

  // config = {queueLimit: 1, allowedFileType: ['.pdf']}

  constructor() {
    this.itemsDataSource = new NbpDataSource<string>(this.items);
    this.itemsDataSource1 = new NbpDataSource<string>(this.items1);
    
    this.currentDate1 = new Date();
    this.currentDate2 = new Date();
  }

  ngOnInit() {
    this.runIE = this.detectIE();
  }

  /**
   * detect IE
   * ritorna la versione di IE o false se il browser non è Internet Explorer
   */
  detectIE(): boolean {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      return true
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      return true
    }

    return false;
  }
}