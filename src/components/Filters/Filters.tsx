import React, { FC, useState } from 'react';
import { Filters as FilterIcon } from '../../ui';
import TextField from '@mui/material/TextField';
import { Wrapper, Content, Button } from './styled';

export interface Query {
  product: string;
  brand: string;
  price: number | null;
}

interface Props {
  onSearch: (query: Query | null) => void;
}

const initQueryState = {
  product: '',
  brand: '',
  price: null,
};

const Filters: FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState<Query>(initQueryState);

  const handleChange = (value: string | number, key: keyof Query) => {
    setQuery({
      ...query,
      [key]: value,
    });
  };

  const handleReset = () => {
    onSearch(null);
    setQuery(initQueryState);
  };

  const filtered = query.brand || query.price || query.product;

  return (
    <Wrapper>
      <span>
        <FilterIcon /> <p>Фильтры:</p>
      </span>
      <Content>
        <TextField
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, 'product')
          }
          value={query.product}
          label='Искать по названию продукта:'
          variant='outlined'
        />
        <TextField
          type='number'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(parseInt(e.target.value), 'price')
          }
          value={query.price}
          label='Искать по цене:'
          variant='outlined'
        />
        <TextField
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, 'brand')
          }
          value={query.brand}
          label='Искать по бренду:'
          variant='outlined'
        />
      </Content>
      <Button onClick={() => onSearch(query)}>Начать поиск</Button>
      {filtered && <Button onClick={handleReset}> reset filters</Button>}
    </Wrapper>
  );
};

export default Filters;
