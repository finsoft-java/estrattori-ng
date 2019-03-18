import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnInit, Output, Type, ViewChild, ViewContainerRef } from '@angular/core';

/**
 * Wizard che permette di navigare tra più step/pagine con un riepilogo di completamento
 */
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.less']
})
export class WizardComponent implements OnInit {

  /********************* INPUT *********************/

  /**
   * Lista degli step del wizard, ognuno con una o più sotto-pagine
   */
  @Input()
  set steps(value: WizardStep[]) {

    this._steps = value;

    this._steps[0].state = WizardStepState.Active;

    this.allPagesCount = 0;
    this.completedPagesCount = 0;
    for (var step of this._steps) {

      this.allPagesCount += step.pages.length;
    }
  }
  get steps(): WizardStep[] {

    return this._steps;
  }
  private _steps: WizardStep[];


  /********************* OUTPUT *********************/

  /**
   * Evento di completamento dell'intero wizard (= quando l'ultimo goToNext viene chiamato)
   */
  @Output()
  wizardCompleted = new EventEmitter();


  /********************* VAR DI APPOGGGIO *********************/

  currentStepIndex: number = 0;
  currentPageIndex: number = 0;

  allPagesCount: number = 0;
  completedPagesCount: number = 0;

  States: typeof WizardStepState = WizardStepState;

  @ViewChild("pageContainer", { read: ViewContainerRef })
  private pageContainer;

  private componentRef: ComponentRef<EmbeddableComponent>;


  /********************* LIFECYCLE *********************/

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {

    // Mostro la prima pagina
    this.displayCurrentPageComponent();
  }

  ngOnDestroy() {

    this.cleanPageComponent();
  }


  /********************* METODI PUBBLICI *********************/

  /**
   * Lo step corrente
   */
  public get currentStep(): WizardStep {

    return this.steps[this.currentStepIndex];
  }

  /**
   * La pagina corrente
   */
  public get currentPage(): WizardPage {

    return this.currentStep.pages[this.currentPageIndex];
  }

  /**
   * Percentuale (0-100) di completamento dell'intero wizard
   */
  get wizardProgress(): number {

    return 100 * this.completedPagesCount / this.allPagesCount;
  }

  /**
   * Percentuale (0-100) di completamento delle sotto-pagine dello step corrente
   */
  get currentStepProgress(): number {

    return 100 * this.currentPageIndex / this.currentStep.pages.length;
  }

  /**
   * Torna indietro alla pagina precedente, cambiando step se necessario
   */
  public goToPrevious(): void {

    // Check consistenta
    if (this.isCurrentPageFirst) {

      console.log("Error: cannot goToPrevious, it's the first page!");
      return;
    }

    // Cambio pagina o step
    if (this.currentPageIndex > 0) {

      this.currentPageIndex--;
    }
    else {

      this.switchStep(this.currentStepIndex, WizardStepState.ToDo, this.currentStepIndex - 1);

      var pages: WizardPage[] = this.currentStep.pages;
      this.currentPageIndex = pages.length - 1;
    }
    this.completedPagesCount--;

    // Mostro la nuova pagina
    this.displayCurrentPageComponent();
  }

  /**
   * Prosegue alla pagina successiva, cambiando step se necessario
   */
  public goToNext(): void {

    // Fine wizard
    if (this.isCurrentPageLast) {

      this.wizardCompleted.emit();
      return;
    }

    // Cambio pagina o step
    var pages: WizardPage[] = this.currentStep.pages;
    if (this.currentPageIndex < pages.length - 1) {

      this.currentPageIndex++;
    }
    else {

      this.switchStep(this.currentStepIndex, WizardStepState.Completed, this.currentStepIndex + 1);

      this.currentPageIndex = 0;
    }
    this.completedPagesCount++;

    // Mostro la nuova pagina
    this.displayCurrentPageComponent();
  }

  /**
   * Ritorna true se la pagina corrente è la prima disponibile
   */
  public get isCurrentPageFirst(): boolean {

    return this.currentStepIndex === 0 && this.currentPageIndex === 0;
  }

  /**
   * Ritorna true se la pagina corrente è l'ultima disponibile
   */
  public get isCurrentPageLast(): boolean {

    return this.currentStepIndex === this.steps.length - 1 && this.currentPageIndex === this.currentStep.pages.length - 1;
  }


  /********************* HELPERS PRIVATI *********************/

  /**
   * Mostra la pagina corrente nell'apposito template
   */
  private displayCurrentPageComponent(): void {

    this.cleanPageComponent();

    var currentPage: WizardPage = this.currentPage;
    if (currentPage.component) {

      const factory: ComponentFactory<EmbeddableComponent> = this.resolver.resolveComponentFactory(currentPage.component);
      this.componentRef = this.pageContainer.createComponent(factory);
      this.componentRef.instance.onEmbed(this);
    }
    else {

      console.log("Error: no component for page " + currentPage);
    }
  }

  /**
   * Helper per eliminare il componente mostrato nel template, per evitare memory leaks, ecc.
   */
  private cleanPageComponent(): void {

    if (this.pageContainer) {

      this.pageContainer.clear();
    }

    if (this.componentRef) {

      this.componentRef.destroy();
    }
  }

  /**
   * Passa da uno step all'altro, settando il vecchio step nello stato indicato
   */
  private switchStep(oldStepIndex: number, oldStepState: WizardStepState, newStepIndex: number): void {

    this.currentStepIndex = newStepIndex;
    this.steps[oldStepIndex].state = oldStepState;
    this.steps[newStepIndex].state = WizardStepState.Active;
  }
}

/**
 * Step del wizard, può contenere una o più sotto-pagine
 */
export class WizardStep {

  private _state: WizardStepState = WizardStepState.ToDo;

  constructor(private _title: string, private _pages: WizardPage[]) { }

  get title(): string {

    return this._title;
  }

  get pages(): WizardPage[] {

    return this._pages;
  }

  get state(): WizardStepState {

    return this._state;
  }

  set state(newState: WizardStepState) {

    this._state = newState;
  }
}

/**
 * Pagina del wizard, è contenuta da uno step. E' associata a un Component, cioè la root
 * della pagina mostrata
 */
export class WizardPage {

  constructor(private _title: string, private _component: Type<EmbeddableComponent>) { }

  get title(): string {

    return this._title;
  }

  get component(): Type<EmbeddableComponent> {

    return this._component;
  }
}

/**
 * Gli stati disponibili per uno step
 */
export enum WizardStepState {
  ToDo = 0,
  Active = 1,
  Completed = 2
}

/**
 * Semplice interfaccia che marca un Component come inseribile nel wizard
 */
export interface EmbeddableComponent {

  /**
   * Viene chiamato quando il componente viene istanziato dentro il wizard
   */
  onEmbed(parent: WizardComponent);
}