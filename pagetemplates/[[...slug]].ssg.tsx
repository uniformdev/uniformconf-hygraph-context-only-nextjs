import type { GetStaticPaths, GetStaticPropsContext } from 'next';
import { getAllPages, getAllTalks, getPageBySlug } from '../lib/api';
import Page from '../components/Page';

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug;
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const preview = Boolean(context.preview);
  const page = await getPageBySlug(preview, slugString ? `/${slugString}` : '/');
  const talks = await getAllTalks(preview);
  return {
    props: {
      preview,
      page,
      talks,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = (await getAllPages()) ?? [];

  return {
    paths: pages.map((c) => c.fields.slug!),
    fallback: true,
  };
};
