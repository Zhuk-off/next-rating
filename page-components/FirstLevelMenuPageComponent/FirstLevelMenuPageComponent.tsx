import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { Button, Divider, Htag } from '../../components';
import { IFirstLevelMenuPageComponentProps } from './FirstLevelMenuPageComponenet.props';
import styles from './FirstLevelMenuPageComponent.module.css';

export const FirstLevelMenuPageComponent = ({
  menuItems,
}: IFirstLevelMenuPageComponentProps): JSX.Element => {
  const { asPath: route } = useRouter();
  return (
    <div className={styles.wrapper}>
      {menuItems.length !== 0 ? (
        menuItems.map((m) => (
          <Fragment key={m._id.secondCategory}>
            <Htag tag="h2" key={m._id.secondCategory}>
              <span className={styles.name}>{m._id.secondCategory}</span>
            </Htag>
            <Divider />
            {m.pages.map((p) => (
              <Link href={`${route}/${p.alias}`} key={p._id}>
                <a>
                  <Button appearance="ghost" className={styles.card}>
                    {p.category}
                  </Button>
                </a>
              </Link>
            ))}
          </Fragment>
        ))
      ) : (
        <>
          <Link href={'/'}>
            <a>
              <Htag tag="h2">Раздел пока пуст</Htag>
              <Button appearance="primary">Вернуться на главную</Button>
            </a>
          </Link>
        </>
      )}
    </div>
  );
};
