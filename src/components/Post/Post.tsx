import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Button from '~components/common/Button';
import SideBar from '~components/common/SideBar/SideBar';
import Icon from '~components/icons';
import Comments from './Comments';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostTemplate from './PostTemplate';
import type { FrontMatter, Post as PostModel } from '~/models/Post';

interface Props {
  post: PostModel;
}

const PostAside = dynamic(() => import('./PostAside'), { ssr: false });

const Post = ({ post }: Props) => {
  const frontMatter: FrontMatter = {
    title: post.title,
    url: post.url,
    tags: post.tags,
    description: post.description,
    createdTime: post.createdTime,
  };

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const current = ref.current;

    const callback = (e: MouseEvent) => {
      if (e.target !== e.currentTarget) return;

      setOpen(false);
    };

    current?.addEventListener('click', callback);

    return () => {
      current?.removeEventListener('click', callback);
    };
  }, []);

  return (
    <PostTemplate
      aside={<PostAside />}
      content={
        <>
          <PostHeader postMetaData={{ ...frontMatter }} />
          <PostContent content={post.content} />
          <Comments className="block md:hidden" />
          <button
            type="button"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            Click Me!
          </button>
          <SideBar ref={ref} className="hidden md:block" isOpen={open}>
            <div className="mt-20 p-4">
              <div
                className={classNames(
                  'flex',
                  'justify-between',
                  'items-center'
                )}
              >
                <h3
                  className={classNames(
                    'leading-normal',
                    'font-medium',
                    'text-2xl'
                  )}
                >
                  댓글
                </h3>
                <Icon
                  className={classNames('cursor-pointer')}
                  type="close"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  창 닫기
                </Icon>
              </div>

              <Comments />
            </div>
          </SideBar>
        </>
      }
    />
  );
};

export default Post;
