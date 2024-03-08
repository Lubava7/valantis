import React, { FC } from 'react';

import { CustomPagination } from './styled';

interface Props {
  count?: number;
  page?: any;
  onChange?: any;
}

const PaginationComp: FC<Props> = ({ count, page, onChange }) => {
  return (
    <CustomPagination
      count={count}
      page={page}
      onChange={onChange}
      variant='outlined'
      boundaryCount={2}
      defaultPage={1}
      showLastButton
      siblingCount={1}
    />
  );
};

export default PaginationComp;
