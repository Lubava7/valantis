import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import md5 from 'md5';
import { ItemState, ItemIterface } from './interface';
import { getCurrentDate } from './getCurrentDate';
import { Query } from '../../components/Filters/Filters';

const link = 'http://api.valantis.store:40000/';
const getAuthHeader = () => {
  const date = getCurrentDate();
  const headers = {
    'X-Auth': `${md5(`Valantis_${date}`)}`,
  };
  return headers;
};

const initialState: ItemState = {
  items: [],
  totalPages: 1,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        const items: ItemIterface[] = action.payload.res;
        state.items = items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getData.rejected, (state, action) => {
        console.error('API request failed with error:', action.error.message);
      });
  },
});

export default itemsSlice.reducer;

interface GetDataPayload {
  query: Partial<Query> | null;
  page: number;
}
export const getData = createAsyncThunk(
  'items/getData',
  async ({ query, page }: GetDataPayload) => {
    const params = {
      limit: 50,
      offset: (page - 1) * 50,
    };

    const authHeader = getAuthHeader();

    const resIds = await axios.post(
      link,
      {
        params: query || params,
        action: query ? 'filter' : 'get_ids',
      },
      { headers: authHeader }
    );

    const ids = resIds.data.result;
    const uniqueIds: any = Array.from(new Set(ids));

    if (!uniqueIds.length)
      return {
        res: [],
        totalPages: 1,
        page: 1,
      };

    const resData = await axios.post(
      link,
      {
        params: { ids: uniqueIds },
        action: 'get_items',
      },
      { headers: authHeader }
    );

    const totalCountHeader = resIds.headers['content-length'];

    const totalCount = Number(totalCountHeader);
    const totalPages = Math.ceil(totalCount / params.limit);

    return {
      res: resData.data.result,
      totalPages,
      page,
    };
  }
);
