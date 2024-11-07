// MainDashboard.js
import React from 'react';
import styled from 'styled-components';
import EcoBenefits from './components/EcoBenefits';
import CarbonData from './components/CarbonData';
import DailyOperations from './components/DailyOperations';
import LowCarbonStatistics from './components/LowCarbonStatistics';
import WeatherInfo from './components/WeatherInfo';
import SiteMap from './components/SiteMap';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  background-color: #1b2a3d;
  padding: 20px;
  min-height: 100vh; /* 使用 min-height 确保占满页面 */
  color: #ecf0f1;
`;

const MainDashboard = () => {
  return (
    <DashboardContainer>
      <EcoBenefits />
      <CarbonData />
      <DailyOperations />
      <LowCarbonStatistics />
      <WeatherInfo />
      <SiteMap />
    </DashboardContainer>
  );
};

export default MainDashboard;
