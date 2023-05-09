import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import cssVar from '~/lib/styles/cssVar';
import BlogIcon from './BlogIcon';
import CloseIcon from './CloseIcon';
import GithubIcon from './GithubIcon';
import Hamburger from './Hamburger';
import MailIcon from './MailIcon';
import PortfolioIcon from './PortfolioIcon';
import ProjectIcon from './ProjectIcon';
import WebIcon from './WebIcon';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  type: TypeofIcon;
  children?: React.ReactNode;
  noHoverEffect?: boolean;
}

type TypeofIcon =
  | 'github'
  | 'portfolio'
  | 'website'
  | 'mail'
  | 'blog'
  | 'project'
  | 'hamburger'
  | 'close';

const Icon = ({ type, noHoverEffect, ...props }: Props) => {
  return (
    <Wrapper noHoverEffect={noHoverEffect} {...props}>
      {getChild(type)}
    </Wrapper>
  );
};

const getChild = (type: TypeofIcon) => {
  switch (type) {
    case 'github':
      return <GithubIcon />;
    case 'website':
      return <WebIcon />;
    case 'portfolio':
      return <PortfolioIcon />;
    case 'mail':
      return <MailIcon />;
    case 'blog':
      return <BlogIcon />;
    case 'project':
      return <ProjectIcon />;
    case 'hamburger':
      return <Hamburger />;
    case 'close':
      return <CloseIcon />;
    default:
      throw new Error('type is required.');
  }
};

export default Icon;

type WrapperProps = Omit<Props, 'type'>;

const Wrapper = styled.span<WrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  fill: ${cssVar('text4')};
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ noHoverEffect }) =>
    !noHoverEffect &&
    css`
      &:hover {
        fill: ${cssVar('text3')};
      }
    `}
`;
