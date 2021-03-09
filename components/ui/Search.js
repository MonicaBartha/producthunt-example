import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const TextInput = styled.input`
  border: 1px solid var(--light-grey);
  padding: 1rem;
  min-width: 300px;
`;

const SubmitButton = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url('/static/img/search.png');
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: none;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

const Search = () => {
  return (
    <form css={css`
      position: relative;
    `}>
      <TextInput type="text" placeholder="Search products" />
      <SubmitButton type="submit">Search</SubmitButton>
    </form>
  );
};

export default Search;