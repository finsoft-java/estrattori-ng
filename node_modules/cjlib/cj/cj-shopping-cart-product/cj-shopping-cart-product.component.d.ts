import { OnInit, EventEmitter } from '@angular/core';
import { IShoppingCartProduct, IShoppingCartEvent } from './../cj-shopping-cart/cj-shopping-cart.interfaces';
import { IIconStructure, ITooltipStructure } from './../cj-commons/cj-commons.interface';
export declare class CjShoppingCartProductComponent implements OnInit {
    _popoverSize: any;
    popoverData: {
        popoverData: ITooltipStructure;
    };
    /**
     * modello dei dati
     */
    cjData: IShoppingCartProduct;
    /**
     * proprietà utilizzata per sapere se il padre del product è un Item o una Section
     */
    cjIsParentItem: boolean;
    private _cjReadOnly;
    /**
     * Permette di impostare la visualizzazione in sola lettura del prodotto, nascondendo i pulsanti di eliminazione e dettaglio
     */
    cjReadOnly: boolean;
    private _myEventInfo;
    /**
     * evento emesso alla pressione del link presente nel tooltip visualizzato sulla 'lente'
     * @param EventEmitter<IShoppingCartProduct>  cjOnGotoCardProduct [description]
     */
    cjOnGotoCardProduct: EventEmitter<IShoppingCartProduct>;
    /**
     * evento emesso alla pressione dell'icona destra (icona di default 'cestino')
     * @param EventEmitter<IShoppingCartEvent> cjOnClickRightIcon
     */
    cjOnClickRightIcon: EventEmitter<IShoppingCartEvent>;
    /**
     * evento emesso al click del link presente nel popover che viene aperto alla pressione del pulsante sinistro
     * (icona di default 'lente ingrandimento zoom').
     * @param EventEmitter<IShoppingCartEvent> cjOnClickLeftIconLink
     */
    cjOnClickLeftIconLink: EventEmitter<IShoppingCartEvent>;
    /**
     * evento emesso alla pressione della link 'promo >' per la visualizzazione delle info dettagliate
     * @param EventEmitter<IShoppingCartEvent> cjOnClickPromo
     */
    cjOnClickPromo: EventEmitter<IShoppingCartEvent>;
    _iconLeft: IIconStructure;
    _iconRight: IIconStructure;
    private _productStyle;
    constructor();
    ngOnInit(): void;
    private fillIconStructure(defaultIcon, iconDataSrc?);
    _getProductStyle(): ('promo' | 'convenant' | 'standard');
    _onClickRightIcon(): void;
    _onGotoCardProduct(): void;
    _onClickPromo(): void;
    _sendEventOnClickPopoverLink: () => void;
}
