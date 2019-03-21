/**
 *  Implements the Control Value Accessor pattern from Angular
 */
var NbpValueAccessorBase = (function () {
    function NbpValueAccessorBase() {
        this.changed = new Array();
        this.touched = new Array();
    }
    Object.defineProperty(NbpValueAccessorBase.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.changed.forEach(function (f) { return f(value); });
            }
        },
        enumerable: true,
        configurable: true
    });
    NbpValueAccessorBase.prototype.touch = function () {
        this.touched.forEach(function (f) { return f(); });
    };
    /**
     * Used to update the value of our control
     * @param {T} value argument of our control
     */
    NbpValueAccessorBase.prototype.writeValue = function (value) {
        this.innerValue = value;
    };
    NbpValueAccessorBase.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    NbpValueAccessorBase.prototype.registerOnTouched = function (fn) {
        this.touched.push(fn);
    };
    return NbpValueAccessorBase;
}());
export { NbpValueAccessorBase };
