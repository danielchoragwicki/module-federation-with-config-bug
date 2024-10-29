import R, { Suspense } from 'react';
import RD from 'react-dom/client';

import { ButtonFromRemote } from '@namespace/viteViteRemote/ButtonFromRemote';
import { ExampleButton } from 'example-styled-components-package';

console.log('Share React', R, RD);

export default function () {
  return (
    <div>
      <ExampleButton />
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonFromRemote />
      </Suspense>
    </div>
  );
}