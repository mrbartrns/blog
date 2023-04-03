import styled from 'styled-components';
import cssVar from '~/lib/styles/cssVar';
import type { FrontMatter } from '~/models/Post';

interface Props {
  postMetaData: FrontMatter;
}

const ContentTitle = ({ postMetaData }: Props) => {
  const date = new Date(postMetaData.createdTime);

  return (
    <div className="my-16">
      <div
        className="title"
        style={{ marginTop: '2rem', marginBottom: '1.21875em' }}
      >
        <Title>{postMetaData.title}</Title>
      </div>
      <div
        className="meta flex flex-row"
        style={{ justifyContent: 'space-between' }}
      >
        <p>
          by <span className="font-bold">mrbartrns</span>
        </p>
        <PostDate>{`${date.getFullYear()}-${
          date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1
        }-${
          date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        }`}</PostDate>
      </div>
    </div>
  );
};

export default ContentTitle;

const Title = styled.h1`
  max-2idth: 100%;
  width: 100%;
  letter-spacing: -1px;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: 'rgb(55, 53, 47)';
  padding: 3px 2px;
  font-weight: 700;
  font-size: 3em;
  line-height: 1.3;
  margin-top: 1em;
`;

const PostDate = styled.p`
  color: ${cssVar('text2')};
  font-style: italic;
`;
