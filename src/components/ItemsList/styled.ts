import styled from 'styled-components';
import { colors } from '../../ui/vars';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media screen and (min-width: 1050px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CardList = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  border: 1px solid var(${colors.MAIN_COLOR});
  border-radius: 10px;
  background-color: #ffffff;
  padding: 24px;
`;

export const LoadData = styled.div`
  width: 100%;
`;

export const NoData = styled.div`
  width: 100%;
`;
