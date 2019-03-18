import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {WizardComponent, EmbeddableComponent, WizardStep, WizardPage} from '../wizard/wizard.component';
import {NbpStyle} from 'cjlib';

@Component({
  selector: 'app-wizard-page',
  templateUrl: './wizard.page.component.html',
  styleUrls: ['./wizard.page.component.less']
})
export class WizardPageComponent {

  private steps: WizardStep[];
  isCompleted: boolean;

  constructor() {

    this.steps = [
      new WizardStep("Step 1", [
        new WizardPage("Pagina 1", WizardPageTemplate1Component),
        new WizardPage("Pagina 2", WizardPageTemplate2Component)
      ]),
      new WizardStep("Step 2", [
        new WizardPage("Pagina 3", WizardPageTemplate3Component)
      ]),
      new WizardStep("Step 3", [
        new WizardPage("Pagina 4", WizardPageTemplate4Component),
        new WizardPage("Pagina 5", WizardPageTemplate5Component)
      ]),
    ];
  }

  onWizardCompleted(): void {
    
    this.isCompleted = true;
  }
}


/***** Componenti di esempio per ogni pagina del wizard *****/

@Component({
  selector: 'app-wizard-page-samplepage',
  templateUrl: './wizard.page.component.samplepage.html'
})
export class WizardPageTemplateComponent implements OnInit, EmbeddableComponent {
  
  primary: NbpStyle = NbpStyle.PRIMARY;
  sampleMessage: string = "Sample";
  disablePrevious: boolean;
  disableNext: boolean;
  
  private wizard: WizardComponent;

  ngOnInit() {
    
    this.manageButtonsVisibility();
  }

  onEmbed(parent: WizardComponent) {

    this.wizard = parent;
  }

  goToPrevious(): void {

    this.wizard.goToPrevious();
    this.manageButtonsVisibility();
  }

  goToNext(): void {

    this.wizard.goToNext();
    this.manageButtonsVisibility();
  }

  private manageButtonsVisibility(): void {
    
    this.disablePrevious = this.wizard.isCurrentPageFirst;
  }
}

export class WizardPageTemplate1Component extends WizardPageTemplateComponent {
  constructor() {
    super();
    this.sampleMessage = "Contenuto della Pagina 1";
  }
}

export class WizardPageTemplate2Component extends WizardPageTemplateComponent {
  constructor() {
    super();
    this.sampleMessage = "Contenuto della Pagina 2";
  }
}

export class WizardPageTemplate3Component extends WizardPageTemplateComponent {
  constructor() {
    super();
    this.sampleMessage = "Contenuto della Pagina 3";
  }
}

export class WizardPageTemplate4Component extends WizardPageTemplateComponent {
  constructor() {
    super();
    this.sampleMessage = "Contenuto della Pagina 4";
  }
}

export class WizardPageTemplate5Component extends WizardPageTemplateComponent {
  constructor() {
    super();
    this.sampleMessage = "Contenuto della Pagina 5";
  }
}