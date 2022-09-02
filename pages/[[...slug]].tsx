import type { GetStaticPaths, GetStaticPropsContext } from 'next';
import { hygraphClient } from '../lib/hygraphClient';
import { allPagesQuery, pageQuery } from '../lib/hygraphQueries';
import Page from '../components/Page';
import { PageQueryQuery, AllPagesQuery } from '../graphql-types';

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug;
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const preview = Boolean(context.preview);
  const client = hygraphClient(preview);
  const { page } = await client.request<PageQueryQuery>(pageQuery, {
    slug: slugString ? `/${slugString}` : '/',
  })

  return {
    props: {
      preview,
      page,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const client = hygraphClient();
  const { pages } = await client.request<AllPagesQuery>(allPagesQuery)

  return {
    paths: pages.map((page) => page.slug),
    fallback: 'blocking'
  }
};
