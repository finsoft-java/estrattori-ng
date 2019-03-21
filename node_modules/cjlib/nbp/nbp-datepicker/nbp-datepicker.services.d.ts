import { NgbDatepickerI18n, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class I18n {
    language: string;
}
export declare class NbpDatepickerItI18n extends NgbDatepickerI18n {
    private _i18n;
    constructor(_i18n: I18n);
    getWeekdayShortName(weekday: number): string;
    getMonthShortName(month: number): string;
    getMonthFullName(month: number): string;
}
export declare abstract class NbpDatepickerConfiguration {
    separator: string;
}
export declare class NbpItDateParserFormatter extends NgbDateParserFormatter {
    configuration: NbpDatepickerConfiguration;
    constructor(configuration: NbpDatepickerConfiguration);
    private padNumber(value);
    private isNumber(value);
    private toInteger(value);
    parse(value: string): NgbDateStruct;
    format(date: NgbDateStruct): string;
}
