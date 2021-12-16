import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, LoginResponseModel } from './mockup.model';
import { MockupService } from './mockup.service';
import { CreateOrderRequestModel } from './model/createorderrequestmodel';
import { ModuleRequestModel } from './model/modulerequestmodel';
import { StatusRequestModel } from './model/statusrequestmodel';
export declare class MockupController {
    private mockupService;
    constructor(mockupService: MockupService);
    getAllMock(): MockupModel[];
    createMockup(mockUpModel: MockupModel): LoginResponseModel;
    logoutMockup(mockupLogoutModel: MockupLogoutModel): LogoutStatus;
    getOrderList(shop_id: number, banking_date: Date): any;
    updateStatus(req: StatusRequestModel): any;
    getItems(shop_id: number): {
        order_date: string;
        lw_order_date_sales: string;
        lw_order_date_3_weeks_average_sales: string;
        lw_order_date_climate: string;
        lw_order_date_temp: string;
        exp_next_delv_date: string;
        exp_next_delv_date_total_qty: string;
        next_delv_date: string;
        lw_next_delv_date_sales: string;
        lw_next_delv_3_weeks_average_sales: string;
        lw_next_delv_date_climate: string;
        lw_next_delv_date_temp: string;
        data: {
            role: string;
            "role-items": {
                category: string;
                items: {
                    "stocked-items": {
                        id: number;
                        name: string;
                        case_size: string;
                        ps_cost: number;
                        sl_shop: number;
                        sl_open: number;
                        next_del_qty: number;
                        last_week_usage: number;
                        last_3week_avg_usage: number;
                        expected_delv_qty: number;
                        last_week_del_day_usage: number;
                        last_3week_avg_del_day_usage: number;
                    }[];
                    "unstocked-items": {
                        id: number;
                        name: string;
                        case_size: string;
                        ps_cost: number;
                        sl_shop: number;
                        sl_open: number;
                        next_del_qty: number;
                        last_week_usage: number;
                        last_3week_avg_usage: number;
                        expected_delv_qty: number;
                        last_week_del_day_usage: number;
                        last_3week_avg_del_day_usage: number;
                    }[];
                };
            }[];
        }[];
    };
    getShopInfo(shop_id: number): {
        shop_id: number;
        curreny: string;
        banking_date: string;
        workingdays: number[];
        deliverydays: number[];
        orderdays: number[];
    };
    updateModule(req: ModuleRequestModel): import("./model/statusresponsemodel").StatusResponseModel;
    createOrder(req: CreateOrderRequestModel): import("./model/statusresponsemodel").StatusResponseModel;
}
