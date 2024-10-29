import React from 'react';
import ReactDOM from 'react-dom/client';
import ButtonFromRemote from "./ButtonFromRemote";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <h1>MF Remote as standalone app</h1>
    <ButtonFromRemote />
  </React.StrictMode>
);
