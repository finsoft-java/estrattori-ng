import { Component, OnInit } from '@angular/core';
import { NbpStyle, NbpButtonType, NbpSize } from 'cjlib';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

// import { INbpSwitchStructure, NpbSwitchDispalyType } from 'cjlib';

@Component({
  selector: 'app-pulsanti-page',
  templateUrl: './pulsanti-page.component.html',
  styleUrls: ['./pulsanti-page.component.less']
})
export class PulsantiPageComponent implements OnInit {
  label: String = 'Pulsante Test';
  isSelection: Boolean = false;
  default: NbpStyle = NbpStyle.DEFAULT;
  primary: NbpStyle = NbpStyle.PRIMARY;
  secondary: NbpStyle = NbpStyle.SECONDARY;
  checkStyle: NbpStyle = NbpStyle.CHECK;
  profileStyle: NbpStyle = NbpStyle.PROFILE;
  backgroundGreen: NbpStyle = NbpStyle.BACKGROUNDGREEN;
  backgroundGray: NbpStyle = NbpStyle.BACKGROUNDGRAY;
  backgroundGrayPrimary: NbpStyle = NbpStyle.BACKGROUNDGRAYPRIMARY;
  outline: NbpStyle = NbpStyle.OUTLINE;
  select: NbpButtonType = NbpButtonType.SELECT;
  check: NbpButtonType = NbpButtonType.CHECK;
  profile: NbpButtonType = NbpButtonType.PROFILE;
  generative: NbpButtonType = NbpButtonType.GENERATIVE;
  lg: NbpSize = NbpSize.LG;
  callback(event: any) {
    console.log('TEST: Callback eseguita con successo');
  }

  // checkTypeIconText: NpbSwitchDispalyType = NpbSwitchDispalyType.ICON_TEXT;
  // checkTypeIcon: NpbSwitchDispalyType = NpbSwitchDispalyType.ICON;
  // checkTypeText: NpbSwitchDispalyType = NpbSwitchDispalyType.TEXT;

  selectedSwitchIconText = null;
  selectedSwitchIconText2 = null;
  selectedSwitchIconTextSmall = null;
  selectedSwitchText = null;
  selectedSwitchTextSmall = null;
  selectedSwitchIcon = null;
  selectedSwitchBinary = true;
  selectedSwitchBinary2 = null;

  /**
   * struttura passata al breadcrumb
   */
  // demoList: Array<INbpSwitchStructure> = [
  //   {
  //     value: 'A',
  //     name: 'HOME',
  //     icon: 'ico-comuni-visualizzaricevuta'
  //   },
  //   {
  //     value: 'B',
  //     name: 'Primo Livello',
  //     icon: 'ico-comuni-c-persona-n'
  //   }
  // ];

  switchChoicesIconText = [{
    label: 'Cittadino Residente Italiano',
    icon: 'ico-ops-cittadinanzaitaliana'
  }, {
    label: 'Cittadino Residente Estero',
    icon: 'ico-ops-cittadinanzaestera'
  }];

  switchChoicesIconTextUp = [{
    label: 'Cittadino Residente Italiano',
    icon: 'ico-ops-cittadinanzaitaliana'
  }, {
    label: 'Cittadino Residente Estero',
    icon: 'ico-ops-cittadinanzaestera'
  }];

  switchChoicesIconTextSmall = [{
    label: 'Entrate',
    icon: 'ico-ops-cittadinanzaitaliana'
  }, {
    label: 'Uscite',
    icon: 'ico-ops-cittadinanzaestera'
  }];

  switchChoicesText = [{
    label: 'Opzione 1',
  }, {
    label: 'Opzione 2',
  }];

  switchChoicesTextSmall = [{
    label: 'SI',
  }, {
    label: 'NO',
  }];

  switchChoicesIcon = [{
    icon: 'ico-ops-cittadinanzaitaliana'
  }, {
    icon: 'ico-ops-cittadinanzaestera'
  }];

  selectedContent: string;

  buttonActionList = [{
    name: 'FOOTER BUTTON',
    icon: 'icomoon-Simboli_Risorsa-20',
    action: (event) => {
      alert('Footer Button click');
    },
  },
    {
    name: 'NAV DEMO',
    icon: 'icomoon-Simboli_Risorsa-20',
    action: (event) => {
      this.router.navigate(['demo']);
    }
  },
  {
    name: 'DEMO_BUTTON_2',
    icon: 'icomoon-Simboli_Risorsa-20',
    action: (event) => {
      this.router.navigate(['demo']);
    }
  } ,
  {
    name: 'DEMO_BUTTON_2',
    icon: 'icomoon-Simboli_Risorsa-20',
    action: (event) => {
      this.router.navigate(['demo']);
    }
  }
];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onClickButton(selectedValue: any, swhitch: any) {
    this.selectedContent = selectedValue;
    console.log('Callback Eseguita');
  }

  callbackGeneraAzione(event:any) {

    alert("azione generata")

  }

  onSwitchSelection = function () {
    console.log("onSwitchSelection function");
  };

}
