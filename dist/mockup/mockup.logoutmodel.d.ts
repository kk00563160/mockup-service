export declare class MockupLogoutModel {
    userId: string;
    browser: string;
    machineId: string;
    shopId: number;
    loginDate: Date;
    logoutDate: Date;
    constructor(userId: string, browser: string, machineId: string, shopId: number, loginDate: Date, logoutDate: Date);
}
export declare class LogoutStatus {
    statusCode: number;
    timestamp: Date;
    path: string;
    message: string;
    responseCode: string;
    constructor(statusCode: number, timestamp: Date, path: string, message: string, responseCode: string);
}
