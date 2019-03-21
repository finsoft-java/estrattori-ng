import { IShoppingCartData, IShoppingCartElementBase, IShoppingCartSection, IShoppingCartProduct, IShoppingCartItem } from './cj-shopping-cart.interfaces';
export interface IShoppingCartUtility {
    addSection(cart: IShoppingCartData, section: IShoppingCartSection, insertOnTop?: boolean): IShoppingCartData;
    removeSection(cart: IShoppingCartData, sectionId: string): IShoppingCartData;
    addItemToSection(cart: IShoppingCartData, sectionId: string, item: IShoppingCartItem, insertOnTop?: boolean): IShoppingCartData;
    removeItemFormSection(cart: IShoppingCartData, sectionId: string, itemId: string): IShoppingCartData;
    addProductToSection(cart: IShoppingCartData, sectionId: string, product: IShoppingCartProduct): IShoppingCartData;
    removeProductFromSection(cart: IShoppingCartData, sectionId: string, productId: string): IShoppingCartData;
    addProductToItem(cart: IShoppingCartData, sectionId: string, itemId: string, product: IShoppingCartProduct): IShoppingCartData;
    removeProductFromItem(cart: IShoppingCartData, sectionId: string, itemId: string, productId: string): IShoppingCartData;
    getObjectById(data: Array<IShoppingCartElementBase>, id: string): any;
}
export declare class ShoppingCartUtility implements IShoppingCartUtility {
    constructor();
    private _cloneObject(obj);
    private getCartElementById(data, id);
    addSection(cart: IShoppingCartData, section: IShoppingCartSection, insertOnTop?: boolean): IShoppingCartData;
    removeSection(cart: IShoppingCartData, sectionId: string): IShoppingCartData;
    addItemToSection(cart: IShoppingCartData, sectionId: string, item: IShoppingCartItem, insertOnTop?: boolean): IShoppingCartData;
    removeItemFormSection(cart: IShoppingCartData, sectionId: string, itemId: string): IShoppingCartData;
    addProductToSection(cart: IShoppingCartData, sectionId: string, product: IShoppingCartProduct): IShoppingCartData;
    removeProductFromSection(cart: IShoppingCartData, sectionId: string, productId: string): IShoppingCartData;
    addProductToItem(cart: IShoppingCartData, sectionId: string, itemId: string, product: IShoppingCartProduct): IShoppingCartData;
    removeProductFromItem(cart: IShoppingCartData, sectionId: string, itemId: string, productId: string): IShoppingCartData;
    getObjectById(data: Array<IShoppingCartElementBase>, id: string): any;
}
