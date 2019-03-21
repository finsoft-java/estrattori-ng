var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var ShoppingCartUtility = (function () {
    function ShoppingCartUtility() {
    }
    ShoppingCartUtility.prototype._cloneObject = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    ShoppingCartUtility.prototype.getCartElementById = function (data, id) {
        if (!data || !id) {
            return null;
        }
        var objects = data.filter(function (object) {
            return object.id === id;
        });
        return objects.length ? objects[0] : null;
    };
    ShoppingCartUtility.prototype.addSection = function (cart, section, insertOnTop) {
        if (!cart || !section) {
            console.log("cjShoppingCartUtility.addSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        if (!cartTemp.sections) {
            cartTemp.sections = new Array();
        }
        if (insertOnTop) {
            cartTemp.sections.unshift(section);
        }
        else {
            cartTemp.sections.push(section);
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeSection = function (cart, sectionId) {
        if (!cart || !sectionId) {
            console.log("cjShoppingCartUtility.removeSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var sectionsTemp = cart.sections.filter(function (section) {
            return section.id !== sectionId;
        });
        cartTemp.sections = sectionsTemp;
        return cartTemp;
    };
    ShoppingCartUtility.prototype.addItemToSection = function (cart, sectionId, item, insertOnTop) {
        if (!cart || !sectionId || !item) {
            console.log("cjShoppingCartUtility.addItemToSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var sectionTemp = this.getCartElementById(cartTemp.sections, sectionId);
        if (sectionTemp) {
            if (!sectionTemp.items) {
                sectionTemp.items = new Array();
            }
            if (insertOnTop) {
                sectionTemp.items.unshift(item);
            }
            else {
                sectionTemp.items.push(item);
            }
        }
        else {
            console.log('CjShoppingCartUtility.addItemToSection: section ' + sectionId + ' not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeItemFormSection = function (cart, sectionId, itemId) {
        if (!cart || !sectionId || !itemId) {
            console.log("cjShoppingCartUtility.removeItemFormSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            selectedSection.items = selectedSection.items.filter(function (item) {
                return item.id !== itemId;
            });
        }
        else {
            console.log('CjShoppingCartUtility.removeItemFromSection: section ' + sectionId + ' not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.addProductToSection = function (cart, sectionId, product) {
        if (!cart || !sectionId || !product) {
            console.log("cjShoppingCartUtility.addProductToSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            if (!selectedSection.products) {
                selectedSection.products = [];
            }
            selectedSection.products.push(product);
        }
        else {
            console.log('CjShoppingCartUtility.addProductToSection: section ' + sectionId + ' not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeProductFromSection = function (cart, sectionId, productId) {
        if (!cart || !sectionId || !productId) {
            console.log('cjShoppingCartUtility.removeProductFromSection: invalid parameters.');
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            if (selectedSection.products) {
                var productsLength = selectedSection.products.length;
                selectedSection.products = selectedSection.products.filter(function (prod) {
                    return prod.id !== productId;
                });
                if (productsLength === selectedSection.products.length) {
                    console.log('cjShoppingCartUtility.removeProductFromSection: product ' + productId + 'not found.');
                }
            }
            else {
                console.log('cjShoppingCartUtility.removeProductFromSection: section ' + sectionId + ' does\'t contain any products.');
            }
        }
        else {
            console.log('cjShoppingCartUtility.removeProductFromSection: section ' + sectionId + 'not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.addProductToItem = function (cart, sectionId, itemId, product) {
        if (!cart || !sectionId || !itemId || !product) {
            console.log('cjShoppingCartUtility.addProductToItem: invalid parameters.');
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            var selectedItem = this.getCartElementById(selectedSection.items, itemId);
            if (selectedItem) {
                if (!selectedItem.products) {
                    selectedItem.products = new Array();
                }
                selectedItem.products.push(product);
            }
            else {
                console.log('cjShoppingCartUtility.addProductToItem: item ' + itemId + 'not found.');
            }
        }
        else {
            console.log('cjShoppingCartUtility.addProductToItem: section ' + sectionId + 'not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeProductFromItem = function (cart, sectionId, itemId, productId) {
        if (!cart || !sectionId || !itemId || !productId) {
            console.log('cjShoppingCartUtility.removeProductFromItem: invalid parameters.');
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            var selectedItem = this.getCartElementById(selectedSection.items, itemId);
            if (selectedItem) {
                if (selectedItem.products) {
                    var productsLength = selectedItem.products.length;
                    selectedItem.products = selectedItem.products.filter(function (product) {
                        return product.id !== productId;
                    });
                    if (productsLength === selectedSection.products.length) {
                        console.log('cjShoppingCartUtility.removeProductFromItem: product ' + productId + 'not found.');
                    }
                }
                else {
                    console.log('cjShoppingCartUtility.removeProductFromItem: section ' + sectionId + ' does\'t contain any products.');
                }
            }
            else {
                console.log('cjShoppingCartUtility.removeProductFromItem: item ' + itemId + 'not found.');
            }
        }
        else {
            console.log('cjShoppingCartUtility.removeProductFromItem: section ' + sectionId + 'not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.getObjectById = function (data, id) {
        var objects = data.filter(function (object) {
            return object.id === id;
        });
        return objects.length ? objects[0] : null;
    };
    return ShoppingCartUtility;
}());
ShoppingCartUtility = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ShoppingCartUtility);
export { ShoppingCartUtility };
