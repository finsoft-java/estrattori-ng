import { ControlValueAccessor } from '@angular/forms';
/**
 *  Implements the Control Value Accessor pattern from Angular
 */
export declare class NbpValueAccessorBase<T> implements ControlValueAccessor {
    private innerValue;
    private changed;
    private touched;
    value: T;
    touch(): void;
    /**
     * Used to update the value of our control
     * @param {T} value argument of our control
     */
    writeValue(value: T): void;
    registerOnChange(fn: (value: T) => void): void;
    registerOnTouched(fn: () => void): void;
}
