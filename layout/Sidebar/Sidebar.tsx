import { ISidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
  return (
    <div {...props}>
      Sidebar
      <Menu />
    </div>
  );
};
