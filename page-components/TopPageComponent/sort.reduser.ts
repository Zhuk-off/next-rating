import { SortEnum } from '../../components/Sort/Sort.props';
import { IProductModel } from '../../interfaces/product.interface';

// потому что пейлоады могут быть другими, поэтому я разнес так
// могли бы задать как
// export type SortActions = { type: SortEnum};
export type SortActions =
  | { type: SortEnum.Price }
  | { type: SortEnum.Rating }
  | { type: 'reset'; initialState: IProductModel[] };

// должна храниться сама сортировка, потому что нам по этой сортировке дальше в компоненте отобраажть текущее состояние
export interface SortReducerState {
  sort: SortEnum;
  products: IProductModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };

    case 'reset':
      return {
        sort: SortEnum.Rating,
        products: action.initialState,
      };

    default:
      throw new Error('Невурный тип сортировки');
  }
};
