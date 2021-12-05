import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, LoginResponseModel } from './mockup.model';
export declare class MockupService {
    private mockup;
    private usertrack;
    getAllMock(): MockupModel[];
    getOrderListByShopidAndBankingDate(): any;
    updateOrderStatus(responseObject: any): any;
    createMockup(mockUpModel: MockupModel): LoginResponseModel;
    logoutMockup(mockupLogoutModel: MockupLogoutModel): LogoutStatus;
}
