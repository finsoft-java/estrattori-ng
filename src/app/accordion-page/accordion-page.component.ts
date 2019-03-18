import { Component, OnInit } from '@angular/core';
import { NbpStyle, NbpSize } from 'cjlib';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.less']
})
export class AccordionPageComponent implements OnInit {

  accordionStyleTypePrimary: any

  accordionTitle = 'Titolo Esempio Accordion';
  accordionSubtitle = 'Sottotitolo Esempio Accordion';
  accordionTitle1 = 'Stringa opzionale';
  accordionIcon = 'ico-vorrei-c-miinteressa-n';
  accordionString = 'Stringa Esempio Accordion';

  nbpSizeSM = NbpSize.SM
  nbpSizeMD = NbpSize.MD

  constructor() { }

  ngOnInit() {
  }

  callbackButtonAccordion(event:any){

    alert("xxxxxxxxxxxx")

  }


}



// import { Component, ViewChild, OnInit } from '@angular/core';

// import { INbpAccordion } from 'cjlib';
// import { NbpStyle } from 'cjlib';

// @Component({
//   selector: 'app-accordion',
//   moduleId: module.id,
//   templateUrl: './accordion.component.html',
//   styleUrls: ['./accordion.component.less']
// })
// export class AccordionComponent implements OnInit {
//   primary: NbpStyle = NbpStyle.PRIMARY;
//   accordionStyleTypePrimary: NbpStyle= NbpStyle.PRIMARY;
//   accordionStyleTypeDefault: NbpStyle= NbpStyle.DEFAULT;

//   accordionTitle = 'Titolo Esempio Accordion';
//   accordionTitle1 = 'Stringa opzionale';
//   accordionIcon = 'ico-vorrei-c-miinteressa-n';

//   @ViewChild('accordion') innerAccordion: INbpAccordion;

//   constructor() { }
//   toggleAccordion() {
//     this.innerAccordion.isCollapsed() ? this.innerAccordion.open() : this.innerAccordion.close();
//   }

//   ngOnInit() {
//   }

// }

