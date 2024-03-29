'use client';
import { useState, useDeferredValue, Fragment } from 'react';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import dynamic from 'next/dynamic';
import { psService } from '~/lib/post';
import { filterPostsByKeywordsAndTags } from '~/lib/post/postQuery-client';
import Header from '~components/Header';
import {
  PostListSkeleton,
  PostTemplate,
  SearchBar,
  TagList,
  useTag,
} from '~components/Post';
import useDebounce from '~hooks/useDebounce';
import InfiniteScrollComponent from '~hooks/useInfiniteScroll/InfiniteScrollComponent';
import itemNotFound from 'public/item-not-found.json';
import type { GetStaticProps } from 'next';
import type { FrontMatter } from '~models/Post';

const PostList = dynamic(
  () => import('~components/Post').then((module) => module.PostList),
  {
    loading: () => <PostListSkeleton />,
  }
);

const INITIAL_POST_COUNTS = 5;
const NEXT_POST_COUNTS = 5;

interface Props {
  posts: FrontMatter[];
}

const PSListBuilder = ({ posts }: Props) => {
  const [keywords, setKeywords] = useState<string>('');
  const debounced = useDebounce((target: string) => {
    setKeywords(target);
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    debounced(value);
  };

  // used in infinite scroll
  const [counts, setCounts] = useState(
    Math.min(INITIAL_POST_COUNTS, posts.length)
  );

  // tags
  const { selectedTags, toggleTag, clear } = useTag();

  // posts
  const filteredPosts = useDeferredValue(
    filterPostsByKeywordsAndTags(posts, { keywords, selectedTags }).slice(
      0,
      counts
    )
  );
  return (
    <Fragment>
      <div
        className={classNames(
          'max-w-[44rem]',
          'lg:max-w-screen-lg',
          'p-6',
          'mx-auto'
        )}
      >
        <Header
          title="Problem Solvings"
          description={
            keywords.length > 0 ? (
              <InputKeywordsMessage keywords={keywords} />
            ) : selectedTags.length > 0 ? (
              <TagSelectedMessage selectedTags={selectedTags} />
            ) : (
              '알고리즘 풀이들을 모아볼 수 있어요.'
            )
          }
        />
        <SearchBar onChange={handleChange} />
      </div>
      <PostTemplate
        orderAsideFirst
        aside={
          <TagList
            className={classNames({ hidden: keywords.length > 0 }, 'lg:block')}
            posts={posts}
            onClick={toggleTag}
            onReset={clear}
          />
        }
        content={
          <div>
            {filteredPosts.length > 0 ? (
              <>
                <PostList category="ps" posts={filteredPosts} />
                <InfiniteScrollComponent
                  threshold={0.7}
                  onIntersect={() => {
                    setCounts((prev) =>
                      Math.min(prev + NEXT_POST_COUNTS, posts.length)
                    );
                  }}
                />
              </>
            ) : (
              <NoResult message="해당 키워드에 대한 포스트가 아직 없네요." />
            )}
          </div>
        }
      />
    </Fragment>
  );
};

export default PSListBuilder;

interface InputMessageProps {
  keywords: string;
}

const InputKeywordsMessage = ({ keywords }: InputMessageProps) => {
  return (
    <p>
      제목, 태그에{' '}
      <span className={classNames('text-[color:var(--primary-variant)]')}>
        {keywords}
      </span>{' '}
      키워드가 포함된 포스트를 검색해요.
    </p>
  );
};

interface TagMessageProps {
  selectedTags: string[];
}

const TagSelectedMessage = ({ selectedTags }: TagMessageProps) => {
  return (
    <p>
      {selectedTags.map((tag, index) => (
        <span
          key={tag}
          className={classNames('text-[color:var(--primary-variant)]')}
        >
          {index < selectedTags.length - 1 ? tag.concat(', ') : tag}
        </span>
      ))}{' '}
      태그가 포함된 포스트를 검색해요.
    </p>
  );
};

interface NoResultProps {
  message?: string;
}

const NoResult = ({ message }: NoResultProps) => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'gap-4',
        'justify-center',
        'items-center'
      )}
    >
      <div className={classNames('mx-auto', 'w-full', 'max-w-[400px]')}>
        <Lottie loop animationData={itemNotFound} />
      </div>
      <p>{message}</p>
    </div>
  );
};
