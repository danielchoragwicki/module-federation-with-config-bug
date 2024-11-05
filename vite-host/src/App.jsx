import R, { Suspense } from 'react';
import RD from 'react-dom/client';

import { ButtonFromRemote } from '@namespace/viteViteRemote/ButtonFromRemote';
import { ExampleButton } from 'example-styled-components-package';
import styled, { css } from 'styled-components';

console.log('Share React', R, RD);

export const InternalButtonElement = styled.button`
  ${() => css`
    background: red;
    border: 0;
    margin: 0;
    padding: 20px;
  `}
`;


export default function () {
  return (
    <div>
      <ExampleButtonElement>Internal Button Element</ExampleButtonElement>
      <ExampleButton />
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonFromRemote />
      </Suspense>
    </div>
  );
}