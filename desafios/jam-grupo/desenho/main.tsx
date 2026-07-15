import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import JamGrupoVotacao from './JamGrupoVotacao';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JamGrupoVotacao />
  </StrictMode>,
);
