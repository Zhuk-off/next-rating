import Image from 'next/image';
import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Подключенный шрифт</Htag>
      <Button arrow="none" appearance="primary">
        Кнопка
      </Button>
      <Button arrow="right" appearance="ghost" className="fadfdsafd">
        Кнопка
      </Button>
      <P style={{ color: 'red' }} size="large">
        Красный параграф
      </P>
    </>
  );
}
