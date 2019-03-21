var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { CjCustomContextClientService } from './cj-custom-context-client.service';
import { CjContextService } from './cj-context.service';
// il token è memorizzato dal ContextService e utilizzato per recuperare il custom context
// TODO X CARLO --> cabiamo nome alla funzione ???
var ICjCustomContextService = (function () {
    function ICjCustomContextService(contextService) {
        this.contextService = contextService;
    }
    ICjCustomContextService.prototype._getToken = function () {
        return this.contextService.getCurrentToken();
    };
    return ICjCustomContextService;
}());
export { ICjCustomContextService };
var CjCustomContextService = (function (_super) {
    __extends(CjCustomContextService, _super);
    function CjCustomContextService(cjCustomContextClient, contextService) {
        var _this = _super.call(this, contextService) || this;
        _this.cjCustomContextClient = cjCustomContextClient;
        return _this;
    }
    CjCustomContextService.prototype.getCustomContextByTokenAndKey = function (key) {
        return this.cjCustomContextClient.getCustomContext(_super.prototype._getToken.call(this), key);
    };
    // vs update
    CjCustomContextService.prototype.setCustomContextByTokenAndKey = function (key, value) {
        return this.cjCustomContextClient.setCustomContext(_super.prototype._getToken.call(this), key, value);
    };
    CjCustomContextService.prototype.removeCustomContextByTokenAndKey = function (key) {
        return this.cjCustomContextClient.removeCustomContext(_super.prototype._getToken.call(this), key);
    };
    return CjCustomContextService;
}(ICjCustomContextService));
CjCustomContextService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CjCustomContextClientService,
        CjContextService])
], CjCustomContextService);
export { CjCustomContextService };
