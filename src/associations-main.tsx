import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Associations from './pages/Associations';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Associations />
  </StrictMode>,
);
