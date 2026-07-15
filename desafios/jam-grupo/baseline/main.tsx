import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import JamGrupoBaseline from './JamGrupoBaseline';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JamGrupoBaseline />
  </StrictMode>,
);
