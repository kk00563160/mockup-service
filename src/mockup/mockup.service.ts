/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, LoginResponseModel} from './mockup.model';
import * as loginresponsemodel from "./json/loginresponsemodel.json";
import * as logoutresponsemodel from "./json/logoutresponsemodel.json"
import * as orderlistmodel from "./json/orderlistmodel.json"
import { StatusResponseModel } from './model/statusresponsemodel';
import * as itemlistmodel from "./json/itemlistmodel.json";
import * as shopinfomodel from "./json/shopinfomodel.json";
import { ModuleRequestModel } from './model/modulerequestmodel';
import { CreateOrderRequestModel } from './model/createorderrequestmodel';
import * as orderdetailsmodel from "./json/orderdetailsmodel.json"
import * as shoplistmodel from "./json/shoplistmodel.json"

@Injectable()
export class MockupService {
    private mockup: MockupModel[] = [];
    private usertrack: MockupLogoutModel[]=[];

    getAllMock(): MockupModel[] {
        return this.mockup;
    }

    getOrderListByShopidAndBankingDate():any{
    console.log(orderlistmodel)
      return  orderlistmodel;
    }

    updateOrderStatus(responseObject):any{
        console.log()

        console.log("inside if##",responseObject.status_id)

        var ResModel : StatusResponseModel

        if(responseObject.status_id === 2 ){
          ResModel = new StatusResponseModel('Order Sent to HO','SENT_TO_HO')
         }

        if(responseObject.status_id === 4 ){
          ResModel = new StatusResponseModel('Order Cancelled','CANCELLED') }

          if(responseObject.status_id === 5 ){
            ResModel = new StatusResponseModel('Order Accepted','ACCEPTED')
           }

          return ResModel;
    }

    updateModule(req :ModuleRequestModel){

      var responseModel : StatusResponseModel

      if (req.module ===  "order"){
 
      if(req.userId=== "Sunny@pretboh.onmicrosoft.com"){

      responseModel = new StatusResponseModel ('User entered into order Module','USER_IN_ORDER_PAGE')
      }
      else {

        responseModel = new StatusResponseModel ('Gobi@pretboh.com already in order Module','ORDER_PAGE_ALREADY_IN_USE')
      }
      }
      else {

        responseModel = new StatusResponseModel ('User logout from  order Module','USER_LOGOUT_ORDER_PAGE')
      }
      
      return responseModel
    }

    createOrder(req : CreateOrderRequestModel): StatusResponseModel{

      var  responseModel : StatusResponseModel  = new StatusResponseModel ('BFL-001-001 order created ','ORDER_CREATED')

      return responseModel;
    }

    createMockup(mockUpModel:MockupModel): LoginResponseModel {
       
        return loginresponsemodel;
      
}

    logoutMockup(mockupLogoutModel:MockupLogoutModel):LogoutStatus{
console.log(logoutresponsemodel)
      
    return logoutresponsemodel
    
    }

    getAllItems(shop_id : number){
    var orderdate = new Date()

    console.log(orderdate)
    return itemlistmodel;
    }

    getShopInfo(shop_id : number){

      return shopinfomodel;

    }

    getOrder():any{

      return orderdetailsmodel;
    }

    getShopList():any{

      return shoplistmodel;
    }

}