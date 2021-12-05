"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutStatus = exports.MockupLogoutModel = void 0;
class MockupLogoutModel {
    constructor(userId, browser, machineId, shopId, loginDate, logoutDate) {
        this.userId = userId;
        this.browser = browser;
        this.machineId = machineId;
        this.shopId = shopId;
        this.loginDate = loginDate;
        this.logoutDate = logoutDate;
    }
}
exports.MockupLogoutModel = MockupLogoutModel;
class LogoutStatus {
    constructor(statusCode, timestamp, path, message, responseCode) {
        this.statusCode = statusCode;
        this.timestamp = timestamp;
        this.path = path;
        this.message = message;
        this.responseCode = responseCode;
    }
}
exports.LogoutStatus = LogoutStatus;
//# sourceMappingURL=mockup.logoutmodel.js.map