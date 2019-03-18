import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tabelle-recoursive',
  templateUrl: './tabelle-recoursive.component.html',
  styleUrls: ['./tabelle-recoursive.component.less']
})
export class TabelleRecoursiveComponent implements OnInit {

  constructor() { }


  @Input() dataInput: any;

  _typeString = (input:any) => typeof input === "string"
  // _maxColumnNumber : number = 0;
  _getTypeData = (input:any) => {
    let type = typeof input;
    switch (true) {
      case type=='string':
        return type;
      case type=='number':
        return type;
      case type=='object':
        return (Array.isArray(input))?'array':type;
    }
  }

  ngOnInit() {
    // console.log(this.dataInput);
    // this.dataInput.forEach(element => {
    //   if(element.cols && Array.isArray(element.cols) && element.cols.length>this._maxColumnNumber)
    //   this._maxColumnNumber=element.cols.length
    // });
  }
  


}
