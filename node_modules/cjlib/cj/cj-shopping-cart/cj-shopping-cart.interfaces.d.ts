import { EventEmitter } from '@angular/core';
import { INbpButton } from '../../nbp/nbp-commons/nbp-commons.interface';
import { IIconStructure } from './../cj-commons/cj-commons.interface';
export interface ILine {
    text: string;
    style?: 'stroke';
}
/**
 * Struttura dati utilizzabile per titolo e sottotitolo
 */
export interface ITitleStructure {
    firstLine: ILine;
    secondLine?: ILine;
    thirdLine?: ILine;
}
/**
 * Struttura usata per popolare il componente cjShoppingCart
 */
export interface IShoppingCartData {
    id: string;
    sections: Array<IShoppingCartSection>;
}
/**
 * Struttura dati di Base estesa da tutti gli elementi di cjShoppingCart
 */
export interface IShoppingCartElementBase {
    id: string;
    titleInfoLeft?: ITitleStructure;
    titleInfoRight?: ITitleStructure;
}
/**
 * Dati da visualizzare nella section del cjShoppingCart
 */
export interface IShoppingCartSection extends IShoppingCartElementBase {
    items?: Array<IShoppingCartItem>;
    products?: Array<IShoppingCartProduct>;
}
/**
 * Item contenuto nella Section del cjShoppingCart
 */
export interface IShoppingCartItem extends IShoppingCartElementBase {
    products: Array<IShoppingCartProduct>;
    items?: Array<IShoppingCartItem>;
}
/**
 * struttura dati utilizzata per contenere le inforamzioni relative
 * alle promo e alle convenzioni
 */
export interface IPromotionalStructure {
    id: string;
    title?: string;
    description: string;
}
/**
 * Prodotto contenuto negli Item del cjShoppingCart
 */
export interface IShoppingCartProduct extends IShoppingCartElementBase {
    quantity: number;
    iconLeft?: IIconStructure;
    iconRight?: IIconStructure;
    promo?: IPromotionalStructure;
    covenant?: IPromotionalStructure;
    insertDate?: Date;
}
/**
 * Dati\Evento da inviare all'evento di cancellazione del prodotto
 */
export interface IShoppingCartEvent {
    shoppingCartId?: string;
    sectionId?: string;
    itemId?: string;
    productId?: string;
    current: any;
}
export interface IShoppingCartDataModel {
    initialData(id: string): IShoppingCartData;
    updateProduct(id: string, product: IShoppingCartProduct): IShoppingCartProduct;
    discardData(id: string): boolean;
}
/**
 * Elenco degli eventi emessi dal componente cjShoppingCart
 */
export interface ICjShoppingCartEvents {
    cjOnClickProductLeftIconLink: EventEmitter<IShoppingCartEvent>;
    cjOnClickProductRightIcon: EventEmitter<IShoppingCartEvent>;
    cjOnOpenElement: EventEmitter<IShoppingCartEvent>;
    cjOnClickFooterButton: EventEmitter<INbpButton>;
}
