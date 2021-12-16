"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockupController = void 0;
const common_1 = require("@nestjs/common");
const mockup_logoutmodel_1 = require("./mockup.logoutmodel");
const mockup_model_1 = require("./mockup.model");
const mockup_service_1 = require("./mockup.service");
const modulerequestmodel_1 = require("./model/modulerequestmodel");
const statusrequestmodel_1 = require("./model/statusrequestmodel");
let MockupController = class MockupController {
    constructor(mockupService) {
        this.mockupService = mockupService;
    }
    getAllMock() {
        return this.mockupService.getAllMock();
    }
    createMockup(mockUpModel) {
        return this.mockupService.createMockup(mockUpModel);
    }
    logoutMockup(mockupLogoutModel) {
        return this.mockupService.logoutMockup(mockupLogoutModel);
    }
    getOrderList(shop_id, banking_date) {
        console.log(shop_id, "/" + banking_date);
        return this.mockupService.getOrderListByShopidAndBankingDate();
    }
    updateStatus(req) {
        console.log('update status create##', req);
        return this.mockupService.updateOrderStatus(req);
    }
    getItems(shop_id) {
        console.log('get all items for shopid ', shop_id);
        return this.mockupService.getAllItems(shop_id);
    }
    getShopInfo(shop_id) {
        console.log('get all items for shopid ', shop_id);
        return this.mockupService.getShopInfo(shop_id);
    }
    updateModule(req) {
        console.log('update status create##', req);
        return this.mockupService.updateModule(req);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MockupController.prototype, "getAllMock", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mockup_model_1.MockupModel]),
    __metadata("design:returntype", mockup_model_1.LoginResponseModel)
], MockupController.prototype, "createMockup", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mockup_logoutmodel_1.MockupLogoutModel]),
    __metadata("design:returntype", mockup_logoutmodel_1.LogoutStatus)
], MockupController.prototype, "logoutMockup", null);
__decorate([
    (0, common_1.Get)('order/orderlist/:shop_id/:banking_date'),
    __param(0, (0, common_1.Param)('shop_id')),
    __param(1, (0, common_1.Param)('banking_date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", Object)
], MockupController.prototype, "getOrderList", null);
__decorate([
    (0, common_1.Put)('order/statusupdate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [statusrequestmodel_1.StatusRequestModel]),
    __metadata("design:returntype", void 0)
], MockupController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)('/goods/goodslist/:shop_id'),
    __param(0, (0, common_1.Param)('shop_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MockupController.prototype, "getItems", null);
__decorate([
    (0, common_1.Get)('shop/shopinfo/:shop_id'),
    __param(0, (0, common_1.Param)('shop_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MockupController.prototype, "getShopInfo", null);
__decorate([
    (0, common_1.Put)('employee/moduletracking'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [modulerequestmodel_1.ModuleRequestModel]),
    __metadata("design:returntype", void 0)
], MockupController.prototype, "updateModule", null);
MockupController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [mockup_service_1.MockupService])
], MockupController);
exports.MockupController = MockupController;
//# sourceMappingURL=mockup.controller.js.map