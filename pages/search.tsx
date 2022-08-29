import { GetStaticProps } from 'next';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { IMenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import { useRouter } from 'next/router';
import { Button, Divider, Htag } from '../components';
import Link from 'next/link';

function Search(): JSX.Element {
  const router = useRouter();
  const findText = router.query.q;
  return (
    <div>
      <Divider />
      <Htag tag="h3" style={{ color: 'red' }}>
        Поиск пока в разработке. Наши инжинеры работают днями и ночами, чтобы
        все исправить.
      </Htag>
      <Divider />
      {findText && (
        <Htag tag="h3">{`По запросу: "${findText}" ничего не найдено :(`}</Htag>
      )}
      <Divider />
      <Link href={'/'}>
        <a>
          <Button appearance="primary">Вернуться на главную</Button>
        </a>
      </Link>
    </div>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
