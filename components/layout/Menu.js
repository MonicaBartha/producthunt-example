import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const MenuBar = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--grey2);
    font-family: 'PT Sans', sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Menu = () => {
  return (
    <MenuBar>
      <Link href="/">Home</Link>
      <Link href="/top">Top</Link>
      <Link href="/new-product">New Product</Link>
    </MenuBar>
  );
};

export default Menu;