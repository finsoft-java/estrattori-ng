import { Component, OnInit } from '@angular/core';
import { ITabItem } from 'cjlib';


@Component({
  selector: 'app-tab-toggle-page',
  templateUrl: './tab-toggle-page.component.html',
  styleUrls: ['./tab-toggle-page.component.less']
})
export class TabTogglePageComponent implements OnInit {

  items: ITabItem<any>[];
  index: number;
  

  constructor() { }

  ngOnInit() {
    this.index = 1

    this.items = [
      { icon: 'icon-calendar', title: 'Ultimi 30 giorni', disabled: true } as ITabItem<any>,
      { icon: 'icon-document', title: 'Ultimi 60 giorni' } as ITabItem<any>,
      { icon: 'icomoon-Settings_ruota', title: 'Ultimi 90 giorni' } as ITabItem<any>,
    ];  
  }

  selectTab(num: number) {
    this.index = num;
  }

  onTabChange(idx: number) {
    console.log('Tab cambiato ' + idx);
    this.index = idx
  }

}
