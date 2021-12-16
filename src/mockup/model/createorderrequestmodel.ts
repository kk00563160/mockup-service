export class CreateOrderRequestModel{


    public shop_id : number
    public placed_by : string
    public items : []

}

export class Items{

    public item_id : number
    public qty : number
    public pack_price : number
    public role : string
}


















// {
//     "shopId": 1,
//     "placed_by": "sam",
//     "items": [
//                    {
//                                   "item_id": "",
//                                   "qty": "",
//  "pack_price":1,
//                                   "role":"FL"                                         
//                    },
//                    {
//                                   "item_id": "",
//                                   "qty": "",
//                                   "pack_price":1,
//                                   "role":"FL"           
//                    },
//                    {
//                                   "item_id": "",
//                                   "qty": "",
//                                   "pack_price":1,
//                                   "role":"FL"           
//                    }
//     ]
// }
