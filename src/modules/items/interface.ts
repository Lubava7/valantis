export interface ItemIterface {
  id: string;
  brand: string;
  price: number;
  product: string;
}

export interface ItemState {
  items: ItemIterface[];
  totalPages: number;
}
