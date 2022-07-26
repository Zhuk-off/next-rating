import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
