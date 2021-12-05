/* eslint-disable prettier/prettier */

export class MockupModel {
    constructor(public userId: string,
        public browser: string,
        public machineId: string,
        public shopId: number,
        public userLogin: string, 
        public loginDate: Date) { }

}
export class LoginResponseModel {
    constructor(public status: string, public response: MockupModel) { }
}

