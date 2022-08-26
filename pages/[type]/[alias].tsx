import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { IMenuItem } from '../../interfaces/menu.interface';
import {
  ITopPageModel,
  TopLevelCategory,
} from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { IProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components';
import { API } from '../../helpers/api';
import Head from 'next/head';
import { Error404 } from '../404';

function TopPage({
  firstCategory,
  page,
  products,
}: ITopPageProps): JSX.Element {
  if (!page || !products) {
    return <Error404 />;
  }
  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription}></meta>
        <meta property="og:title" content={page.metaDescription}></meta>
        <meta property="og:description" content={page.metaDescription}></meta>
        <meta property="og:type" content="article"></meta>
      </Head>
      <TopPageComponent
        firstCategory={firstCategory}
        page={page}
        products={products}
      />
    </>
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: m.id,
    });

    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);

  if (!firstCategoryItem) {
    return { notFound: true };
  }
  try {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    });
    if (menu.length == 0) {
      return { notFound: true };
    }
    const { data: page } = await axios.get<ITopPageModel>(
      API.topPage.byAlias + params.alias
    );

    const { data: products } = await axios.post<IProductModel[]>(
      API.product.find,
      { category: page.category, limit: 10 }
    );
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
      revalidate: 20,
    };
  } catch (error) {
    return { notFound: true };
  }
};

interface ITopPageProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}
