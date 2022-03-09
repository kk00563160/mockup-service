"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockupService = void 0;
const common_1 = require("@nestjs/common");
const loginresponsemodel = require("./json/loginresponsemodel.json");
const logoutresponsemodel = require("./json/logoutresponsemodel.json");
const orderlistmodel = require("./json/orderlistmodel.json");
const statusresponsemodel_1 = require("./model/statusresponsemodel");
const itemlistmodel = require("./json/itemlistmodel.json");
const shopinfomodel = require("./json/shopinfomodel.json");
const orderdetailsmodel = require("./json/orderdetailsmodel.json");
const shoplistmodel = require("./json/shoplistmodel.json");
const goodsadditionalordermodel = require("./json/goodsadditionalordermodel.json");
const createadditinalordermodel = require("./json/createadditionalordermodel.json");
let MockupService = class MockupService {
    constructor() {
        this.mockup = [];
        this.usertrack = [];
    }
    getAllMock() {
        return this.mockup;
    }
    getOrderListByShopidAndBankingDate() {
        console.log(orderlistmodel);
        return orderlistmodel;
    }
    updateOrderStatus(responseObject) {
        console.log();
        console.log("inside if##", responseObject.status_id);
        var ResModel;
        if (responseObject.status_id === 2) {
            ResModel = new statusresponsemodel_1.StatusResponseModel('Order Sent to HO', 'SENT_TO_HO');
        }
        if (responseObject.status_id === 4) {
            ResModel = new statusresponsemodel_1.StatusResponseModel('Order Cancelled', 'CANCELLED');
        }
        if (responseObject.status_id === 5) {
            ResModel = new statusresponsemodel_1.StatusResponseModel('Order Accepted', 'ACCEPTED');
        }
        return ResModel;
    }
    updateModule(req) {
        var responseModel;
        if (req.module === "order") {
            if (req.userId === "Sunny@pretboh.onmicrosoft.com") {
                responseModel = new statusresponsemodel_1.StatusResponseModel('User entered into order Module', 'USER_IN_ORDER_PAGE');
            }
            else {
                responseModel = new statusresponsemodel_1.StatusResponseModel('Gobi@pretboh.com already in order Module', 'ORDER_PAGE_ALREADY_IN_USE');
            }
        }
        else {
            responseModel = new statusresponsemodel_1.StatusResponseModel('User logout from  order Module', 'USER_LOGOUT_ORDER_PAGE');
        }
        return responseModel;
    }
    createOrder(req) {
        if (req.order_type === "Additional") {
            return createadditinalordermodel;
        }
        var responseModel = new statusresponsemodel_1.StatusResponseModel('BFL-001-001 order created ', 'ORDER_CREATED');
        return responseModel;
    }
    createMockup(mockUpModel) {
        return loginresponsemodel;
    }
    logoutMockup(mockupLogoutModel) {
        console.log(logoutresponsemodel);
        return logoutresponsemodel;
    }
    getAllItems(shop_id) {
        var orderdate = new Date();
        console.log(orderdate);
        return itemlistmodel;
    }
    getShopInfo(shop_id) {
        return shopinfomodel;
    }
    getOrder() {
        return orderdetailsmodel;
    }
    getShopList() {
        return shoplistmodel;
    }
    getGoodsAdditional(shop_id) {
        return goodsadditionalordermodel;
    }
};
MockupService = __decorate([
    (0, common_1.Injectable)()
], MockupService);
exports.MockupService = MockupService;
//# sourceMappingURL=mockup.service.js.map