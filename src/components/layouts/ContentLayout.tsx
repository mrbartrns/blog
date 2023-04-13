import styled from 'styled-components';

const ContentLayout = styled.div`
  margin: 0 auto;
  max-width: 44rem;
  padding: 24px;

  & + & {
    padding-top: 0;
  }
`;

export default ContentLayout;
