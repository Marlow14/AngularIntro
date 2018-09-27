"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.forbiddenName = function (forbiddenName) {
        return function (control) {
            if (control.value.toLowerCase() == 'impossible') {
                return { forbiddenName: true };
            }
            return null;
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom.validators.js.map