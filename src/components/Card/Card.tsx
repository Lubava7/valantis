import React, { FC } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { ItemIterface } from '../../modules/items/interface';
import { CardComponent, Id, Price, Product, Brand, Button } from './styled';

const Card: FC<ItemIterface> = (item) => {
  return (
    <CardComponent>
      <CardContent>
        <Id>id: {item.id}</Id>
        <Product>{item.product}</Product>
        <Price>всего за {item.price} руб.</Price>
        <Brand brand={item.brand}>{item.brand || 'Без бренда'}</Brand>
      </CardContent>
      <CardActions>
        <Button>В корзину</Button>
      </CardActions>
    </CardComponent>
  );
};

export default Card;
