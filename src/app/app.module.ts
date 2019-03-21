import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CjLibModule, NbpPagingComponent, RplDatepickerModule} from 'cjlib';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementiComponent } from './elementi/elementi.component';
import { TitledPanelComponent } from './titled-panel/titled-panel.component';
import { ComboComponent } from './contenitore-combo/contenitore-combo.component';
import { TableComponent } from './z-deprecated-table/table.component';
import { ModaliComponent } from './modali/modali.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardPageComponent, WizardPageTemplateComponent, WizardPageTemplate1Component, WizardPageTemplate2Component, WizardPageTemplate3Component, WizardPageTemplate4Component, WizardPageTemplate5Component } from './wizard-page/wizard.page.component';
import { AdvancedSempliciComponent } from './advanced-semplici/advanced-semplici.component';
import { TorteComponent } from './torte/torte.component';
import { FarfallaComponent } from './farfalla/farfalla.component';
import { SegmentiComponent } from './segmenti/segmenti.component';
import { GaugeComponent } from './gauge/gauge.component';
import { AndamentoComponent } from './andamento/andamento.component';
import { VitaResiduaDurationComponent } from './vita-residua-duration/vita-residua-duration.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ComparisionDonutComponent } from './comparision-donut/comparision-donut.component';
import { ChartsComponent } from './charts/charts.component';
import { PulsantiPageComponent } from './pulsanti-page/pulsanti-page.component';
import { HomeComponent } from './home/home.component';
import { ProgressBarPageComponent } from './progress-bar-page/progress-bar-page.component';
import { SegmentiPageComponent } from './segmenti-page/segmenti-page.component';
import { GaugePageComponent } from './gauge-page/gauge-page.component';
import { FarfallaPageComponent } from './farfalla-page/farfalla-page.component';
import { BarrePageComponent } from './barre-page/barre-page.component';
import { BarreNoIconComponent } from './barre-no-icon/barre-no-icon.component';
import { BarreIconComponent } from './barre-icon/barre-icon.component';
import { DemoComponent } from '../services/demo/demo.component';
import { BarreDoubleComponent } from './barre-double/barre-double.component';
import { NbpClientInfoComponent } from 'cjlib/nbp/nbp-client-info/nbp-client-info.component';
// import { NbpHeaderLightComponent } from 'cjlib/nbp/nbp-header-light/nbp-header-light.component';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { StepNavigabiliPageComponent } from './step-navigabili-page/step-navigabili-page.component';
import { TabelleEspandibiliComponent } from './tabelle/tabelle-espandibili/tabelle-espandibili.component';
import { TabelleFiltrateComponent } from './tabelle/tabelle-filtrate/tabelle-filtrate.component';
import { TabelleFiltratePLComponent } from './tabelle/tabelle-filtrate-pl/tabelle-filtrate-pl.component';
import { TabelleSelezionabiliComponent } from './tabelle/tabelle-selezionabili/tabelle-selezionabili.component';
import { TabelleSempliciComponent } from './tabelle/tabelle-semplici/tabelle-semplici.component';
import { TabelleInvestimentiComponent } from './tabelle/tabelle-investimenti/tabelle-investimenti.component';
import { TabelleAccordionComponent } from './tabelle/tabelle-accordion/tabelle-accordion.component';
import { TabelleCheckBoxComponent } from './tabelle/tabelle-checkbox/tabelle-checkbox.component';
import { PaginationComponent } from './tabelle/pagination/pagination.component';
import { ContenitoreTabelleComponent } from './contenitore-tabelle/contenitore-tabelle.component';
import { MockBackend } from '@angular/http/testing';

import { Fidd0QuestionarioQuestionComponent } from './fidd0-questionario-question/fidd0-questionario-question.component'

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { APP_CONFIG } from 'cjlib';
import { AppConfigService } from "./app-config.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ContenitoreFloaterComponent } from './contenitore-floater/contenitore-floater.component';
import { TabTogglePageComponent } from './tab-toggle-page/tab-toggle-page.component';
import { TranslatorService } from './services/translator.service';

//il validatore puo essere customizzato nel nostro progetto oppure oreso da cjlib da problemi con la compilazione AOT
//import { DateValidator } from '../cjlib/nbp/reply/nbp-validators/date-validator.directive';
import { DateValidator } from './validators/date-validator.directive';
import { NbpChartsComponent } from './nbp-charts/nbp-charts.component';
import { TabelleGrigliaComponent } from './tabelle/tabelle-griglia/tabelle-griglia.component';
import { ContenitoreStickyTabComponent } from './contenitore-sticky-tab/contenitore-sticky-tab.component';
import { ContenitoreSequenzialiComponent } from './contenitore-sequenziali/contenitore-sequenziali.component';
import { ContenitoreSequenzialiSottostepComponent } from './contenitore-sequenziali-sottostep/contenitore-sequenziali-sottostep.component';

// import { NouisliderModule } from './nbp-slider/src/nouislider';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentiComponent } from './documenti/documenti.component';
import {ForbiddenValidatorDirective} from './validators/custom-validator.directive';
import { BonificiPagamentiComponent } from './bonifici-pagamenti/bonifici-pagamenti.component';
import {ForbiddenValidatorSyncDirective} from './validators/custom-sync-validator.directive';
// import { NbpButtonFilterComponent } from './nbp-button-filter/nbp-button-filter.component';
import { EtichettePageComponent } from './etichette-page/etichette-page.component';
import { NoEmptyArray } from './etichette-page/no-empty-array.pipe';
import {TabelleCondizioniModalComponent} from './tabelle/tabelle-condizioni-modal/tabelle-condizioni-modal.component';
import {TabelleStaticComponent} from './tabelle/tabelle-static/tabelle-static.component';
import {TabelleRecoursiveComponent} from './tabelle/tabelle-recoursive/tabelle-recoursive.component';
import { RicercaPageComponent } from './ricerca-page/ricerca-page.component';
import {NbpStringify} from './home/stringiy.pipe';
import { EstrattoriComponent } from './estrattori/estrattori.component';
import { ElencoEstrattoriComponent } from './elenco-estrattori/elenco-estrattori.component';
import { GraficiFinsoftComponent } from './grafici-finsoft/grafici-finsoft.component';
import { ChartsModule } from 'ng4-charts';


// import { NbpSearchBoxComponent } from './nbp-search-box/nbp-search-box.component';
// import {ClickOutsideModule} from "ng4-click-outside"

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {

  // return new TranslateHttpLoader(http);
  // modifichiamo la sede di default dei file di traduzione
  return new TranslateHttpLoader(http, './assets/translations/', '.json')
}

@NgModule({
  declarations: [
    TabelleEspandibiliComponent,
    TabelleFiltrateComponent,
    TabelleFiltratePLComponent,
    TabelleSelezionabiliComponent,
    TabelleSempliciComponent,
    TabelleInvestimentiComponent,
    TabelleAccordionComponent,
    TabelleCheckBoxComponent,
    AppComponent,
    ElementiComponent,
    TitledPanelComponent,
    ComboComponent,
    TableComponent,
    ModaliComponent,
    WizardComponent,
    WizardPageComponent, WizardPageTemplateComponent,
    WizardPageTemplate1Component,
    WizardPageTemplate2Component,
    WizardPageTemplate3Component,
    WizardPageTemplate4Component,
    WizardPageTemplate5Component,
    AdvancedSempliciComponent,
    TorteComponent,
    FarfallaComponent,
    SegmentiComponent,
    GaugeComponent,
    AndamentoComponent,
    VitaResiduaDurationComponent,
    ProgressBarComponent,
    ComparisionDonutComponent,
    ChartsComponent,
    PulsantiPageComponent,
    HomeComponent,
    ProgressBarPageComponent,
    SegmentiPageComponent,
    GaugePageComponent,
    FarfallaPageComponent,
    BarrePageComponent,
    BarreNoIconComponent,
    BarreIconComponent,
    DemoComponent,
    BarreDoubleComponent,
    NbpClientInfoComponent,
    AccordionPageComponent,
    StepNavigabiliPageComponent,
    PaginationComponent,
    ContenitoreTabelleComponent,
    ContenitoreFloaterComponent,
    TabTogglePageComponent,
    DateValidator,
    NbpChartsComponent,
    Fidd0QuestionarioQuestionComponent,
    TabelleGrigliaComponent,
    ContenitoreStickyTabComponent,
    ContenitoreSequenzialiComponent,
    ContenitoreSequenzialiSottostepComponent,
    DocumentiComponent,
    BonificiPagamentiComponent,
    TabelleCondizioniModalComponent,
    TabelleStaticComponent,
    ForbiddenValidatorDirective,
    ForbiddenValidatorSyncDirective,
    EtichettePageComponent,
    NoEmptyArray,
    TabelleRecoursiveComponent,
    RicercaPageComponent,
    NbpStringify,
    EstrattoriComponent,
    ElencoEstrattoriComponent,
    GraficiFinsoftComponent,
    // NbpButtonFilterComponent,

    // NbpSearchBoxComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    // TranslateModule.forRoot(),
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CjLibModule,
    FlexLayoutModule,
    // NouisliderModule,
    ReactiveFormsModule,
    // ClickOutsideModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        // useFactory: (
        //   (http: HttpClient) => { return new TranslateHttpLoader(http, './assets/translations/', '.json') }
        // ),
        deps: [HttpClient]
      }
    })

  ],

  providers: [
    TranslatorService,
    // AppTranslator,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_CONFIG, useClass: AppConfigService }
  ],
  bootstrap: [AppComponent],
  entryComponents: [WizardPageTemplate1Component, WizardPageTemplate2Component, WizardPageTemplate3Component, WizardPageTemplate4Component, WizardPageTemplate5Component]
})
export class AppModule { }
