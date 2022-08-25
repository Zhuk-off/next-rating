import {
  ITopPageModel,
  TopLevelCategory,
} from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/product.interface';

export interface ITopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}
