import { Component, OnInit } from '@angular/core';
import { NbpStyle } from 'cjlib';

@Component({
  selector: 'app-contenitore-sticky-tab',
  templateUrl: './contenitore-sticky-tab.component.html',
  styleUrls: ['./contenitore-sticky-tab.component.less']
})
export class ContenitoreStickyTabComponent implements OnInit {

  items: any[] = [
    { icon: 'icon-calendar', title: 'Calendario', disabled: true },
    { icon: 'icon-document', title: 'Documenti' },
    { icon: 'icomoon-Settings_ruota', title: 'Impostazioni' },
  ];

  primary: NbpStyle = NbpStyle.PRIMARY;

  selectedTab: number = 1;
  firstEntry: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  handleTabChange($event) {

    if (!this.firstEntry)
      console.log("selezionato Tab" + $event)

    this.firstEntry = false;
  }


}
