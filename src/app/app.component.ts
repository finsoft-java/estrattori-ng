import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { TranslatorService } from './services/translator.service';
import { INbpMenu } from 'cjlib/nbp/nbp-menu-operation/nbp-menu-operation.interfaces';
import { NbpSize } from 'cjlib/nbp/nbp-commons/nbp-commons.enums';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    '[class.contrasto-on]': 'globalContrast'
  }
})
export class AppComponent implements OnInit {
  public location = '';
  title = 'app';
  globalContrast: boolean = false;
  _viewTooltip: boolean = true;

  nameHeader = "Nominativo Applicativo";

  clientTitle = "NSG IN PERIMETRO"

  clientsInfo = [
    {
      'cliente': 'Mario Rossi',
      'nsg': '38659947224',
      'gestore portafogliazione': 'Danilo Caruso',
      'html': ''
      // html: '<h5>TESTO HTML CUSTOM</h5>'
    },
    {
      'cliente': 'Belli Giovanni',
      'nsg': '38658846664',
      'gestore portafogliazione': 'Giovanni Caruso',
      'html': ''
      // html: '<h5>TESTO HTML CUSTOM</h5>'
    },
    {
      'cliente': 'Curtis Andrea',
      'nsg': '35655547554',
      'gestore portafogliazione': 'Andrea Caruso',
      'html': ''
      // html: '<h5>TESTO HTML CUSTOM</h5>'
    },
    {
      'cliente': 'Benso Camillo',
      'nsg': '38653247664',
      'gestore portafogliazione': 'Danilo Caruso',
      'html': ''
      // html: '<h5>TESTO HTML CUSTOM</h5>'
    },
    {
      'cliente': 'Alfano Camillo',
      'nsg': '38672347114',
      'gestore portafogliazione': 'Danilo Caruso',
      'html': ''
      // html: '<h5>TESTO HTML CUSTOM</h5>'
    }
  ];

  funzioneCustom() {

    alert("Io sono una funzione funzione Custom chiamata al click del componente nbp-header-generic.\n Cio che faccio dipende da voi.")
  }

  customFunction() {
    alert("funzione custom al click sull'icona")
  }

  burgerMenu = {
    sections: [
      //colonna 1 MENU PRIMO LIVELLO : 6 elementi
      {
        items: [
          {
            key: '1',
            icon: 'ico-menu-lamiasituazione',
            label: 'Menu Finsoft',
            link: '',
            secondLevelMenu: {
              sections: [
                //colonna 1 MENU SECONDO LIVELLO : 2 elementi
                {
                  items: [
                    {
                      key: '1',
                      icon: '',
                      label: 'Elenco Estrattori',
                      link: 'elenco-estrattori'
                    }
                  ]
                },{
                  items: [
                    {
                      key: '2',
                      icon: '',
                      label: 'Grafici Finsoft',
                      link: 'grafici-finsoft'
                    }
                  ]
                }
              ]
            }
          },
          {
            key: '1',
            icon: 'ico-menu-lamiasituazione',
            label: 'Home',
            link: 'home'
          },
          {
            key: '2',
            icon: 'ico-comuni-c-info-n',
            label: 'Accordion e Tab',
            link: '',
            secondLevelMenu: {
              sections: [
                //colonna 1 MENU SECONDO LIVELLO : 2 elementi
                {
                  items: [
                    {
                      key: '1',
                      icon: '',
                      label: 'Accordion',
                      link: 'accordion-page'
                    }
                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 1 elemento
                {
                  items: [
                    {
                      key: '3',
                      icon: '',
                      label: 'Tab',
                      link: 'tab-page'
                    }
                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 1 elemento
                {
                  items: [
                    {
                      key: '2',
                      icon: '',
                      label: 'Tab in pagina',
                      link: 'TabInPagina'
                    }
                  ]
                }
              ]
            }
          },
          {
            key: '3',
            icon: 'ico-comuni-c-info-n',
            label: 'Pulsanti',
            link: 'pulsanti-page'
          },
          {
            key: '4',
            icon: 'ico-comuni-c-info-n',
            label: 'Elementi form',
            link: 'elementi'
          },
          {
            key: '5',
            icon: 'ico-comuni-freccia-dx',
            label: 'Tabelle',
            link: '',
            secondLevelMenu: {
              sections: [
                //colonna 1 MENU SECONDO LIVELLO : 3 elementi
                {
                  items: [
                    {
                      key: '1',
                      icon: '',
                      label: 'Semplici',
                      link: 'semplici'
                    },
                    {
                      key: '2',
                      icon: '',
                      label: 'Selezionabili',
                      link: 'selezionabili'
                    },
                    {
                      key: '3',
                      icon: '',
                      label: 'CheckBox',
                      link: 'checkbox'
                    }
                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 2 elementi
                {
                  items: [
                    {
                      key: '4',
                      icon: '',
                      label: 'Accordion',
                      link: 'accordion'
                    },
                    {
                      key: '5',
                      icon: '',
                      label: 'Investimenti',
                      link: 'investimenti'
                    },
                    {
                      key: '6',
                      icon: '',
                      label: 'Grid',
                      link: 'grid'
                    }

                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 2 elementi
                {
                  items: [
                    {
                      key: '7',
                      icon: '',
                      label: 'Filtrate',
                      link: 'filtrate'
                    },
                    {
                      key: '8',
                      icon: '',
                      label: 'In modale',
                      link: 'inModale'
                    },
                    //  Fuori standard bisognerebbe riallinearla alle GuideLines...
                    // {
                    //   key: '8',
                    //   icon: '',
                    //   label: 'Multiple',
                    //   link: 'multiple'
                    // },
                    //  implementata ma non visibile. Magari un giorno servira...
                    //     {
                    //       key: '9',
                    //       icon: '',
                    //       label: 'Responsive',
                    //       link: 'responsive'
                    //     }

                  ]

                }


              ]
            }
          },
          {
            key: '6',
            icon: 'ico-comuni-freccia-dx',
            label: 'Floater',
            link: 'floater'
          },
          {
            key: '7',
            icon: 'ico-comuni-c-info-n',
            label: 'Etichette',
            link: 'etichette-page'
          },
        ]
      },
      //colonna 2 MENU PRIMO LIVELLO : 6 elementi
      {
        items: [
          {
            key: '1',
            icon: 'ico-comuni-c-info-n',
            label: 'Modali e Loading',
            link: 'modali'
          },
          {
            key: '2',
            icon: 'ico-comuni-freccia-dx',
            label: 'Gestione Processi',
            link: '',
            secondLevelMenu: {
              sections: [
                //colonna 1 MENU SECONDO LIVELLO : 2 elementi
                {
                  items: [
                    // {
                    //   key: '1',
                    //   icon: '',
                    //   label: 'Sequenziale senza Sottostep',
                    //   link: 'sequenziale'
                    // },
                    // {
                    //   key: '2',
                    //   icon: '',
                    //   label: 'Sequenziale con Sottostep',
                    //   link: 'sequenziale-sottostep'
                    // },
                    {
                      key: '1',
                      icon: '',
                      label: 'Sequenziali',
                      link: 'sequenziali'
                    }, {
                      key: '2',
                      icon: '',
                      label: 'Sequenziali con Sottostep',
                      link: 'sequenzialisottostep'
                    }
                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 1 elemento
                {
                  items: [
                    {
                      key: '1',
                      icon: '',
                      label: 'Step Navigabili',
                      link: 'stepNavigabili'
                    }
                  ]
                },
                //colonna 3 MENU SECONDO LIVELLO : 1 elemento
                {
                  items: [
                    {
                      key: '1',
                      icon: '',
                      label: 'Wizard Verticale',
                      link: 'wizardVerticale'
                    }
                  ]
                }
              ]
            }
          },
          {
            key: '3',
            icon: 'ico-pfm-isp-font-cross-036-togglegraficotorta',
            label: 'Grafici',
            link: '',
            secondLevelMenu: {
              sections: [
                //colonna 1 MENU SECONDO LIVELLO : 4 elementi
                {
                  items: [
                    {
                      key: '1',
                      icon: '',
                      label: 'Torte',
                      link: 'torte'
                    },
                    {
                      key: '2',
                      icon: '',
                      label: 'Farfalla',
                      link: 'farfalla-page'
                    },
                    {
                      key: '3',
                      icon: '',
                      label: 'Segmenti',
                      link: 'segmenti-page'
                    },
                    {
                      key: '4',
                      icon: '',
                      label: 'Gauge',
                      link: 'gauge-page'
                    }
                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 3 elementi
                {
                  items: [
                    {
                      key: '5',
                      icon: '',
                      label: 'Andamento',
                      link: 'andamento'
                    },
                    {
                      key: '6',
                      icon: '',
                      label: 'Vita Residua/Duration',
                      link: 'vitaResiduaDuration'
                    },
                    {
                      key: '7',
                      icon: '',
                      label: 'Barre',
                      link: 'barre-page'
                    }
                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 3 elementi
                {
                  items: [
                    {
                      key: '8',
                      icon: '',
                      label: 'Progress Bar',
                      link: 'progress-bar-page'
                    },
                    {
                      key: '9',
                      icon: '',
                      label: 'Barre Donut',
                      link: 'comparisionDonut'
                    }
                  ]
                }
              ]
            }
          },
          {
            key: '4',
            icon: 'ico-comuni-c-info-n',
            label: 'Link Esterno',
            link: 'www.google.com',
            external: true
          },
          {
            key: '5',
            icon: 'ico-comuni-freccia-dx',
            label: 'Tabelle Scrollabili',
            link: '',
            secondLevelMenu: {
              sections: [
                //colonna 1 MENU SECONDO LIVELLO : 3 elementi
                {
                  items: [
                    {
                      key: '1',
                      icon: '',
                      label: 'Semplici',
                      link: 'semplici-scrollabili'
                    },
                    {
                      key: '2',
                      icon: '',
                      label: 'Selezionabili',
                      link: 'selezionabili-scrollabili'
                    },
                    {
                      key: '3',
                      icon: '',
                      label: 'CheckBox',
                      link: 'checkbox-scrollabili'
                    }
                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 2 elementi
                {
                  items: [
                    {
                      key: '4',
                      icon: '',
                      label: 'Accordion',
                      link: 'accordion-scrollabili'
                    },
                    {
                      key: '5',
                      icon: '',
                      label: 'Standard',
                      link: 'standard-scrollabili'
                    },
                    {
                      key: '6',
                      icon: '',
                      label: 'Grid',
                      link: 'grid-scrollabili'
                    }

                  ]
                },
                //colonna 2 MENU SECONDO LIVELLO : 2 elementi
                {
                  items: [
                    {
                      key: '7',
                      icon: '',
                      label: 'Filtrate',
                      link: 'filtrate-scrollabili'
                    },
                    // {
                    //   key: '8',
                    //   icon: '',
                    //   label: 'Multiple',
                    //   link: 'multiple-scrollabili'
                    // },
                    //  implementata ma non visibile. Magari un giorno servira...
                    //     {
                    //       key: '9',
                    //       icon: '',
                    //       label: 'Responsive',
                    //       link: 'responsive'
                    //     }

                  ]

                }


              ]
            }
          },
          {
            key: '11',
            icon: 'ico-comuni-c-info-n',
            label: 'Documenti',
            link: 'documenti'
          },
          {
            key: '12',
            icon: 'ico-comuni-c-info-n',
            label: 'Ricerca',
            link: 'ricerca-page'
          },
        ]
      }
    ]
  };
/*
  menuOperation: INbpMenu = {
    // title: "Operazione e pagamenti",
    sections: [
      //colonna 1
      {
        items: [
          {
            key: '1',
            icon: '',
            label: 'bonofici e pagamenti',
            link: 'bonificiPagamenti'
          },
          {
            key: '2',
            icon: '',
            label: 'ricariche',
            link: ''
          },
          {
            key: '3',
            icon: '',
            label: 'f24 e altre tasse',
            link: ''
          }
        ]
      },
      //colonna 2
      {
        items: [
          {
            key: '1',
            icon: '',
            label: 'bollette e pagamenti',
            link: ''
          },
          {
            key: '2',
            icon: '',
            label: 'domiciliazioni',
            link: ''
          },
          {
            key: '3',
            icon: '',
            label: 'money transfer',
            link: ''
          }
        ]
      },
      //colonna 3
      {
        items: [
          {
            key: '1',
            icon: 'icomoon-Attivit_14',
            label: 'la mia rubrica',
            link: ''
          },
          {
            key: '2',
            icon: 'icomoon-Documenti_1',
            label: 'archivio',
            link: ''
          },
          {
            key: '3',
            icon: 'icomoon-Documenti_2',
            label: 'revoche',
            link: ''
          }
        ]
      }
    ]
  };
*/
  userDemo = {
    name: 'Sonia',
    surname: 'Pini',
    id: 'cjUserLib-123',
    role: 'admin',
    image: 'base64 Image'
  };
/*
  footerLinks = [
    {
      name: 'google',
      urlLink: 'www.google.it',
      internalState: false,
    }, {
      name: 'elementi',
      urlLink: 'elementi',
      internalState: true,
    }, {
      name: 'intesa',
      urlLink: 'www.intesasanpaolo.com/',
      internalState: false,
    }
  ]
*/
  footerLanguages;
  initialLanguage;
  
  /*BOTTONE FOOTER CLICCABILE*/
  footerCentralBtn = {
    name: 'FOOTER BUTTON',
    icon: 'ico-menu-carte',
    action: function () {
      alert('Footer Button click');
    }
  };
  


  //tooltip data example
  tooltipData: any = [{
     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
   },
   {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque mollitia, 
    inventore at officia quae doloribus reiciendis consectetur perspiciatis? Vel.22`,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque mollitia, 
    inventore at officia quae doloribus reiciendis consectetur perspiciatis? Vel.33`,
  }];
 toolSize = NbpSize.LG
//********************************************************************************** */
  nbpLogoCustom = '../assets/images/logoProva.png';




  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translator: TranslatorService
  ) {
    router.events.subscribe((event: NavigationEnd) => {
      this.location = router.url;
    });
    this.footerLanguages = this.translator.getAvailableLanguages();
    this.initialLanguage = this.translator.getDefaultLanguage();
  }



  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        if (!!event['title']) {
          this.titleService.setTitle(event['title'])
        }
      });
  }

  /**
   * Listener per l'evento di cambio contrasto proveniente dal footer
   */
  onContrastChange(isOn: boolean) {
    this.globalContrast = isOn;
  }

  /**
   * Listener per l'evento di cambio lingua proveniente dal footer
   */
  onLanguageChange(lang: string) {
    this.translator.setCurrentLanguage(lang);
  }

  dismissHelp(event) {
    console.log('Click rinuncia tooltip info');
    // this._viewTooltip = true;
    // setTimeout(() => {    //<<<---    using ()=> syntax
    //   this._viewTooltip = false;
    // }, 3000);
    this._viewTooltip = false;

  }

  isMarginDisable() {
    // Disabilita il margin per la pagina dove è presente la fascia bottoni
    // in modo che i componenti non siano spaziati.
    return (this.location.indexOf('pulsanti-page') >= 0);
  }
}

