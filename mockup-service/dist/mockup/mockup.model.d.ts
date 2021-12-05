export declare class MockupModel {
    userId: string;
    browser: string;
    machineId: string;
    shopId: number;
    userLogin: string;
    loginDate: Date;
    constructor(userId: string, browser: string, machineId: string, shopId: number, userLogin: string, loginDate: Date);
}
export declare class LoginResponseModel {
    status: string;
    response: MockupModel;
    constructor(status: string, response: MockupModel);
}
