/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, LoginResponseModel} from './mockup.model';
import * as loginresponsemodel from "./json/loginresponsemodel.json";
import * as logoutresponsemodel from "./json/logoutresponsemodel.json"
import * as orderlistmodel from "./json/orderlistmodel.json"
import { StatusResponseModel } from './model/statusresponsemodel';
import * as itemlistmodel from "./json/itemlistmodel.json"

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
}