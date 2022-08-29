import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import { ITopPageModel, TopLevelCategory } from '../interfaces/page.interface';
import { IFirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');

export const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const searchPage: ITopPageModel = {
  tags: ['поиск'],
  _id: '6068cc76d084b85d3f1abf56sfsfss000',
  secondCategory: 'Поиск',
  alias: 'search',
  title: 'Найдено:',
  category: 'Поиск',
  tagsTitle: 'Поиск',
  metaTitle: 'Лучшие курсы',
  metaDescription: 'Рейтинг лучших курсов',
  firstCategory: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};
