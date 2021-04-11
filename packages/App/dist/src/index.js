"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.resolve = exports.inject = exports.injectable = void 0;
const App_1 = require("./App");
__exportStar(require("./App"), exports);
__exportStar(require("./ServiceProvider"), exports);
__exportStar(require("./Config/ConfigRepository"), exports);
__exportStar(require("./Exceptions/FailedToBindException"), exports);
var tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "injectable", { enumerable: true, get: function () { return tsyringe_1.injectable; } });
Object.defineProperty(exports, "inject", { enumerable: true, get: function () { return tsyringe_1.inject; } });
// Helper methods to resolve from the container a little easier/cleaner
const resolve = (identifier) => App_1.App.getInstance().resolve(identifier);
exports.resolve = resolve;
const app = () => App_1.App.getInstance();
exports.app = app;
//# sourceMappingURL=index.js.map