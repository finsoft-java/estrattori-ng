import {Component, OnInit} from '@angular/core';
import {NbpDataSource} from 'cjlib';
import {DemoData} from './demo.data';



// TODO componente da sistemare e testare meglio




@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  notISPCompanyIDCode: any;
  ISPServiceCompanyIDCode: any;
  applicationID: any;
  serviceVersion: any;
  language: any;
  callerProgramName: any;
  ISPBranchCode: any;
  userIDFE: any;
  notISPUserID: any;
  serviceID: any;
  transactionID: any;
  ISPCallerCompanyIDCode: any;
  callerServerName: any;
  channelIDCode: any;
  businessFileID: any;
  businessOperation: any;
  businessProcessID: any;
  customerID:any;
  businessProcessName:any

  endpoints: NbpDataSource<any>;

  ambiente: string;
  ambienteCustom: string;
  selectedEndpoint: any;
  requestType: string;
  bodyCustom: string;
  headerType: string;
  headerSelected: any;

  request: string;
  requestHeader: string;
  response: string;

  loading: boolean = false;

  constructor() {

    // Opzioni ambiente
    this.ambiente = "0";
    this.ambienteCustom = "";

    // Opzioni endpoint
    var endpointsData: any[] = DemoData.getEndpoints();
    this.endpoints = new NbpDataSource<any>(endpointsData);
    this.selectedEndpoint = endpointsData[0];

    // Opzioni body
    this.requestType = "0";
    this.bodyCustom = "";

    // Opzioni header
    this.headerType = "0";
    this.headerSelected = DemoData.getHeader(this.selectedEndpoint.name);
  }

  ngOnInit() {

  }

  onEndpointChange(newEndpoint): void {

    this.headerSelected = DemoData.getHeader(newEndpoint.name);
  }

  onSendRequest(): void {

    var ambienteURL = "";
    switch(this.ambiente) {

      case "0":
        ambienteURL = 'http://localhost:7001/pocfrontend';
        break;

      case "1":
        ambienteURL = 'http://tnbpp0.syssede.systest.sanpaoloimi.com:18081/scriptNbpp0/pocfrontend';
        break;

      case "2":
        if(this.ambienteCustom) {
          ambienteURL = this.ambienteCustom;
        }
        break;
    }

    var fullEndpoint = ambienteURL + this.selectedEndpoint.name;

    var request = null;

    if(this.requestType === "1") {

      if(this.bodyCustom) {

        request = this.bodyCustom;
      }
    }
    else {

      switch(this.selectedEndpoint.name) {

        case '/service/caller/exposedProcessesBPM':
          fullEndpoint += '?profilo=CHVLRT72R29L219S'
          break;

        case '/service/caller/testSOAPixpb0iib00':
          request = {"args0":"ciao","args1": [128, 700],"args2": "http://saxstt712:9005/scriptNbpl0/atomicservices/EchoService","args3": "http://saxstt712:9005/scriptNbpl0/atomicservices/CalcService"}
          break;
      }
    }

    var headerObject = null;

    var requestObject = {
        name: fullEndpoint,
        method: this.selectedEndpoint.http,
        input: request,
        callback: this.successCallback,
        errorHandler: this.errorCallback,
        timeout: null,
        headers: this.headerSelected,
        params: null,
        responseType: 'json'
    };

    this.request = JSON.stringify(requestObject);

    this.loading = true;




    // TODO questi sono da importare e gestire!
    var ispCommunicationManager;
    var ispServiceRequest;
    // TODO fine




    if(headerObject) {

      var promiseHeader = ispCommunicationManager.returnPromise(ispServiceRequest.initObject(headerObject));
      promiseHeader.then(function(response) {
        headerObject.callback(response);
      }, function(response) {
        headerObject.errorHandler(response);
      });
    }
    else {

      this.requestHeader = null;
    }

    var promise = ispCommunicationManager.returnPromise(ispServiceRequest.initObject(requestObject));

    promise.then(function(response) {
      requestObject.callback(response);
    }, function(response) {
      requestObject.errorHandler(response);
    });
  }

  successCallback = function(response) {

    this.loading = false;
    this.response = JSON.stringify(response);
  };

  errorCallback = function(response) {

    this.loading = false;
    this.response = 'Si è verificato un errore: ' + response.status + ' (' + response.statusText + ')';
  };

  isCustomEnvironmentDisabled(): boolean {

    return (this.ambiente !== "2");
  }

  isCustomBodyDisabled(): boolean {

    return (this.requestType !== "1");
  }

  isCustomHeaderDisabled(): boolean {

    return (this.headerType !== "1");
  }

  isSendRequestDisabled(): boolean {

    return !this.selectedEndpoint;
  }

  getRequest(): string {

    return this.request;
  }

  getRequestHeader(): string {
    
    return this.requestHeader;
  }

  getResponse(): string {
    
    return this.response;
  }
}
