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
import { NbpValueAccessorBase } from './nbp-value-accessor';
import { message, validate } from './nbp-validator';
// Observable operators
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
/**
 *  Provides observable values to its parent about its validity state.
 *  Each element will need to know its validity state for rendering purposes.
 */
var NbpInputElementBase = (function (_super) {
    __extends(NbpInputElementBase, _super);
    // we will ultimately get these arguments from @Inject on the derived class
    function NbpInputElementBase(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this.validators = validators;
        _this.asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * Can be used in the control and it works off of validators
     * injected through hierarchical dependency injection
     * (eg. a required or minlength directive).
     * @return {Observable<ValidationResult>} result of validation chain
     */
    NbpInputElementBase.prototype.validate = function () {
        return validate(this.validators, this.asyncValidators)(this.model.control);
    };
    Object.defineProperty(NbpInputElementBase.prototype, "invalid", {
        /**
         * Array of validator
         * @return Observable<boolean>
         */
        get: function () {
            return this.validate().map(function (v) { return Object.keys(v || {}).length > 0; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpInputElementBase.prototype, "failures", {
        /**
         * Array of validation error messages
         * @return { Observable<Array<string>> }
         */
        get: function () {
            return this.validate().map(function (v) { return Object.keys(v).map(function (k) { return message(v, k); }); });
        },
        enumerable: true,
        configurable: true
    });
    return NbpInputElementBase;
}(NbpValueAccessorBase));
export { NbpInputElementBase };
