import { IHeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../logo.svg';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href={`/`}>
        <a>
          <Logo />
        </a>
      </Link>
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
