import Link from 'next/link';
import { Button, Htag } from '../../components';
import { IMainPageComponentProps } from './MainPageComponent.props';
import styles from './MainPageComponent.module.css';

export const MainPageComponent = ({
  firstLevelMenu,
}: IMainPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Htag tag="h2" className={styles.title}>
        Выберите раздел для просмотра рейтингов
      </Htag>
      {firstLevelMenu.map((m) => (
        <Link href={m.route} key={m.id}>
          <a>
            <Button appearance="ghost" className={styles.card}>
              {m.icon} <span className={styles.name}>{m.name}</span> {m.icon}
            </Button>
          </a>
        </Link>
      ))}
    </div>
  );
};
