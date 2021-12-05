"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseModel = exports.MockupModel = void 0;
class MockupModel {
    constructor(userId, browser, machineId, shopId, userLogin, loginDate) {
        this.userId = userId;
        this.browser = browser;
        this.machineId = machineId;
        this.shopId = shopId;
        this.userLogin = userLogin;
        this.loginDate = loginDate;
    }
}
exports.MockupModel = MockupModel;
class LoginResponseModel {
    constructor(status, response) {
        this.status = status;
        this.response = response;
    }
}
exports.LoginResponseModel = LoginResponseModel;
//# sourceMappingURL=mockup.model.js.map