import styled from 'styled-components';
import { colors } from '../../ui/vars';

export const Wrapper = styled.div`
  border: 1px solid var(${colors.MAIN_COLOR});
  // width: 25%;
  max-width: 810px;
  border-radius: 10px;
  margin: 0 8px 8px 0;

  @media screen and (max-width: 1050px) {
    width: 90%;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 8px;

    p {
      padding: 0;
      margin: 0 0 0 6px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  & .MuiTextField-root {
    margin: 8px;
  }

  & label.Mui-focused {
    color: #0009;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #0009 !important;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: fir-content;

  padding: 12px;
  margin: 8px;

  background-color: var(${colors.MAIN_COLOR});
  border: none;
  border-radius: 6px;

  color: white;

  cursor: pointer;
`;
