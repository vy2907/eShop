import { IProduct } from 'src/setting/context/categories.context';

export interface IShopItem {
  title: string;
  items: IProduct[];
}

export default IShopItem;
