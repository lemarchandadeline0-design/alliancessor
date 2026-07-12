import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Entreprises from './pages/Entreprises';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Entreprises />
  </StrictMode>,
);
