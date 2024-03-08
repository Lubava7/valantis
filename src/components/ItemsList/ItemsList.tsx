import { FC, useEffect, useState } from 'react';
import { getData } from '../../modules/items/ItemsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/redux/store';
import { Pagination, Card, Filters } from '../../components';
import { ListWrapper, CardList, LoadData, NoData } from './styled';
import { Query } from '../Filters/Filters';

interface Props {
  state?: string;
}

type PartialQuery = Partial<Query>;

const ItemsList: FC<Props> = () => {
  const dispatch = useDispatch<any>();
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setPage] = useState(1);

  const [query, setQuery] = useState<PartialQuery | null>(null);

  const totalPages = useSelector((state: RootState) => state.items.totalPages);
  const items = useSelector((state: RootState) => state.items.items);

  const onSearch = (query: Query | null) => {
    if (query) {
      let obj: PartialQuery = {};
      if (query.brand) obj.brand = query.brand;
      if (query.price) obj.price = query.price;
      if (query.product) obj.product = query.product;

      setQuery(obj);
    } else {
      setQuery(null);
    }
  };

  useEffect(() => {
    const getDataWithLoading = async () => {
      setIsLoading(true);
      await dispatch(
        getData({
          page: currentPage,
          query,
        })
      );
      setIsLoading(false);
    };

    getDataWithLoading();
  }, [currentPage, dispatch, query]);

  return (
    <>
      <ListWrapper>
        <Filters onSearch={onSearch} />
        <CardList>
          {isLoading ? (
            <LoadData>Данные загружаются ...</LoadData>
          ) : items && items.length > 0 ? (
            <>
              {items?.map((item: any) => (
                <Card key={item.id} {...item} />
              ))}
            </>
          ) : (
            <div>
              {isLoading ? (
                <LoadData>Данные загружаются ...</LoadData>
              ) : (
                <NoData>Данные не найдены</NoData>
              )}
            </div>
          )}
        </CardList>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event: any, page: any) => setPage(page)}
        />
      </ListWrapper>
    </>
  );
};

export default ItemsList;
