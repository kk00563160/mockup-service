export class StatusRequestModel {
    constructor(
         public order_id:string,
         public status_id:number,
          ) {
        //console.log('request model created')
    }
}