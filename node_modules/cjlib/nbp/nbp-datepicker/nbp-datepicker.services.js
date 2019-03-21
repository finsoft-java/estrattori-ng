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
import { NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
var I18N_VALUES = {
    'it': {
        weekdays: ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do'],
        months: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        fullMonths: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
            'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = (function () {
    function I18n() {
        this.language = 'it';
    }
    return I18n;
}());
I18n = __decorate([
    Injectable()
], I18n);
export { I18n };
// Define custom service providing the months and weekdays translations
var NbpDatepickerItI18n = (function (_super) {
    __extends(NbpDatepickerItI18n, _super);
    function NbpDatepickerItI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    NbpDatepickerItI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    NbpDatepickerItI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    NbpDatepickerItI18n.prototype.getMonthFullName = function (month) {
        return I18N_VALUES[this._i18n.language].fullMonths[month - 1];
    };
    return NbpDatepickerItI18n;
}(NgbDatepickerI18n));
NbpDatepickerItI18n = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [I18n])
], NbpDatepickerItI18n);
export { NbpDatepickerItI18n };
var NbpDatepickerConfiguration = (function () {
    function NbpDatepickerConfiguration() {
        this.separator = '.';
    }
    return NbpDatepickerConfiguration;
}());
NbpDatepickerConfiguration = __decorate([
    Injectable()
], NbpDatepickerConfiguration);
export { NbpDatepickerConfiguration };
var NbpItDateParserFormatter = (function (_super) {
    __extends(NbpItDateParserFormatter, _super);
    function NbpItDateParserFormatter(configuration) {
        var _this = _super.call(this) || this;
        _this.configuration = configuration;
        return _this;
    }
    NbpItDateParserFormatter.prototype.padNumber = function (value) {
        if (this.isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    };
    NbpItDateParserFormatter.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    NbpItDateParserFormatter.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    NbpItDateParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('.');
            if (dateParts.length === 1 && this.isNumber(dateParts[0])) {
                return { day: this.toInteger(dateParts[0]), month: null, year: null };
            }
            else if (dateParts.length === 2 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: null };
            }
            else if (dateParts.length === 3 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1]) && this.isNumber(dateParts[2])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: this.toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    NbpItDateParserFormatter.prototype.format = function (date) {
        return date ?
            "" + (this.isNumber(date.day) ? this.padNumber(date.day) : '') + this.configuration.separator + (this.isNumber(date.month) ? this.padNumber(date.month) : '') + this.configuration.separator + date.year : '';
    };
    return NbpItDateParserFormatter;
}(NgbDateParserFormatter));
NbpItDateParserFormatter = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NbpDatepickerConfiguration])
], NbpItDateParserFormatter);
export { NbpItDateParserFormatter };
