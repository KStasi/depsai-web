import { HomePage } from '@pages';
import { DeploymentPage } from '@pages/deployment';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deployment" element={<DeploymentPage />} />
    </Routes>
  );
};
