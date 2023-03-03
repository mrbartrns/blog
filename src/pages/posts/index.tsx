import { useState, useEffect } from 'react';
import Head from 'next/head';
import ItemSkeleton from '~/components/Post/ItemSkeleton';
import ListItem from '~/components/Post/ListItem';
import DefferredComponent from '~/components/common/DeferredComponent';
import ContentLayout from '~/components/layouts/ContentLayout';
import GlobalLayout from '~/components/layouts/GlobalLayout';
import useLoading from '~/hooks/common/useLoading';
import postService from '~/services/post';
import getPosts from '../../api/posts';
import type { GetStaticProps } from 'next';
import type { FrontMatter } from '~/models/Post';

interface Props {
  posts: FrontMatter[];
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await postService.getPostListMetaData();

    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const Page = ({ posts }: Props) => {
  const [isLoading, startTransition] = useLoading();
  // const [posts, setPosts] = useState<FrontMatter[]>([]);

  // useEffect(() => {
  //   startTransition(
  //     (async () => {
  //       try {
  //         const response = await getPosts();
  //         setPosts(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })()
  //   );
  // }, [startTransition]);

  return (
    <>
      <Head>
        <title>Blog - Portfolio</title>
        <meta key="title" content="Blog - Portfolio" property="og:title" />
      </Head>
      <GlobalLayout>
        <ContentLayout>
          <div>
            {isLoading ? (
              <DefferredComponent>
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
              </DefferredComponent>
            ) : (
              posts.map((post) => <ListItem key={post.title} post={post} />)
            )}
          </div>
        </ContentLayout>
      </GlobalLayout>
    </>
  );
};

export default Page;
