import type { GetServerSideProps } from 'next';
import { getAllTalks, getPageBySlug } from '../lib/api';
import Page, { PageProps } from '../components/Page';

export default Page;

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const slug = context?.params?.slug;
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const preview = Boolean(context.preview);
  const page = await getPageBySlug(preview, slugString ? `/${slugString}` : '/');
  const talks = await getAllTalks(preview);
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      page,
      talks,
    },
  };
};
