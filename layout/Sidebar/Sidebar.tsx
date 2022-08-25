import { ISidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import cn from 'classnames';
import { Search } from '../../components';
import Link from 'next/link';

export const Sidebar = ({
  className,
  ...props
}: ISidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={'/'}>
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>

      <Search />
      <Menu />
    </div>
  );
};
