import React, { FC } from 'react';
import { Bull } from '../../ui';
import { HeaderWrapper } from './styled';

interface Props {
  state?: string;
}

const Header: FC<Props> = ({ state }) => {
  return (
    <HeaderWrapper>
      <Bull /> <p>Valantis</p>
    </HeaderWrapper>
  );
};

export default Header;
