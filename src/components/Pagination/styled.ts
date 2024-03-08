import styled from 'styled-components';
import { Pagination as PaginationCustom } from '@mui/material';
import colors from '../../ui/vars/colors';

export const CustomPagination = styled(PaginationCustom)`
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: -20px; // 0
  background-color: #ffffff;
  width: 100%;
  padding: 20px;

  & button {
    color: var(${colors.MAIN_COLOR});
    border: 1px solid var(${colors.MAIN_COLOR});
    background-color: #cf182a57;
  }
`;
