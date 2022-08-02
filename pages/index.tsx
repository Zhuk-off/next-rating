import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, TextArea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { IMenuItem } from '../interfaces/menu.interface';

function Home({ menu }: IHomeProps): JSX.Element {
  const [conter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <Htag tag="h1">{conter}</Htag>
      <Button
        arrow="none"
        appearance="primary"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button arrow="right" appearance="ghost" className="fadfdsafd">
        Кнопка
      </Button>
      <P style={{ color: 'red' }} size="large">
        Красный параграф
      </P>
      <Tag size="small" color="green">
        Tag
      </Tag>
      <Tag size="small" color="grey">
        Tag
      </Tag>
      <Tag size="small" color="primary">
        Tag
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Input placeholder="input" />
      <hr />
      <TextArea placeholder="textarea" />
      <hr />

      {menu.map((m) => (
        <div key={m._id.secondCategory}>{m._id.secondCategory}</div>
      ))}
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  );
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
