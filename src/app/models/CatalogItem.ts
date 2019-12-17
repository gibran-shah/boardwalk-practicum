export interface CatalogItem {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string; // TODO: should this be number?
}

export interface CartItem extends CatalogItem {
    quantity: number;
}