import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, LoginResponseModel } from './mockup.model';
import { MockupService } from './mockup.service';
import { StatusRequestModel } from './model/statusrequestmodel';
export declare class MockupController {
    private mockupService;
    constructor(mockupService: MockupService);
    getAllMock(): MockupModel[];
    createMockup(mockUpModel: MockupModel): LoginResponseModel;
    logoutMockup(mockupLogoutModel: MockupLogoutModel): LogoutStatus;
    getOrderList(shop_id: number, banking_date: Date): any;
    updateStatus(req: StatusRequestModel): any;
}
