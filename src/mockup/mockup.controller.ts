/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, LoginResponseModel } from './mockup.model';
import { MockupService } from './mockup.service';
import { StatusRequestModel } from './model/statusrequestmodel';

@Controller()
export class MockupController {
   constructor(private mockupService: MockupService) {}
        
    @Get()
    getAllMock():MockupModel[]{
        return this.mockupService.getAllMock();
    }
    
    @Post('/login')
    createMockup(@Body() mockUpModel: MockupModel) : LoginResponseModel {
       
        return this.mockupService.createMockup(mockUpModel);
    }

    @Post('/logout')
    logoutMockup(@Body() mockupLogoutModel:MockupLogoutModel):LogoutStatus {
            return this.mockupService.logoutMockup(mockupLogoutModel)
    }

    @Get('/orders/:shop_id/:banking_date')
    getOrderList(@Param('shop_id' )shop_id:number,@Param('banking_date') banking_date : Date):any{
       console.log(shop_id,"/"+banking_date)
        return this.mockupService.getOrderListByShopidAndBankingDate();
    }
    
    @Put('orders/status')
    updateStatus(@Body()req:StatusRequestModel){
        console.log('update status create##',req)
         return this.mockupService.updateOrderStatus(req)
    }

    }
