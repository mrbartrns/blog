import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLElement> {
  label?: string | number;
}

const Tag = ({ label, ...props }: Props) => {
  return (
    <Container {...props}>
      <Icon />
      {label}
    </Container>
  );
};

const Container = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 9999px;
  font-size: 12px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid rgb(229 231 235);
  color: rgb(17 24 39);
  line-height: 1;
  word-break: keep-all;

  &:hover {
    background-color: rgb(241 245 249);
  }
`;

const Icon = () => (
  <svg
    className="fill-gray-600 shrink-0"
    fill="current"
    height="12"
    strokeWidth="0"
    viewBox="0 0 24 24"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M11.2425 3.02985C11.7783 3.1638 12.1041 3.70673 11.9701 4.24253L11.0308 7.99999H14.9692L16.0299 3.75746C16.1638 3.22166 16.7067 2.8959 17.2425 3.02985C17.7783 3.1638 18.1041 3.70673 17.9701 4.24253L17.0308 7.99999H20C20.5523 7.99999 21 8.44771 21 8.99999C21 9.55228 20.5523 9.99999 20 9.99999H16.5308L15.5308 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H15.0308L13.9701 20.2425C13.8362 20.7783 13.2933 21.1041 12.7575 20.9701C12.2217 20.8362 11.8959 20.2933 12.0299 19.7575L12.9692 16H9.03078L7.97014 20.2425C7.83619 20.7783 7.29326 21.1041 6.75746 20.9701C6.22167 20.8362 5.89591 20.2933 6.02986 19.7575L6.96922 16H4C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14H7.46922L8.46922 9.99999H6C5.44772 9.99999 5 9.55228 5 8.99999C5 8.44771 5.44772 7.99999 6 7.99999H8.96922L10.0299 3.75746C10.1638 3.22166 10.7067 2.8959 11.2425 3.02985ZM10.5308 9.99999L9.53078 14H13.4692L14.4692 9.99999H10.5308Z"
      fillRule="evenodd"
    />
  </svg>
);

export default Tag;
