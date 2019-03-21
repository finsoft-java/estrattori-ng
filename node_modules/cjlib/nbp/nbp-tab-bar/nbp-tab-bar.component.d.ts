import { EventEmitter } from '@angular/core';
import { ITabItem } from './nbp-tab-bar.interfaces';
/**
 * Componente che visualizza una barra per la selezione
 * di schede
 */
export declare class NbpTabBarComponent {
    _tabItems: ITabItem<any>[];
    /**
     * Array di oggetti ITabItem che descrivono
     * le schede
     */
    nbpItems: ITabItem<any>[];
    _selectedTabIndex: number;
    /**
     * Indice della scheda selezionata
     */
    nbpSelectedIndex: number;
    /**
     * Evento emesso dopo la selezione di una scheda
     */
    nbpSelectedIndexChange: EventEmitter<number>;
    constructor();
    /**
     * Metodo per selezionare una scheda
     */
    selectTab(index: number): void;
}
