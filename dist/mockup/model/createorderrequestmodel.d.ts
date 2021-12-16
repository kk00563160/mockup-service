export declare class CreateOrderRequestModel {
    shop_id: number;
    placed_by: string;
    items: [];
}
export declare class Items {
    item_id: number;
    qty: number;
    pack_price: number;
    role: string;
}
