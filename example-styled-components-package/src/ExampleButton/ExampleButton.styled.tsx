import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const ExampleButtonElement = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  ${() => css`
    background: red;
    border: 0;
    margin: 0;
    padding: 20px;
  `}
`;
