import styles from './TopPageComponent.module.css';
import { ITopPageComponentProps } from './TopPageComponenet.props';

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: ITopPageComponentProps): JSX.Element => {
  return (
    <>
      <p>{products && products.length}</p>
    </>
  );
};
