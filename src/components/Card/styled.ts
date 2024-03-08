import styled from 'styled-components';
import {
  Card as _Card,
  Typography as _Typography,
  Button as _Button,
} from '@mui/material';
import { colors } from '../../ui/vars';

export const CardComponent = styled(_Card)`
  max-width: 425px;
  margin: 12px 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .MuiTypography-root {
    text-align: start !important;
    margin-bottom: 0.5em !important;
  }
`;

export const Id = styled(_Typography)``;
export const Price = styled(_Typography)`
  font-style: italic !important;
`;
export const Product = styled(_Typography)`
  font-size: 1.2em !important;
`;
export const Brand = styled(_Typography)<{ brand: string }>`
  font-size: ${(p) => (p.brand ? '1.2em' : '0.8em')}!important;
  font-weight: ${(p) => (p.brand ? '600' : 'light')}!important;
  font-style: italic !important;
`;

export const Button = styled(_Button)`
  color: var(${colors.MAIN_COLOR}) !important;
  background-color: #ffffff !important;
  font-size: 1.2em !important;
  border-radius: 10px !important;
  border: 1px solid var(${colors.MAIN_COLOR}) !important;
  padding: 8px !important;
  width: 100% !important;
  transition: background 255ms, color 255ms !important;
  cursor: pointer;

  &:hover {
    color: #ffffff !important;
    background-color: var(${colors.MAIN_COLOR}) !important;
  }
`;
