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
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
var CjTimingInterceptor = (function () {
    function CjTimingInterceptor() {
    }
    CjTimingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof HttpResponse) {
                var elapsed = Date.now() - started;
                console.debug("Request for " + req.urlWithParams + " took " + elapsed + " ms.");
            }
        });
    };
    return CjTimingInterceptor;
}());
CjTimingInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CjTimingInterceptor);
export { CjTimingInterceptor };
var CjErrorInterceptor = (function () {
    function CjErrorInterceptor() {
    }
    CjErrorInterceptor.prototype.intercept = function (req, next) {
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof HttpErrorResponse) {
                console.error("Request error " + req.url + " throw error " + event.error + ".");
            }
        });
    };
    return CjErrorInterceptor;
}());
CjErrorInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CjErrorInterceptor);
export { CjErrorInterceptor };
