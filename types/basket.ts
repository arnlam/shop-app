export interface SelectedItem {
  id: string;
  amount: number;
  price: number;
  name: string;
  picturePath: string;
}

export interface Basket {
  [key: string]: number;
}
