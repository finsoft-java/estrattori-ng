import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElementiComponent } from './elementi/elementi.component';
import { ModaliComponent } from './modali/modali.component';
import { PulsantiPageComponent } from './pulsanti-page/pulsanti-page.component';
import { WizardPageComponent } from './wizard-page/wizard.page.component';
import { AdvancedSempliciComponent } from './advanced-semplici/advanced-semplici.component';
import { TorteComponent } from './torte/torte.component';
import { FarfallaComponent } from './farfalla/farfalla.component';
import { SegmentiComponent } from './segmenti/segmenti.component';
import { GaugeComponent } from './gauge/gauge.component';
import { AndamentoComponent } from './andamento/andamento.component';
import { VitaResiduaDurationComponent } from './vita-residua-duration/vita-residua-duration.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ComparisionDonutComponent } from './comparision-donut/comparision-donut.component';
import { ProgressBarPageComponent } from './progress-bar-page/progress-bar-page.component';
import { SegmentiPageComponent } from './segmenti-page/segmenti-page.component';
import { GaugePageComponent } from './gauge-page/gauge-page.component';
import { FarfallaPageComponent } from './farfalla-page/farfalla-page.component';
import { BarrePageComponent } from './barre-page/barre-page.component';
import { DemoComponent } from '../services/demo/demo.component';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { StepNavigabiliPageComponent } from './step-navigabili-page/step-navigabili-page.component';
import { TabelleSempliciComponent } from './tabelle/tabelle-semplici/tabelle-semplici.component';
import { TabelleSelezionabiliComponent } from './tabelle/tabelle-selezionabili/tabelle-selezionabili.component';
import { TabelleFiltrateComponent } from './tabelle/tabelle-filtrate/tabelle-filtrate.component';
import { TabelleEspandibiliComponent } from './tabelle/tabelle-espandibili/tabelle-espandibili.component';
import { ContenitoreTabelleComponent } from './contenitore-tabelle/contenitore-tabelle.component';
import { ContenitoreFloaterComponent } from './contenitore-floater/contenitore-floater.component';
import { TabTogglePageComponent } from './tab-toggle-page/tab-toggle-page.component';
import { NbpChartsComponent } from './nbp-charts/nbp-charts.component';
import { ContenitoreStickyTabComponent } from './contenitore-sticky-tab/contenitore-sticky-tab.component';
import { ContenitoreSequenzialiComponent } from './contenitore-sequenziali/contenitore-sequenziali.component';
import { ContenitoreSequenzialiSottostepComponent } from './contenitore-sequenziali-sottostep/contenitore-sequenziali-sottostep.component';
import { DocumentiComponent } from './documenti/documenti.component';
import { BonificiPagamentiComponent } from './bonifici-pagamenti/bonifici-pagamenti.component';
import { EtichettePageComponent } from './etichette-page/etichette-page.component';
import {RicercaPageComponent} from './ricerca-page/ricerca-page.component';
import { ElencoEstrattoriComponent } from './elenco-estrattori/elenco-estrattori.component';
import { GraficiFinsoftComponent } from './grafici-finsoft/grafici-finsoft.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [],
    data: {
      title: 'Home',
      subtitle: 'home'
    }
  },{
    path: 'elenco-estrattori',
    component: ElencoEstrattoriComponent,
    children: [],
    data: {
      title: 'Elenco Estrattori',
      subtitle: 'Elenco Estrattori'
    }
  },{
    path: 'grafici-finsoft',
    component: GraficiFinsoftComponent,
    children: [],
    data: {
      title: 'Grafici Finsoft',
      subtitle: 'Grafici Finsoft'
    }
  },
  {
    path: 'elementi',
    component: ElementiComponent,
    children: [],
    data: {
      title: 'Elementi Form',
      subtitle: 'Elementi Form'
    }
  },
  {
    path: 'accordion-page',
    component: AccordionPageComponent,
    data: {
      title: 'Accordion',
      subtitle: 'Accordion e tab'
    }
  },
  {
    path: 'tab-page',
    component: TabTogglePageComponent,
    data: {
      title: 'Tab',
      subtitle: 'Accordion e tab'
    }
  },
  {
    path: 'TabInPagina',
    component: ContenitoreStickyTabComponent,
    data: {
      title: 'Tab in pagina',
      subtitle: 'Accordion e tab'
    }
  },
  // -----------------------tabelle
  // {
  //   path: 'multiple-scrollabili',
  //   component: ContenitoreTabelleComponent,
  //   data: {
  //     title: 'Multiple',
  //     subtitle: 'Tabelle'
  //   }
  // },
  // {
  //   path: 'multiple',
  //   component: ContenitoreTabelleComponent,
  //   data: {
  //     title: 'Multiple',
  //     subtitle: 'Tabelle'
  //   }
  // },
  // -----------------------
  {
    path: 'semplici-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Semplici',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'semplici',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Semplici',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'selezionabili-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Selezionabili',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'selezionabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Selezionabili',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'filtrate-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Filtrate',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'filtrate',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Filtrate',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'inModale',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'In Modale',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'espandibili-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'con Template Espandibile Custom',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'espandibili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'con Template Espandibile Custom',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'responsive-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Responsive',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'responsive',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Responsive',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'investimenti-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Investimenti',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'investimenti',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Investimenti',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'accordion-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Accordion',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'accordion',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Accordion',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'checkbox-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'CheckBox',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'checkbox',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'CheckBox',
      subtitle: 'Tabelle'
    }
  },
  // -----------------
  {
    path: 'grid-scrollabili',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Grid',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'grid',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Grid',
      subtitle: 'Tabelle'
    }
  },
  {
    path: 'modalTable',
    component: ContenitoreTabelleComponent,
    data: {
      title: 'Tabelle in modale',
      subtitle: 'Tabelle'
    }
  },
  // ----------------------- fine tabelle


  {
    path: 'stepNavigabili',
    component: StepNavigabiliPageComponent,
    data: { title: 'Step Navigabili' }
  },
  {
    path: 'wizardVerticale',
    component: WizardPageComponent,
    data: { title: 'Wizard Verticale' }
  },
  {
    path: 'sequenziali',
    component: ContenitoreSequenzialiComponent,
    data: { title: 'Sequenziali Component' }
  },
  {
    path: 'sequenzialisottostep',
    component: ContenitoreSequenzialiSottostepComponent,
    data: { title: 'Sequenziali Sottostep Component' }
  },
  {
    path: 'torte',
    component: TorteComponent,
    data: { title: 'Grafici Torte' }
  },
  {
    path: 'farfalla',
    component: FarfallaComponent,
    data: { title: 'Grafici Farfalla' }
  },
  {
    path: 'segmenti',
    component: SegmentiComponent,
    data: { title: 'Grafici Segmenti' }
  },
  {
    path: 'gauge',
    component: GaugeComponent,
    data: { title: 'Grafici Tachimetro' }
  },
  {
    path: 'andamento',
    component: AndamentoComponent,
    data: { title: 'Grafici Andamento' }
  },
  {
    path: 'vitaResiduaDuration',
    component: VitaResiduaDurationComponent,
    data: { title: 'Grafici Vita Residua/Duration' }
  },
  {
    path: 'progressBar',
    component: ProgressBarComponent,
    data: { title: 'Grafici Progress Bar' }
  },
  {
    path: 'comparisionDonut',
    component: ComparisionDonutComponent,
    data: { title: 'Grafici Comparison Donut' }
  },
  {
    path: 'modali',
    component: ModaliComponent,
    children: [],
    data: { title: 'Modali e Loading' }
  },
  {
    path: 'pulsanti-page',
    component: PulsantiPageComponent,
    children: [],
    data: { title: 'Pulsanti' }
  },
  {
    path: 'progress-bar-page',
    component: ProgressBarPageComponent,
    children: [],
    data: { title: 'Grafici Progress Bar' }
  },
  {
    path: 'segmenti-page',
    component: SegmentiPageComponent,
    children: [],
    data: { title: 'Grafici Segmenti' }
  },
  {
    path: 'gauge-page',
    component: GaugePageComponent,
    children: [],
    data: { title: 'Grafici Tachimetro' }
  },
  {
    path: 'farfalla-page',
    component: FarfallaPageComponent,
    children: [],
    data: { title: 'Grafici Farfalla' }
  },
  {
    path: 'barre-page',
    component: BarrePageComponent,
    children: [],
    data: { title: 'Grafici Barre' }
  },
  {
    path: 'floater',
    component: ContenitoreFloaterComponent,
    children: [],
    data: { title: 'Floater' }
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [],
    data: { title: 'Demo' }
  },
  {
    path: 'documenti',
    component: DocumentiComponent,
    children: [],
    data: { title: 'Documenti' }
  },
  {
    path: 'ricerca-page',
    component: RicercaPageComponent,
    children: [],
    data: { title: 'Ricerca' }
  },
  {
    path: 'bonificiPagamenti',
    component: BonificiPagamentiComponent,
    children: [],
    data: { title: 'Bonifici e Pagamenti' }
  },
  {
    path: 'etichette-page',
    component: EtichettePageComponent,
    children: [],
    data: { title: 'Etichette' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
